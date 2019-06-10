import IElement, { ValidationResult } from 'flmc-data-layer/src/FormController/IElement';
import { ElementType } from '../../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { isSubject } from 'flmc-data-layer/src/FormController/Elements/RxUtils';

export class TextInputElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.INPUT_TEXT;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // title

  titleValue = new BehaviorSubject<string>("");

  private titleR(text: string): TextInputElement {
    this.titleValue.next(text);
    return this;
  }

  private titleO(text: Observable<string>): TextInputElement {
    text.subscribe({
      next: v => this.titleValue.next(v),
    });
    return this;
  }

  private titleB(text: BehaviorSubject<string>): TextInputElement {
    this.titleValue = text;
    return this;
  }

  title(text: BehaviorSubject<string> | Observable<string> | string): TextInputElement {
    if (typeof text === 'string') return this.titleR(text);
    if (isSubject(text)) return this.titleB(text);
    if (isObservable(text)) return this.titleO(text);
    throw new Error('given text type is not supported');
  }

  // text

  value!: BehaviorSubject<string>;

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

const TextInput = (controller: string | Observable<string> | BehaviorSubject<string>): TextInputElement => {
  return new TextInputElement().text(controller);
};

export default TextInput;
