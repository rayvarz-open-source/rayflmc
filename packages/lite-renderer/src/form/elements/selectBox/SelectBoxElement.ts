import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
export type OnChange = VoidFunction | undefined;

export class SelectBoxElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.SELECT_BOX;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text
  onCheckChangeContainer = new BehaviorSubject<OnChange>(undefined);

  selectBoxText = new BehaviorSubject<string>('');
  selectBoxValue = new BehaviorSubject<boolean>(false);
  selectBoxStyleType = new BehaviorSubject<string>('');
  selectBoxStyleColor = new BehaviorSubject<string>('');
  selectBoxAlign = new BehaviorSubject<string>('');
  selectBoxIsDisabled = new BehaviorSubject<boolean>(false);

  private textR(text: string): SelectBoxElement {
    this.selectBoxText.next(text);
    return this;
  }

  private textO(text: Observable<string>): SelectBoxElement {
    text.subscribe({
      next: v => this.selectBoxText.next(v),
    });
    return this;
  }

  text(text: Observable<string> | string): SelectBoxElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }


  private valueR(value: boolean): SelectBoxElement {
    this.selectBoxValue.next(value);
    return this;
  }

  private valueO(value: Observable<boolean>): SelectBoxElement {
    value.subscribe({
      next: v => this.selectBoxValue.next(v),
    });
    return this;
  }

  value(value: Observable<boolean> | boolean): SelectBoxElement {
    if (typeof value === 'boolean') return this.valueR(value);
    if (isObservable(value)) return this.valueO(value);
    throw new Error('given value type is not supported');
  }
  // callback

  private onCheckChangeR(action: VoidFunction): SelectBoxElement {
    this.onCheckChangeContainer.next(action);
    return this;
  }

  private onCheckChangeO(action: Observable<VoidFunction>): SelectBoxElement {
    action.subscribe({
      next: v => this.onCheckChangeContainer.next(v),
    });
    return this;
  }

  onCheckChange(action: Observable<VoidFunction> | VoidFunction): SelectBoxElement {
    if (typeof action === 'function') return this.onCheckChangeR(action);
    if (isObservable(action)) return this.onCheckChangeO(action);
    throw new Error('given action type is not supported');
  }
  private styleTypeR(text: string): SelectBoxElement {
    this.selectBoxStyleType.next(text);
    return this;
  }
  private styleTypeO(text: Observable<string>): SelectBoxElement {
    text.subscribe({
      next: v => this.selectBoxStyleType.next(v),
    });
    return this;
  }

  styleType(styleType: Observable<string> | string): SelectBoxElement {
    if (typeof styleType === 'string') return this.styleTypeR(styleType);
    if (isObservable(styleType)) return this.styleTypeO(styleType);
    throw new Error('given styleType is not supported');
  }
  private styleColorR(text: string): SelectBoxElement {
    this.selectBoxStyleColor.next(text);
    return this;
  }
  private styleColorO(text: Observable<string>): SelectBoxElement {
    text.subscribe({
      next: v => this.selectBoxStyleColor.next(v),
    });
    return this;
  }

  styleColor(styleColor: Observable<string> | string): SelectBoxElement {
    if (typeof styleColor === 'string') return this.styleColorR(styleColor);
    if (isObservable(styleColor)) return this.styleColorO(styleColor);
    throw new Error('given styleColor is not supported');
  }
  private disabledR(isDisabled: boolean): SelectBoxElement {
    this.selectBoxIsDisabled.next(isDisabled);
    return this;
  }
  private disabledO(isDisabled: Observable<boolean>): SelectBoxElement {
    isDisabled.subscribe({
      next: v => this.selectBoxIsDisabled.next(v),
    });
    return this;
  }

  disabled(isDisabled: Observable<boolean> | boolean): SelectBoxElement {
    if (typeof isDisabled === 'boolean') return this.disabledR(isDisabled);
    if (isObservable(isDisabled)) return this.disabledO(isDisabled);
    throw new Error('given isDisabled is not supported');
  }

  private alignR(alignment: string): SelectBoxElement {
    this.selectBoxAlign.next(alignment);
    return this;
  }
  private alignO(alignment: Observable<string>): SelectBoxElement {
    alignment.subscribe({
      next: v => this.selectBoxAlign.next(v),
    });
    return this;
  }

  align(alignment: Observable<string> | string): SelectBoxElement {
    if (typeof alignment === 'string') return this.alignR(alignment);
    if (isObservable(alignment)) return this.alignO(alignment);
    throw new Error('given alignment is not supported');
  }

}

const SelectBox = (title: string | null): SelectBoxElement => {
  let element = new SelectBoxElement();
  if (title == null) return element;
  return element.text(title);
};

export default SelectBox;
