import IElement, { ValidationResult } from '../../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { isSubject } from '../../../../flmc-data-layer/FormController/Elements/RxUtils';
import {BaseElement} from "../../base/BaseElement";

export class TimePickerElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.TIME_PICKER;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  value = new BehaviorSubject<string>('');
  labelIsNoWrap = new BehaviorSubject<boolean>(false);
  labelIsGutterBottom = new BehaviorSubject<boolean>(false);
  TimePickerTime = new BehaviorSubject<string>('');
  labelTextSize = new BehaviorSubject<string>('');
  labelDisplayType = new BehaviorSubject<string>('');
  labelTextAlign = new BehaviorSubject<string>('');

  private textR(text: string): TimePickerElement {
    this.value.next(text);
    return this;
  }

  private textO(text: Observable<string>): TimePickerElement {
    text.subscribe({
      next: v => this.value.next(v),
    });
    return this;
  }

  text(text: Observable<string> | string): TimePickerElement {
    if (typeof text === 'string') return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error('given text type is not supported');
  }

  private noWrapR(noWrap: boolean): TimePickerElement {
    this.labelIsNoWrap.next(noWrap);
    return this;
  }
  private noWrapO(noWrap: Observable<boolean>): TimePickerElement {
    noWrap.subscribe({
      next: v => this.labelIsNoWrap.next(v),
    });
    return this;
  }

  noWrap(noWrap: Observable<boolean> | boolean): TimePickerElement {
    if (typeof noWrap === 'boolean') return this.noWrapR(noWrap);
    if (isObservable(noWrap)) return this.noWrapO(noWrap);
    throw new Error('given noWrap is not supported');
  }
  private gutterBottomR(gutterBottom: boolean): TimePickerElement {
    this.labelIsGutterBottom.next(gutterBottom);
    return this;
  }
  private gutterBottomO(gutterBottom: Observable<boolean>): TimePickerElement {
    gutterBottom.subscribe({
      next: v => this.labelIsGutterBottom.next(v),
    });
    return this;
  }

  gutterBottom(gutterBottom: Observable<boolean> | boolean): TimePickerElement {
    if (typeof gutterBottom === 'boolean') return this.gutterBottomR(gutterBottom);
    if (isObservable(gutterBottom)) return this.gutterBottomO(gutterBottom);
    throw new Error('given gutterBottom is not supported');
  }

  private selectedTimeR(text: string): TimePickerElement {
    if (this.TimePickerTime == null) this.TimePickerTime = new BehaviorSubject<string>('');
    this.TimePickerTime.next(text);
    return this;
  }

  private selectedTimeO(text: Observable<string>): TimePickerElement {
    if (this.TimePickerTime == null) this.TimePickerTime = new BehaviorSubject<string>('');
    text.subscribe({
      next: v => this.TimePickerTime.next(v),
    });
    return this;
  }
s
  private selectedTimeB(text: BehaviorSubject<string>): TimePickerElement {
    this.TimePickerTime = text;
    return this;
  }

  selectedTime(title: BehaviorSubject<string> | Observable<string> | string): TimePickerElement {
    if (typeof title === 'string') return this.selectedTimeR(title);
    if (isSubject(title)) return this.selectedTimeB(title);
    if (isObservable(title)) return this.selectedTimeO(title);
    throw new Error('given text type is not supported');
  }

  private textSizeR(textSize: string): TimePickerElement {
    this.labelTextSize.next(textSize);
    return this;
  }
  private textSizeO(textSize: Observable<string>): TimePickerElement {
    textSize.subscribe({
      next: v => this.labelTextSize.next(v),
    });
    return this;
  }

  textSize(textSize: Observable<string> | string): TimePickerElement {
    if (typeof textSize === 'string') return this.textSizeR(textSize);
    if (isObservable(textSize)) return this.textSizeO(textSize);
    throw new Error('given textSize is not supported');
  }


  private displayTypeR(displayType: string): TimePickerElement {
    this.labelDisplayType.next(displayType);
    return this;
  }
  private displayTypeO(displayType: Observable<string>): TimePickerElement {
    displayType.subscribe({
      next: v => this.labelDisplayType.next(v),
    });
    return this;
  }

  displayType(displayType: Observable<string> | string): TimePickerElement {
    if (typeof displayType === 'string') return this.displayTypeR(displayType);
    if (isObservable(displayType)) return this.displayTypeO(displayType);
    throw new Error('given displayType is not supported');
  }


  private textAlignR(textAlign: string): TimePickerElement {
    this.labelTextAlign.next(textAlign);
    return this;
  }
  private textAlignO(textAlign: Observable<string>): TimePickerElement {
    textAlign.subscribe({
      next: v => this.labelTextAlign.next(v),
    });
    return this;
  }

  textAlign(textAlign: Observable<string> | string): TimePickerElement {
    if (typeof textAlign === 'string') return this.textAlignR(textAlign);
    if (isObservable(textAlign)) return this.textAlignO(textAlign);
    throw new Error('given textAlign is not supported');
  }

}
const TimePicker = (controller: string | Observable<string> | BehaviorSubject<string>): TimePickerElement => {
  return new TimePickerElement().selectedTime(controller);
};

export default TimePicker;
