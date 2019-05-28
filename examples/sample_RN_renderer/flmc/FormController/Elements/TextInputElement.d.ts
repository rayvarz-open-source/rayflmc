import IElement, { ValidationResult } from '../IElement';
import { Observable, BehaviorSubject } from 'rxjs';
export declare class TextInputElement implements IElement {
    dispose(): void;
    readonly type: string;
    validate(): ValidationResult;
    value: BehaviorSubject<string>;
    private textR;
    private textO;
    private textB;
    text(text: BehaviorSubject<string> | Observable<string> | string): TextInputElement;
}
declare const TextInput: (controller: string | Observable<string> | BehaviorSubject<string>) => TextInputElement;
export default TextInput;
