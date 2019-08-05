import IElement, {
  ValidationResult
} from "../../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { isSubject } from "../../../../flmc-data-layer/FormController/Elements/RxUtils";
import { BaseElement } from "../../base/BaseElement";

export class TimePickerElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.TIME_PICKER;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  value = new BehaviorSubject<string>("");
  labelIsNoWrap = new BehaviorSubject<boolean>(false);
  labelIsGutterBottom = new BehaviorSubject<boolean>(false);
  TimePickerTime = new BehaviorSubject<string>("");
  labelTextSize = new BehaviorSubject<string>("");
  labelDisplayType = new BehaviorSubject<string>("");
  labelTextAlign = new BehaviorSubject<string>("");
  timePickerPlaceHolder = new BehaviorSubject<string>("");
  timePickerOkLabel = new BehaviorSubject<string>("تایید");
  timePickerCancelLabel = new BehaviorSubject<string>("لغو");
  timePickerTitle = new BehaviorSubject<string>("");

  private cancelLabelR(placeHolder: string): TimePickerElement {
    this.timePickerCancelLabel.next(placeHolder);
    return this;
  }

  private cancelLabelO(placeHolder: Observable<string>): TimePickerElement {
    placeHolder.subscribe({
      next: v => this.timePickerCancelLabel.next(v)
    });
    return this;
  }

  cancelLabel(cancelLabel: Observable<string> | string): TimePickerElement {
    if (typeof cancelLabel === "string") return this.cancelLabelR(cancelLabel);
    if (isObservable(cancelLabel)) return this.cancelLabelO(cancelLabel);
    throw new Error("given placeHolder type is not supported");
  }

  private okLabelR(placeHolder: string): TimePickerElement {
    this.timePickerOkLabel.next(placeHolder);
    return this;
  }

  private okLabelO(placeHolder: Observable<string>): TimePickerElement {
    placeHolder.subscribe({
      next: v => this.timePickerOkLabel.next(v)
    });
    return this;
  }

  okLabel(okLabel: Observable<string> | string): TimePickerElement {
    if (typeof okLabel === "string") return this.okLabelR(okLabel);
    if (isObservable(okLabel)) return this.okLabelO(okLabel);
    throw new Error("given placeHolder type is not supported");
  }

  private placeHolderR(placeHolder: string): TimePickerElement {
    this.timePickerPlaceHolder.next(placeHolder);
    return this;
  }

  private placeHolderO(placeHolder: Observable<string>): TimePickerElement {
    placeHolder.subscribe({
      next: v => this.timePickerPlaceHolder.next(v)
    });
    return this;
  }

  placeHolder(placeHolder: Observable<string> | string): TimePickerElement {
    if (typeof placeHolder === "string") return this.placeHolderR(placeHolder);
    if (isObservable(placeHolder)) return this.placeHolderO(placeHolder);
    throw new Error("given placeHolder type is not supported");
  }

  private textR(text: string): TimePickerElement {
    this.value.next(text);
    return this;
  }

  private textO(text: Observable<string>): TimePickerElement {
    text.subscribe({
      next: v => this.value.next(v)
    });
    return this;
  }

  text(text: Observable<string> | string): TimePickerElement {
    if (typeof text === "string") return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error("given text type is not supported");
  }
  private textLabelR(text: string): TimePickerElement {
    this.timePickerTitle.next(text);
    return this;
  }

  private textLabelO(text: Observable<string>): TimePickerElement {
    text.subscribe({
      next: v => this.timePickerTitle.next(v)
    });
    return this;
  }

  title(title: Observable<string> | string): TimePickerElement {
    if (typeof title === "string") return this.textLabelR(title);
    if (isObservable(title)) return this.textLabelO(title);
    throw new Error("given title type is not supported");
  }

  private selectedTimeR(text: string): TimePickerElement {
    if (this.TimePickerTime == null)
      this.TimePickerTime = new BehaviorSubject<string>("");
    this.TimePickerTime.next(text);
    return this;
  }

  private selectedTimeO(text: Observable<string>): TimePickerElement {
    if (this.TimePickerTime == null)
      this.TimePickerTime = new BehaviorSubject<string>("");
    text.subscribe({
      next: v => this.TimePickerTime.next(v)
    });
    return this;
  }
  s;
  private selectedTimeB(text: BehaviorSubject<string>): TimePickerElement {
    this.TimePickerTime = text;
    return this;
  }

  selectedTime(
    selectedTime: BehaviorSubject<string> | Observable<string> | string
  ): TimePickerElement {
    if (typeof selectedTime === "string")
      return this.selectedTimeR(selectedTime);
    if (isSubject(selectedTime)) return this.selectedTimeB(selectedTime);
    if (isObservable(selectedTime)) return this.selectedTimeO(selectedTime);
    throw new Error("given text type is not supported");
  }
}
const TimePicker = (title: string | null): TimePickerElement => {
  if (title == null) return new TimePickerElement();
  return new TimePickerElement().title(title);
};

export default TimePicker;
