import { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
export type TextInputValidator = (value: string) => ValidationResult;
export type TextInputValidatorBuilder = (...args: any[]) => TextInputValidator;

export function isTextInputValidator(value: any): value is TextInputValidatorBuilder {
    return typeof(value) == "function";
}

export const TextInputValidations: { [name: string] : TextInputValidatorBuilder;  } = {
    
    contains: (compare: string) => (value: string) => new ValidationResult(value.includes(compare), `This field must include ${compare}`)
    
};
