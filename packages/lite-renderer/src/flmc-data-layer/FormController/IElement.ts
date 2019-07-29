export default interface IElement {
  dispose(): void;

  readonly type: string;

  validate(): ValidationResult;
}

export class ValidationResult {
  constructor(public isValid: boolean, public validationMessage?: string) {}

  innerValidationResults?: ValidationResult[];
}

export function isElement(item: any): item is IElement {
  return item.type != null && item.dispose != null && item.validate != null;
}

export function areElements(item: any): item is IElement[] {
  return item.map != null && (item as any).map((i: any) => isElement(i)).reduce((p: boolean, c: boolean) => p && c);
}

