import IElement, { ValidationResult } from '../IElement';
import { ElementTypes } from './ElementTypes';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';

interface OnTapCallBack {
  (): void;
}

class ButtonElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementTypes.Button;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  private buttonText = new BehaviorSubject<string>('');

  textR(text: string): ButtonElement {
    this.buttonText.next(text);
    return this;
  }

  textO(text: Observable<string>): ButtonElement {
    text.subscribe({
      next: v => this.buttonText.next(v),
    });
    return this;
  }

  text(text: Observable<string> | string): TextInputElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }
  // callback

  private buttonText = new BehaviorSubject<OnTapCallBack | null>(null);

  onTapR(action: OnTapCallBack): ButtonElement {
    this.buttonText.next(action);
    return this;
  }

  onTapO(action: Observable<OnTapCallBack>): ButtonElement {
    action.subscribe({
      next: v => this.buttonText.next(v),
    });
    return this;
  }

  onTap(action: Observable<OnTapCallBack> | OnTapCallBack): TextInputElement {
    if (typeof action === 'function') return this.onTapR(action);
    if (isObservable(action)) return this.onTapO(action);
    throw new Error('given action type is not supported');
  }
}

const Button = (title: string | null): ButtonElement => {
  let element = new ButtonElement();
  if (title == null) return element;
  return element.text(title);
};

export default Button;
