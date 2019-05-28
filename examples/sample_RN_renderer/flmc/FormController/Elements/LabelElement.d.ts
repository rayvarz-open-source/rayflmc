import IElement, { ValidationResult } from '../IElement';
import { Observable } from 'rxjs';
declare class LabelElement implements IElement {
    dispose(): void;
    readonly type: string;
    validate(): ValidationResult;
    private value;
    private textR;
    private textO;
    text(text: Observable<string> | string): LabelElement;
}
declare const Label: (value: string | null) => LabelElement;
export default Label;
