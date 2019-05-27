import IElement, { ValidationResult } from '../IElement';
import { ElementTypes } from './ElementTypes';
import { Observable, BehaviorSubject } from 'rxjs';

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

  text(text: string): ButtonElement {
    this.buttonText.next(text);
    return this;
  }

  text(text: Observable<string>): ButtonElement {
    text.subscribe({
      next: v => this.buttonText.next(v),
    });
    return this;
  }

  // callback

  private buttonText = new BehaviorSubject<OnTapCallBack | null>(null);

  onTap(action: OnTapCallBack): ButtonElement {
    this.buttonText.next(action);
    return this;
  }

  onTap(action: Observable<OnTapCallBack>): ButtonElement {
    action.subscribe({
      next: v => this.buttonText.next(v),
    });
    return this;
  }
}

const Button = (title: string | null): ButtonElement => {
  let element = new ButtonElement();
  if (title == null) return element;
  return element.text(title);
};

export default Button;
