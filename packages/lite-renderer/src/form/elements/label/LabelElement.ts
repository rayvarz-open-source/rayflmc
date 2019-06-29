import IElement, { ValidationResult } from 'flmc-data-layer/src/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';

export class LabelElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.LABEL;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  value = new BehaviorSubject<string>('');
  labelIsNoWrap = new BehaviorSubject<boolean>(false);
  labelIsGutterBottom = new BehaviorSubject<boolean>(false);
  labelTextStyle = new BehaviorSubject<string>('');
  labelTextSize = new BehaviorSubject<string>('');
  labelDisplayType = new BehaviorSubject<string>('');
  labelTextAlign = new BehaviorSubject<string>('');

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

  text(text: Observable<string> | string): LabelElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }

  private noWrapR(noWrap: boolean): LabelElement {
    this.labelIsNoWrap.next(noWrap);
    return this;
  }
  private noWrapO(noWrap: Observable<boolean>): LabelElement {
    noWrap.subscribe({
      next: v => this.labelIsNoWrap.next(v),
    });
    return this;
  }

  noWrap(noWrap: Observable<boolean> | boolean): LabelElement {
    if (typeof noWrap === 'boolean') return this.noWrapR(noWrap);
    if (isObservable(noWrap)) return this.noWrapO(noWrap);
    throw new Error('given noWrap is not supported');
  }
  private gutterBottomR(gutterBottom: boolean): LabelElement {
    this.labelIsGutterBottom.next(gutterBottom);
    return this;
  }
  private gutterBottomO(gutterBottom: Observable<boolean>): LabelElement {
    gutterBottom.subscribe({
      next: v => this.labelIsGutterBottom.next(v),
    });
    return this;
  }

  gutterBottom(gutterBottom: Observable<boolean> | boolean): LabelElement {
    if (typeof gutterBottom === 'boolean') return this.gutterBottomR(gutterBottom);
    if (isObservable(gutterBottom)) return this.gutterBottomO(gutterBottom);
    throw new Error('given gutterBottom is not supported');
  }

  private textStyleR(textStyle: string): LabelElement {
    this.labelTextStyle.next(textStyle);
    return this;
  }
  private textStyleO(text: Observable<string>): LabelElement {
    text.subscribe({
      next: v => this.labelTextStyle.next(v),
    });
    return this;
  }

  textStyle(textStyle: Observable<string> | string): LabelElement {
    if (typeof textStyle === 'string') return this.textStyleR(textStyle);
    if (isObservable(textStyle)) return this.textStyleO(textStyle);
    throw new Error('given textStyle is not supported');
  }

  private textSizeR(textSize: string): LabelElement {
    this.labelTextSize.next(textSize);
    return this;
  }
  private textSizeO(textSize: Observable<string>): LabelElement {
    textSize.subscribe({
      next: v => this.labelTextSize.next(v),
    });
    return this;
  }

  textSize(textSize: Observable<string> | string): LabelElement {
    if (typeof textSize === 'string') return this.textSizeR(textSize);
    if (isObservable(textSize)) return this.textSizeO(textSize);
    throw new Error('given textSize is not supported');
  }


  private displayTypeR(displayType: string): LabelElement {
    this.labelDisplayType.next(displayType);
    return this;
  }
  private displayTypeO(displayType: Observable<string>): LabelElement {
    displayType.subscribe({
      next: v => this.labelDisplayType.next(v),
    });
    return this;
  }

  displayType(displayType: Observable<string> | string): LabelElement {
    if (typeof displayType === 'string') return this.displayTypeR(displayType);
    if (isObservable(displayType)) return this.displayTypeO(displayType);
    throw new Error('given displayType is not supported');
  }


  private textAlignR(textAlign: string): LabelElement {
    this.labelTextAlign.next(textAlign);
    return this;
  }
  private textAlignO(textAlign: Observable<string>): LabelElement {
    textAlign.subscribe({
      next: v => this.labelTextAlign.next(v),
    });
    return this;
  }

  textAlign(textAlign: Observable<string> | string): LabelElement {
    if (typeof textAlign === 'string') return this.textAlignR(textAlign);
    if (isObservable(textAlign)) return this.textAlignO(textAlign);
    throw new Error('given textAlign is not supported');
  }

}

const Label = (value: string | null): LabelElement => {
  let element = new LabelElement();
  if (value == null) return element;
  return element.text(value);
};

export default Label;
