import IElement, { ValidationResult } from '../IElement';
import { Observable } from 'rxjs';
interface OnTapCallBack {
    (): void;
}
declare class ButtonElement implements IElement {
    dispose(): void;
    readonly type: string;
    validate(): ValidationResult;
    private buttonText;
    textR(text: string): ButtonElement;
    textO(text: Observable<string>): ButtonElement;
    text(text: Observable<string> | string): ButtonElement;
    private buttonCallback;
    onTapR(action: OnTapCallBack): ButtonElement;
    onTapO(action: Observable<OnTapCallBack>): ButtonElement;
    onTap(action: Observable<OnTapCallBack> | OnTapCallBack): ButtonElement;
}
declare const Button: (title: string | null) => ButtonElement;
export default Button;
