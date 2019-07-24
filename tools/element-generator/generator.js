
function jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

class ElementGenerator {

    constructor(elementDefinition) {
        this.elementDefinition = elementDefinition;
    }

    generateHeaders(typenames) {
        return `
import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { BaseElement } from "../base/BaseElement";
import { isSubject } from '../../../flmc-data-layer';
import { TypeGuards, ${typenames.join(", ")} } from './${this.elementDefinition.elementName}ElementAttributes';
        `.trim()
    }

    generateClass(blocks) {
        return `
export class ${this.elementDefinition.elementName}Element extends BaseElement implements IElement {
    ${blocks.join("\n")}
}
        `.trim()
    }

    generateSimpleAttributeForTypeNameWithoutTypeGuard(attributeDefinition) {
        let elementType = `${this.elementDefinition.elementName}Element`;
        let typename = attributeDefinition.attributeName;
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        let containerName = `${lowercaseTypeName}Container`;
        let oFunctiuonName = `${lowercaseTypeName}O`;
        let rFunctiuonName = `${lowercaseTypeName}R`;
        return `
${containerName} = new BehaviorSubject<${typename}>([]);

private ${rFunctiuonName}(value: ${typename}): ${elementType} {
this.${containerName}.next(value);
return this;
}

private ${oFunctiuonName}(value: Observable<${typename}>): ${elementType} {
value.subscribe({next: v => this.${containerName}.next(v)});
return this;
}

${lowercaseTypeName}(value: Observable<${typename}> | ${typename}): ${elementType} {
if (isObservable(value)) this.${oFunctiuonName}(value);
else this.${rFunctiuonName}(value);
return this;
}
`.trim();
    }

    generateBidirectionalAttributeForTypeNameWithoutTypeGuard(attributeDefinition) {
        let elementType = `${this.elementDefinition.elementName}Element`;
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        let typename = attributeDefinition.attributeName;
        let containerName = `${lowercaseTypeName}Container`;
        let oFunctiuonName = `${lowercaseTypeName}O`;
        let rFunctiuonName = `${lowercaseTypeName}R`;
        let bFunctiuonName = `${lowercaseTypeName}B`;
        return `
${containerName} = new BehaviorSubject<${typename}>([]);

private ${bFunctiuonName}(value: ${typename}): ${elementType} {
this.${containerName} = value;
return this;
}

private ${rFunctiuonName}(value: ${typename}): ${elementType} {
this.${containerName}.next(value);
return this;
}

private ${oFunctiuonName}(value: Observable<${typename}>): ${elementType} {
value.subscribe({next: v => this.${containerName}.next(v)});
return this;
}

${lowercaseTypeName}(value: Observable<${typename}> | ${typename}): ${elementType} {
if (isObservable(value)) this.${oFunctiuonName}(value);
else this.${rFunctiuonName}(value);
return this;
}

${lowercaseTypeName}(value: BehaviorSubject<${typename}> | Observable<${typename}> | ${typename}): TextInputElement {
    if (isSubject(value)) return this.${bFunctiuonName}(value);
    else if (isObservable(value)) return this.${oFunctiuonName}(value);
    return this.${rFunctiuonName}(value);
}
`.trim();
    }

    generateBidirectionalAttributeForTypeNameWithTypeGuard(attributeDefinition) {
        let elementType = `${this.elementDefinition.elementName}Element`;
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        let typename = attributeDefinition.attributeName;
        let containerName = `${lowercaseTypeName}Container`;
        let oFunctiuonName = `${lowercaseTypeName}O`;
        let rFunctiuonName = `${lowercaseTypeName}R`;
        let bFunctiuonName = `${lowercaseTypeName}B`;
        return `
${containerName} = new BehaviorSubject<${typename}>([]);

private ${bFunctiuonName}(value: ${typename}): ${elementType} {
this.${containerName} = value;
return this;
}

private ${rFunctiuonName}(value: ${typename}): ${elementType} {
this.${containerName}.next(value);
return this;
}

private ${oFunctiuonName}(value: Observable<${typename}>): ${elementType} {
value.subscribe({next: v => this.${containerName}.next(v)});
return this;
}

${lowercaseTypeName}(value: Observable<${typename}> | ${typename}): ${elementType} {
if (isObservable(value)) this.${oFunctiuonName}(value);
else this.${rFunctiuonName}(value);
return this;
}

${lowercaseTypeName}(value: BehaviorSubject<${typename}> | Observable<${typename}> | ${typename}): TextInputElement {
if (TypeGuards.${attributeDefinition.options.typeguard}(value)) return this.${rFunctiuonName}(value);
else if (isObservable(value)) return this.${oFunctiuonName}(value);
else if (isSubject(value)) return this.${bFunctiuonName}(value);
throw new Error(\`invalid type \${typeof(value)} for ${typename}\`)
}
`.trim();
    }


    generateSimpleAttributeForTypeNameWithTypeGuard(attributeDefinition) {
        let elementType = `${this.elementDefinition.elementName}Element`;
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        let typename = attributeDefinition.attributeName;
        let containerName = `${lowercaseTypeName}Container`;
        let oFunctiuonName = `${lowercaseTypeName}O`;
        let rFunctiuonName = `${lowercaseTypeName}R`;
        return `
${containerName} = new BehaviorSubject<${typename}>([]);

private ${rFunctiuonName}(value: ${typename}): ${elementType} {
this.${containerName}.next(value);
return this;
}

private ${oFunctiuonName}(value: Observable<${typename}>): ${elementType} {
value.subscribe({next: v => this.${containerName}.next(v)});
return this;
}

${lowercaseTypeName}(value: Observable<${typename}> | ${typename}): ${elementType} {
if (TypeGuards.${attributeDefinition.options.typeguard}(value)) return this.${rFunctiuonName}(value);
else if (isObservable(value)) return this.${oFunctiuonName}(value);
throw new Error(\`invalid type \${typeof(value)} for ${typename}\`)
}
`.trim();
    }


    generate() {
        let body = [];
        this.elementDefinition.elementAttributes.forEach(attr => {
            let noTypeGuard = attr.options.typeguard == null;
            let noBidirectional = attr.options.bidirectional == null;

            if (noTypeGuard && noBidirectional) body.push(this.generateSimpleAttributeForTypeNameWithoutTypeGuard(attr));
            if (!noTypeGuard && noBidirectional) body.push(this.generateSimpleAttributeForTypeNameWithTypeGuard(attr));
            if (noTypeGuard && !noBidirectional) body.push(this.generateBidirectionalAttributeForTypeNameWithoutTypeGuard(attr));
            if (!noTypeGuard &&! noBidirectional) body.push(this.generateBidirectionalAttributeForTypeNameWithTypeGuard(attr));
        });

        return `
${this.generateHeaders(this.elementDefinition.elementAttributes.map(v => v.name))}

${this.generateClass(body)}
        `
    }

}