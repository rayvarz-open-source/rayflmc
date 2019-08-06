import IElement, { ValidationResult } from "../../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { isSubject } from "../../../../flmc-data-layer/FormController/Elements/RxUtils";
import { BaseElement } from "../../base/BaseElement";

export class DatePickerElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.DATE_PICKER;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  value = new BehaviorSubject<string>("");
  labelIsNoWrap = new BehaviorSubject<boolean>(false);
  labelIsGutterBottom = new BehaviorSubject<boolean>(false);
  datePickerTime = new BehaviorSubject<Date>(new Date());
  labelTextSize = new BehaviorSubject<string>("");
  labelDisplayType = new BehaviorSubject<string>("");
  labelTextAlign = new BehaviorSubject<string>("");

  private textR(text: string): DatePickerElement {
    this.value.next(text);
    return this;
  }

  private textO(text: Observable<string>): DatePickerElement {
    text.subscribe({
      next: v => this.value.next(v)
    });
    return this;
  }

  text(text: Observable<string> | string): DatePickerElement {
    if (typeof text === "string") return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error("given text type is not supported");
  }

  private noWrapR(noWrap: boolean): DatePickerElement {
    this.labelIsNoWrap.next(noWrap);
    return this;
  }
  private noWrapO(noWrap: Observable<boolean>): DatePickerElement {
    noWrap.subscribe({
      next: v => this.labelIsNoWrap.next(v)
    });
    return this;
  }

  noWrap(noWrap: Observable<boolean> | boolean): DatePickerElement {
    if (typeof noWrap === "boolean") return this.noWrapR(noWrap);
    if (isObservable(noWrap)) return this.noWrapO(noWrap);
    throw new Error("given noWrap is not supported");
  }
  private gutterBottomR(gutterBottom: boolean): DatePickerElement {
    this.labelIsGutterBottom.next(gutterBottom);
    return this;
  }
  private gutterBottomO(gutterBottom: Observable<boolean>): DatePickerElement {
    gutterBottom.subscribe({
      next: v => this.labelIsGutterBottom.next(v)
    });
    return this;
  }

  gutterBottom(gutterBottom: Observable<boolean> | boolean): DatePickerElement {
    if (typeof gutterBottom === "boolean") return this.gutterBottomR(gutterBottom);
    if (isObservable(gutterBottom)) return this.gutterBottomO(gutterBottom);
    throw new Error("given gutterBottom is not supported");
  }

  private selectedDateR(text: Date): DatePickerElement {
    if (this.datePickerTime == null) this.datePickerTime = new BehaviorSubject<Date>(new Date());
    this.datePickerTime.next(text);
    return this;
  }

  private selectedDateO(text: Observable<Date>): DatePickerElement {
    if (this.datePickerTime == null) this.datePickerTime = new BehaviorSubject<Date>(new Date());
    text.subscribe({
      next: v => this.datePickerTime.next(v)
    });
    return this;
  }
  s;
  private selectedDateB(text: BehaviorSubject<Date>): DatePickerElement {
    this.datePickerTime = text;
    return this;
  }

  selectedDate(title: BehaviorSubject<Date> | Observable<Date> | Date): DatePickerElement {
    if (isSubject(title)) return this.selectedDateB(title);
    if (isObservable(title)) return this.selectedDateO(title);
    throw new Error("given text type is not supported");
  }

  private textSizeR(textSize: string): DatePickerElement {
    this.labelTextSize.next(textSize);
    return this;
  }
  private textSizeO(textSize: Observable<string>): DatePickerElement {
    textSize.subscribe({
      next: v => this.labelTextSize.next(v)
    });
    return this;
  }

  textSize(textSize: Observable<string> | string): DatePickerElement {
    if (typeof textSize === "string") return this.textSizeR(textSize);
    if (isObservable(textSize)) return this.textSizeO(textSize);
    throw new Error("given textSize is not supported");
  }

  private displayTypeR(displayType: string): DatePickerElement {
    this.labelDisplayType.next(displayType);
    return this;
  }
  private displayTypeO(displayType: Observable<string>): DatePickerElement {
    displayType.subscribe({
      next: v => this.labelDisplayType.next(v)
    });
    return this;
  }

  displayType(displayType: Observable<string> | string): DatePickerElement {
    if (typeof displayType === "string") return this.displayTypeR(displayType);
    if (isObservable(displayType)) return this.displayTypeO(displayType);
    throw new Error("given displayType is not supported");
  }

  private textAlignR(textAlign: string): DatePickerElement {
    this.labelTextAlign.next(textAlign);
    return this;
  }
  private textAlignO(textAlign: Observable<string>): DatePickerElement {
    textAlign.subscribe({
      next: v => this.labelTextAlign.next(v)
    });
    return this;
  }

  textAlign(textAlign: Observable<string> | string): DatePickerElement {
    if (typeof textAlign === "string") return this.textAlignR(textAlign);
    if (isObservable(textAlign)) return this.textAlignO(textAlign);
    throw new Error("given textAlign is not supported");
  }
}
const DatePicker = (controller: Observable<Date> | BehaviorSubject<Date>): DatePickerElement => {
  return new DatePickerElement().selectedDate(controller);
};

export default DatePicker;
