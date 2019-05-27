import IElement, { ValidationResult } from '../IElement';
import { ElementTypes } from './ElementTypes';
import { Observable, BehaviorSubject } from 'rxjs';

class LabelElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementTypes.Label;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  private value = new BehaviorSubject<string>('');

  private textR(text: string): LabelElement {
    this.value.next(text);
    return this;
  }

  private textO(text: Observable<string>): LabelElement {
    text.subscribe({
      next: v => this.value.next(v),
    });
    return this;
  }

  text(text: Observable<string> | string): TextInputElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }
}

const Label = (value: string | null): LabelElement => {
  let element = new LabelElement();
  if (value == null) return element;
  return element.text(title);
};

export default Label;
