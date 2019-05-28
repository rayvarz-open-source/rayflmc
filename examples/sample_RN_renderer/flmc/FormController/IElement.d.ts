export default interface IElement {
    dispose(): void;
    readonly type: string;
    validate(): ValidationResult;
}
export declare class ValidationResult {
    isValid: boolean;
    validationMessage?: string | undefined;
    constructor(isValid: boolean, validationMessage?: string | undefined);
    innerValidationResults?: ValidationResult[];
}
export declare function isElement(item: any): item is IElement;
export declare function areElements(item: any): item is IElement[];
