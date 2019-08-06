import { ValidationResult } from "../../../flmc-data-layer/FormController/IElement";
export type TextInputValidator = (value: string) => ValidationResult;
export type TextInputValidatorBuilder = (...args: any[]) => TextInputValidator;

export function isTextInputValidator(value: any): value is TextInputValidatorBuilder {
  return typeof value == "function";
}

export interface TextInputValidationLocalization {
  contains: string;
  notEmpty: string;
  maxLength: string;
  minLength: string;
}

export function makeTextInputValidations(
  localization: TextInputValidationLocalization
): { [name: string]: TextInputValidatorBuilder } {
  return {
    contains: (compare: string) => (value: string) =>
      new ValidationResult(value.includes(compare), localization.contains.replace("{compare}", compare)),
    notEmpty: () => (value: string) => new ValidationResult(value != "" && value != null, localization.notEmpty),
    maxLength: (length: number) => (value: string) =>
      new ValidationResult(value.length <= length, localization.maxLength.replace("{length}", length.toString())),
    minLength: (length: number) => (value: string) =>
      new ValidationResult(value.length >= length, localization.maxLength.replace("{length}", length.toString()))
  };
}

export const TextInputValidations = makeTextInputValidations({
  contains: "This field must include {compare}",
  notEmpty: "This field cannot be empty",
  maxLength: "Maximum length of this field is {length} char(s)",
  minLength: "Minimum length of this field is {length} char(s)"
});
