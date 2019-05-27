import IElement, { ValidationResult } from '../IElement';
import { ElementTypes } from './ElementTypes';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { isSubject } from './RxUtils';

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

  private textR(text: string): TextInputElement {
    if (this.value == null) this.value = new BehaviorSubject<string>('');
    this.value.next(text);
    return this;
  }

  private textO(text: Observable<string>): TextInputElement {
    if (this.value == null) this.value = new BehaviorSubject<string>('');
    text.subscribe({
      next: v => this.value.next(v),
    });
    return this;
  }

  private textB(text: BehaviorSubject<string>): TextInputElement {
    this.value = text;
    return this;
  }

  text(text: BehaviorSubject<string> | Observable<string> | string): TextInputElement {
    if (typeof text === 'string') return this.textR(text);
    if (isSubject(text)) return this.textB(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }
}

const TextInput = (controller: string | Observable<string> | BehaviorSubject<string>): ButtonElement => {
  return new TextInputElement().text(controller);
};

export default TextInput;
