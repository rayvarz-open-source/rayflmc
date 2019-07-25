// TODO: CLEAN UP!

function jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

class ViewGenerator {


    constructor(elemntDefinition) {
        this.elemntDefinition = elemntDefinition;
    }

    generateReactUseState(attributeDefinition) {
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        let typename = attributeDefinition.attributeName;
        return `const [${lowercaseTypeName}, set${typename}] = React.useState<${typename}>(${attributeDefinition.options.default});`;
    }

    generateSubscribe(attributeDefinition) {
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        let typename = attributeDefinition.attributeName;
        return `
let ${lowercaseTypeName}Sub = element.${lowercaseTypeName}Container.subscribe({ next: v => set${typename}(v) });
`.trim();
    }

    generateUnSubscribe(attributeDefinition) {
        let lowercaseTypeName = jsLcfirst(attributeDefinition.attributeName);
        return `${lowercaseTypeName}Sub.unsubscribe();`;
    }


    generate() {
        let useStates = this.elemntDefinition.elementAttributes.map(attr => this.generateReactUseState(attr));
        let subscribes = this.elemntDefinition.elementAttributes.map(attr => this.generateSubscribe(attr));
        let unsubscribes = this.elemntDefinition.elementAttributes.map(attr => this.generateUnSubscribe(attr));
        return `
import { ${this.elemntDefinition.elementName}Element } from './${this.elemntDefinition.elementName}Element';
import * as React from 'react';
import { ${this.elemntDefinition.elementAttributes.map(v => v.attributeName).join(", ")} } from './${this.elemntDefinition.elementName}ElementAttributes';
import { Visibility } from '../base/BaseElement';

type Props = {
    element: ${this.elemntDefinition.elementName}Element,
    weight:number
}
  
export default function ${this.elemntDefinition.elementName}View({element,weight}: Props) {

//region generated
/*******************************************/
/* GENERATED CODE, DO NOT MODIFY BY HAND!! */
/*******************************************/
${useStates.join("\n")}
const [visibility, setVisibility] = React.useState<Visibility>('show');

React.useEffect(() => {

    ${subscribes.join("\n")}
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
        ${unsubscribes.join("\n")}
        visibilitySub.unsubscribe();
    };
}, []);
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
//endregion

return null;

}
`;
    }

}