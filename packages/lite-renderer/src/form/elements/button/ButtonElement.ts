import IElement, {ValidationResult} from '../../../flmc-data-layer/FormController/IElement';
import {ElementType} from '../ElementType';
import {BehaviorSubject, isObservable, Observable} from 'rxjs';
import {BaseElement} from "../base/BaseElement";
import {StyleType} from "../../..";

export class ButtonElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.BUTTON;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  buttonText = new BehaviorSubject<string>('');
  buttonStyleType = new BehaviorSubject<StyleType>(StyleType.Text);
  buttonStyleColor = new BehaviorSubject<string>('');
  buttonIcon = new BehaviorSubject<string>('');
  buttonIconAlign = new BehaviorSubject<string>('');
  buttonIsDisabled = new BehaviorSubject<boolean>(false);
  buttonIsLoading = new BehaviorSubject<boolean>(false);
  buttonIsFullWidth = new BehaviorSubject<boolean>(false);
  buttonSize = new BehaviorSubject<string>('');

  private textR(text: string): ButtonElement {
    this.buttonText.next(text);
    return this;
  }

  private textO(text: Observable<string>): ButtonElement {
    text.subscribe({
      next: v => this.buttonText.next(v),
    });
    return this;
  }

  text(text: Observable<string> | string): ButtonElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }
  // callback

  buttonCallback = new BehaviorSubject<VoidFunction | null>(null);

  private onTapR(action: VoidFunction): ButtonElement {
    this.buttonCallback.next(action);
    return this;
  }

  private onTapO(action: Observable<VoidFunction>): ButtonElement {
    action.subscribe({
      next: v => this.buttonCallback.next(v),
    });
    return this;
  }

  onTap(action: Observable<VoidFunction> | VoidFunction): ButtonElement {
    if (typeof action === 'function') return this.onTapR(action);
    if (isObservable(action)) return this.onTapO(action);
    throw new Error('given action type is not supported');
  }
  private styleTypeR(text: StyleType): ButtonElement {
    this.buttonStyleType.next(text);
    return this;
  }
  private styleTypeO(text: Observable<StyleType>): ButtonElement {
    text.subscribe({
      next: v => this.buttonStyleType.next(v),
    });
    return this;
  }

  styleType(styleType: Observable<StyleType> | StyleType): ButtonElement {
    if (isObservable(styleType)) return this.styleTypeO(styleType);
    return this.styleTypeR(styleType);
  }
  private styleColorR(text: string): ButtonElement {
    this.buttonStyleColor.next(text);
    return this;
  }
  private styleColorO(text: Observable<string>): ButtonElement {
    text.subscribe({
      next: v => this.buttonStyleColor.next(v),
    });
    return this;
  }

  styleColor(styleColor: Observable<string> | string): ButtonElement {
    if (typeof styleColor === 'string') return this.styleColorR(styleColor);
    if (isObservable(styleColor)) return this.styleColorO(styleColor);
    throw new Error('given styleColor is not supported');
  }
  private disabledR(isDisabled: boolean): ButtonElement {
    this.buttonIsDisabled.next(isDisabled);
    return this;
  }
  private disabledO(isDisabled: Observable<boolean>): ButtonElement {
    isDisabled.subscribe({
      next: v => this.buttonIsDisabled.next(v),
    });
    return this;
  }

  disabled(isDisabled: Observable<boolean> | boolean): ButtonElement {
    if (typeof isDisabled === 'boolean') return this.disabledR(isDisabled);
    if (isObservable(isDisabled)) return this.disabledO(isDisabled);
    throw new Error('given isDisabled is not supported');
  }

  private iconR(icon: string): ButtonElement {
    this.buttonIcon.next(icon);
    return this;
  }
  private iconO(icon: Observable<string>): ButtonElement {
    icon.subscribe({
      next: v => this.buttonIcon.next(v),
    });
    return this;
  }

  icon(icon: Observable<string> | string): ButtonElement {
    if (typeof icon === 'string') return this.iconR(icon);
    if (isObservable(icon)) return this.iconO(icon);
    throw new Error('given icon is not supported');
  }

  private iconAlignR(alignment: string): ButtonElement {
    this.buttonIconAlign.next(alignment);
    return this;
  }
  private iconAlignO(alignment: Observable<string>): ButtonElement {
    alignment.subscribe({
      next: v => this.buttonIconAlign.next(v),
    });
    return this;
  }

  iconAlign(alignment: Observable<string> | string): ButtonElement {
    if (typeof alignment === 'string') return this.iconAlignR(alignment);
    if (isObservable(alignment)) return this.iconAlignO(alignment);
    throw new Error('given alignment is not supported');
  }
  private loadingR(isLoading: boolean): ButtonElement {
    this.buttonIsLoading.next(isLoading);
    return this;
  }
  private loadingO(isLoading: Observable<boolean>): ButtonElement {
    isLoading.subscribe({
      next: v => this.buttonIsLoading.next(v),
    });
    return this;
  }

  loading(isLoading: Observable<boolean> | boolean): ButtonElement {
    if (typeof isLoading === 'boolean') return this.loadingR(isLoading);
    if (isObservable(isLoading)) return this.loadingO(isLoading);
    throw new Error('given isLoading is not supported');
  }


  private sizeR(size: string): ButtonElement {
    this.buttonSize.next(size);
    return this;
  }
  private sizeO(size: Observable<string>): ButtonElement {
    size.subscribe({
      next: v => this.buttonSize.next(v),
    });
    return this;
  }

  size(size: Observable<string> | string): ButtonElement {
    if (typeof size === 'string') return this.sizeR(size);
    if (isObservable(size)) return this.sizeO(size);
    throw new Error('given size is not supported');
  }

  private fullWidthR(isFullWidth: boolean): ButtonElement {
    this.buttonIsDisabled.next(isFullWidth);
    return this;
  }
  private fullWidthO(isFullWidth: Observable<boolean>): ButtonElement {
    isFullWidth.subscribe({
      next: v => this.buttonIsDisabled.next(v),
    });
    return this;
  }

  fullWidth(isFullWidth: Observable<boolean> | boolean): ButtonElement {
    if (typeof isFullWidth === 'boolean') return this.disabledR(isFullWidth);
    if (isObservable(isFullWidth)) return this.disabledO(isFullWidth);
    throw new Error('given isFullWidth is not supported');
  }
}

const Button = (title: string | null): ButtonElement => {
  let element = new ButtonElement();
  if (title == null) return element;
  return element.text(title);
};

export default Button;
