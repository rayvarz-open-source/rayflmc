import IElement, { ValidationResult } from '../IElement';
import { Observable, BehaviorSubject } from 'rxjs';
export interface OnTapCallBack {
    (): void;
}
export declare class ButtonElement implements IElement {
    dispose(): void;
    readonly type: string;
    validate(): ValidationResult;
    buttonText: BehaviorSubject<string>;
    textR(text: string): ButtonElement;
    textO(text: Observable<string>): ButtonElement;
    text(text: Observable<string> | string): ButtonElement;
    buttonCallback: BehaviorSubject<OnTapCallBack>;
    onTapR(action: OnTapCallBack): ButtonElement;
    onTapO(action: Observable<OnTapCallBack>): ButtonElement;
    onTap(action: Observable<OnTapCallBack> | OnTapCallBack): ButtonElement;
}
declare const Button: (title: string | null) => ButtonElement;
export default Button;
