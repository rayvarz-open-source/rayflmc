export default interface IElement {
  dispose(): void;

  readonly type: string;

  validate(): ValidationResult;
}

export class ValidationResult {
  constructor(public isValid: boolean, public validationMessage?: string) {}

  innerValidationResults?: ValidationResult[];
}
