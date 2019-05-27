import * as mocha from 'mocha';
import { assert, expect } from 'chai';
import IElement, {ValidationResult} from '../src/FormController/IElement';
import FormController from '../src/FormController/FormController';


class ExampleElement implements IElement {

    constructor(private validation: boolean) {}

    type: string = "EXAMPLE";

    dispose(): void { }

    validate(): ValidationResult {
        return new ValidationResult(this.validation);
    }

}

function Example(validate: boolean) : ExampleElement { return new ExampleElement(validate) }

class ExampleFormWithOkValidation extends FormController {

    elements = [
        Example(true),
        Example(true),
        Example(true),
        Example(true)
    ];

}

class ExampleFormWithNOkValidation extends FormController {

    elements = [
        Example(true),
        Example(true),
        Example(false),
        Example(true)
    ];

}

describe('form controller', () => {
    describe('validation', () => {
        it('should validate all elements', () => {
            expect(new ExampleFormWithNOkValidation().validate().map(v => v.isValid).reduce((p, c) => p && c)).equal(false);
            expect(new ExampleFormWithOkValidation().validate().map(v => v.isValid).reduce((p, c) => p && c)).equal(true);
        })
    })
});
