import IElement, { ValidationResult } from '../IElement';
import { ElementTypes } from './ElementTypes';
import { Observable, BehaviorSubject } from 'rxjs';

class TextInputElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementTypes.TextInput;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  private value!: BehaviorSubject<string>;

  text(text: string): TextInputElement {
    if (this.value == null) this.value = new BehaviorSubject<string>('');
    this.value.next(text);
    return this;
  }

  text(text: Observable<string>): TextInputElement {
    if (this.value == null) this.value = new BehaviorSubject<string>('');
    text.subscribe({
      next: v => this.value.next(v),
    });
    return this;
  }

  text(text: BehaviorSubject<string>): TextInputElement {
    this.value = text;
    return this;
  }
}

const TextInput = (controller: string | Observable<string> | BehaviorSubject<string>): ButtonElement => {
  return new TextInputElement().text(controller);
};

export default TextInput;
