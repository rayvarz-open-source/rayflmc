import IElement, { ValidationResult } from 'flmc-data-layer/src/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import SelectBox from "../selectBox/SelectBoxElement";

export class SelectGroupElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.SELECT_BOX_GROUP;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  selectBoxText = new BehaviorSubject<string>('');
  selectBoxValue = new BehaviorSubject<string>("");
  selectBoxName = new BehaviorSubject<string>('');
  selectBoxElements = new BehaviorSubject<any>([]);

  private textR(text: string): SelectGroupElement {
    this.selectBoxText.next(text);
    return this;
  }

  private textO(text: Observable<string>): SelectGroupElement {
    text.subscribe({
      next: v => this.selectBoxText.next(v),
    });
    return this;
  }

  text(text: Observable<string> | string): SelectGroupElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }


  private valueR(value: string): SelectGroupElement {
    this.selectBoxValue.next(value);
    return this;
  }

  private valueO(value: Observable<string>): SelectGroupElement {
    value.subscribe({
      next: v => this.selectBoxValue.next(v),
    });
    return this;
  }

  value(value: Observable<string> | string): SelectGroupElement {
    if (typeof value === 'string') return this.valueR(value);
    if (isObservable(value)) return this.valueO(value);
    throw new Error('given value type is not supported');
  }
  // callback

  checkChangeCallback = new BehaviorSubject<VoidFunction | null>(null);

  private onCheckChangeR(action: VoidFunction): SelectGroupElement {
    this.checkChangeCallback.next(action);
    return this;
  }

  private onCheckChangeO(action: Observable<VoidFunction>): SelectGroupElement {
    action.subscribe({
      next: v => this.checkChangeCallback.next(v),
    });
    return this;
  }

  onCheckChange(action: Observable<VoidFunction> | VoidFunction): SelectGroupElement {
    if (typeof action === 'function') return this.onCheckChangeR(action);
    if (isObservable(action)) return this.onCheckChangeO(action);
    throw new Error('given action type is not supported');
  }
  private nameR(name: string): SelectGroupElement {
    this.selectBoxName.next(name);
    return this;
  }
  private nameO(name: Observable<string>): SelectGroupElement {
    name.subscribe({
      next: v => this.selectBoxName.next(v),
    });
    return this;
  }

  name(name: Observable<string> | string): SelectGroupElement {
    if (typeof name === 'string') return this.nameR(name);
    if (isObservable(name)) return this.nameO(name);
    throw new Error('given styleType is not supported');
  }

  private elementsR(value: any): SelectGroupElement {
    this.selectBoxElements.next(value);
    return this;
  }

  private elementsO(value: Observable<any>): SelectGroupElement {
    value.subscribe({
      next: v => this.selectBoxElements.next(v),
    });
    return this;
  }

  elements(value: Observable<any> | []): SelectGroupElement {
    if (typeof value === 'object') return this.elementsR(value);
    if (isObservable(value)) return this.elementsO(value);
    throw new Error('given value type is not supported');
  }
}

const SelectBoxGroup = (title: string | null): SelectGroupElement => {
  let element = new SelectGroupElement();
  if (title == null) return element;
  return element.text(title);
};

export default SelectBoxGroup;
