import {ContainerModel} from "../../form/elements/container/ContainerModel";

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
  return (item as any).map((i: any) => isElement(i)).reduce((p: boolean, c: boolean) => p && c);
}
export function areContainElement(item: ContainerModel[]): ContainerModel[] {
  return (item as any).map((i: ContainerModel) => isElement(i.element)).reduce((p: boolean, c: boolean) => p && c);
}
