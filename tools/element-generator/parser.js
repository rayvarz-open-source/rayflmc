const sample = `
// Element: TextInput
/**
 * @[{"bidirectional": true,"required": true, "typeguard": "isValue", "default": "''"}]
 * contaienr that holds value of text input.
 * @example
 * // how to read a text input value
 * 
 * controller = new BehaviorSubject<string>("text input default value")
 * TextInput(controller)
 * console.log(controller.value)
 * 
 * // how to set text input value
 * 
 * controller.next("new value")
 * 
 */
export type Value = string;
/**
 * 
 */
export type Title = string;
// End Element

// type guards

export const TypeGuards = {
    isValue: function isValue(value: any): value is Title {
        return typeof(value) == "string"
    }
}
`

const ATTRIBUTE = /\/\*\*((.|\n)*?)export type(.*?);/gm;
const ATTRIBUTE_FILE_PARSER = /\/\/ Element:(.*?)\n((.|\n)*?)\/\/ End Element\n/gm;
const OPTIONS = /@\[(.*?)\]/gm;

class AttributeDefinition {

    constructor({attributeName, attributeType, comment, options}) {
        this.attributeName = attributeName;
        this.attributeType = attributeType;
        this.comment = comment;
        this.options = options;
    }

}

class ElementDefinition {
    
    constructor({elementName, elementAttributes}) {
        this.elementName = elementName;
        this.elementAttributes = elementAttributes;
    }

}

class Parser {

    constructor(file) {
        this.file = file;        
    }

    parse() {
        var fileRegex = new RegExp(ATTRIBUTE_FILE_PARSER);
        let block = fileRegex.exec(this.file);
        let elementName = block[1];
        let rawAttributes = block[2];
        
        rawAttributes = rawAttributes.match(ATTRIBUTE);

        let attributes = rawAttributes.map(value => {
            let attributeRegex = new RegExp(ATTRIBUTE);
            let optionsRegex = new RegExp(OPTIONS);

            let result = attributeRegex.exec(value);
            let rawComment = result[1];
            let comment = rawComment;
            let name = result[3].split("=")[0].trim();
            let type = result[3].split("=")[1].trim();
            let optionsResult = optionsRegex.exec(rawComment);
            let options = {};
            if (optionsResult) {
                options = JSON.parse(optionsResult[1]);
                comment = comment.replace(optionsResult[0], "");
            }
            return new AttributeDefinition({
                attributeName: name,
                attributeType: type,
                comment: ("/**" + comment).trim(),
                options: options,
            });
        });

        return new ElementDefinition({
            elementAttributes: attributes,
            elementName: elementName.trim(),
        });
    }

}