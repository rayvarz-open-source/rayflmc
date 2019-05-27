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

  text(text: string): LabelElement {
    this.value.next(text);
    return this;
  }

  text(text: Observable<string>): LabelElement {
    text.subscribe({
      next: v => this.value.next(v),
    });
    return this;
  }
}

const Label = (value: string | null): ButtonElement => {
  let element = new LabelElement();
  if (value == null) return element;
  return element.text(title);
};

export default Label;
