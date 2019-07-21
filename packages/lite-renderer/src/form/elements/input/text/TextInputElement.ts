import IElement, { ValidationResult } from '../../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { isSubject } from '../../../../flmc-data-layer/FormController/Elements/RxUtils';
import {TextInputStyleType} from "./TextInputStyleType";
import {BaseElement} from "../../base/BaseElement";

export class TextInputElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.INPUT_TEXT;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  //region variables
  textInputTitle = new BehaviorSubject<string>("");
  textInputValue = new BehaviorSubject<string>('');
  textInputPlaceHolder = new BehaviorSubject<string>("");
  textInputDisabled = new BehaviorSubject<boolean>(false);
  textInputIsInErrorMode = new BehaviorSubject<boolean>(false);
  textInputErrorOrDescriptionText = new BehaviorSubject<string>('');
  textInputStartText = new BehaviorSubject<string>('');
  textInputEndText = new BehaviorSubject<string>('');
  textInputStartIcon = new BehaviorSubject<string>('');
  textInputEndIcon = new BehaviorSubject<string>('');
  textInputStyleType = new BehaviorSubject<string>(TextInputStyleType.Standard);
  textInputIsPassword = new BehaviorSubject<boolean>(false);
  textInputIsMultiLine=new BehaviorSubject<boolean>(false);
  textInputIsRtl=new BehaviorSubject<string>("rtl");
  textInputLines=new BehaviorSubject<number>(0);
  textInputMaxLines=new BehaviorSubject<number>(0);

  endIconClickCallback = new BehaviorSubject<VoidFunction | null>(null);
  startIconClickCallback = new BehaviorSubject<VoidFunction | null>(null);
  //endregion
  //region onEndIconClick
  private onEndIconClickR(action: VoidFunction): TextInputElement {
    this.endIconClickCallback.next(action);
    return this;
  }

  private onEndIconClickO(action: Observable<VoidFunction>): TextInputElement {
    action.subscribe({
      next: v => this.endIconClickCallback.next(v),
    });
    return this;
  }

  onEndIconClick(action: Observable<VoidFunction> | VoidFunction): TextInputElement {
    if (typeof action === 'function') return this.onEndIconClickR(action);
    if (isObservable(action)) return this.onEndIconClickO(action);
    throw new Error('given action type is not supported');
  }
  //endregion
  //region onStartIconClick
  private onStartIconClickR(action: VoidFunction): TextInputElement {
    this.startIconClickCallback.next(action);
    return this;
  }

  private onStartIconClickO(action: Observable<VoidFunction>): TextInputElement {
    action.subscribe({
      next: v => this.startIconClickCallback.next(v),
    });
    return this;
  }

  onStartIconClick(action: Observable<VoidFunction> | VoidFunction): TextInputElement {
    if (typeof action === 'function') return this.onStartIconClickR(action);
    if (isObservable(action)) return this.onStartIconClickO(action);
    throw new Error('given action type is not supported');
  }
  //endregion
  //region text
  private textR(text: string): TextInputElement {
    if (this.textInputValue == null) this.textInputValue = new BehaviorSubject<string>('');
    this.textInputValue.next(text);
    return this;
  }

  private textO(text: Observable<string>): TextInputElement {
    if (this.textInputValue == null) this.textInputValue = new BehaviorSubject<string>('');
    text.subscribe({
      next: v => this.textInputValue.next(v),
    });
    return this;
  }

  private textB(text: BehaviorSubject<string>): TextInputElement {
    this.textInputValue = text;
    return this;
  }

  text(title: BehaviorSubject<string> | Observable<string> | string): TextInputElement {
    if (typeof title === 'string') return this.textR(title);
    if (isSubject(title)) return this.textB(title);
    if (isObservable(title)) return this.textO(title);
    throw new Error('given text type is not supported');
  }

  //endregion
  //region title
  private titleR(title: string): TextInputElement {
    this.textInputTitle.next(title);
    return this;
  }

  private titleO(title: Observable<string>): TextInputElement {
    title.subscribe({
      next: v => this.textInputTitle.next(v),
    });
    return this;
  }

  title(placeHolder: Observable<string> | string): TextInputElement {
    if (typeof placeHolder === 'string') return this.titleR(placeHolder);
    if (isObservable(placeHolder)) return this.titleO(placeHolder);
    throw new Error('given title type is not supported');
  }
  //endregion
  //region endIcon
  private endIconR(title: string): TextInputElement {
    this.textInputEndIcon.next(title);
    return this;
  }

  private endIconO(title: Observable<string>): TextInputElement {
    title.subscribe({
      next: v => this.textInputEndIcon.next(v),
    });
    return this;
  }

  endIcon(placeHolder: Observable<string> | string): TextInputElement {
    if (typeof placeHolder === 'string') return this.endIconR(placeHolder);
    if (isObservable(placeHolder)) return this.endIconO(placeHolder);
    throw new Error('given title type is not supported');
  }
  //endregion
  //region startIcon
  private startIconR(title: string): TextInputElement {
    this.textInputStartIcon.next(title);
    return this;
  }

  private startIconO(title: Observable<string>): TextInputElement {
    title.subscribe({
      next: v => this.textInputStartIcon.next(v),
    });
    return this;
  }

  startIcon(placeHolder: Observable<string> | string): TextInputElement {
    if (typeof placeHolder === 'string') return this.startIconR(placeHolder);
    if (isObservable(placeHolder)) return this.startIconO(placeHolder);
    throw new Error('given title type is not supported');
  }
  //endregion
  //region startText
  private startTextR(title: string): TextInputElement {
    this.textInputStartText.next(title);
    return this;
  }

  private startTextO(title: Observable<string>): TextInputElement {
    title.subscribe({
      next: v => this.textInputStartText.next(v),
    });
    return this;
  }

  startText(placeHolder: Observable<string> | string): TextInputElement {
    if (typeof placeHolder === 'string') return this.startTextR(placeHolder);
    if (isObservable(placeHolder)) return this.startTextO(placeHolder);
    throw new Error('given title type is not supported');
  }
  //endregion
  //region endText
  private endTextR(title: string): TextInputElement {
    this.textInputEndText.next(title);
    return this;
  }

  private endTextO(title: Observable<string>): TextInputElement {
    title.subscribe({
      next: v => this.textInputEndText.next(v),
    });
    return this;
  }

  endText(placeHolder: Observable<string> | string): TextInputElement {
    if (typeof placeHolder === 'string') return this.endTextR(placeHolder);
    if (isObservable(placeHolder)) return this.endTextO(placeHolder);
    throw new Error('given title type is not supported');
  }
  //endregion
  //region placeHolder
  private placeHolderR(placeHolder: string): TextInputElement {
    this.textInputPlaceHolder.next(placeHolder);
    return this;
  }

  private placeHolderO(placeHolder: Observable<string>): TextInputElement {
    placeHolder.subscribe({
      next: v => this.textInputPlaceHolder.next(v),
    });
    return this;
  }

  placeHolder(placeHolder: Observable<string> | string): TextInputElement {
    if (typeof placeHolder === 'string') return this.placeHolderR(placeHolder);
    if (isObservable(placeHolder)) return this.placeHolderO(placeHolder);
    throw new Error('given placeHolder type is not supported');
  }
  //endregion
  //region error
  private errorR(error: boolean): TextInputElement {
    this.textInputIsInErrorMode.next(error);
    return this;
  }

  private errorO(error: Observable<boolean>): TextInputElement {
    error.subscribe({
      next: v => this.textInputIsInErrorMode.next(v),
    });
    return this;
  }

  isError(error: Observable<boolean> | boolean): TextInputElement {
    if (typeof error === 'boolean') return this.errorR(error);
    if (isObservable(error)) return this.errorO(error);
    throw new Error('given error type is not supported');
  }
  //endregion

  //region rtl
  private rtlR(isRtl: string): TextInputElement {
    this.textInputIsRtl.next(isRtl);
    return this;
  }

  private rtlO(isRtl: Observable<string>): TextInputElement {
    isRtl.subscribe({
      next: v => this.textInputIsRtl.next(v),
    });
    return this;
  }

  textDirection(direction: Observable<string> | string): TextInputElement {
    if (typeof direction === 'string') return this.rtlR(direction);
    if (isObservable(direction)) return this.rtlO(direction);
    throw new Error('given rtl type is not supported');
  }
  //endregion
  //region lines
  private linesR(lines: number): TextInputElement {
    this.textInputLines.next(lines);
    return this;
  }

  private linesO(lines: Observable<number>): TextInputElement {
    lines.subscribe({
      next: v => this.textInputLines.next(v),
    });
    return this;
  }

  lines(lines: Observable<number> | boolean): TextInputElement {
    if (typeof lines === 'number') return this.linesR(lines);
    if (isObservable(lines)) return this.linesO(lines);
    throw new Error('given lines type is not supported');
  }
  //endregion
  //region maxLines
  private maxLinesR(lines: number): TextInputElement {
    this.textInputMaxLines.next(lines);
    return this;
  }

  private maxLinesO(lines: Observable<number>): TextInputElement {
    lines.subscribe({
      next: v => this.textInputMaxLines.next(v),
    });
    return this;
  }

  maxLines(maxLines: Observable<number> | boolean): TextInputElement {
    if (typeof maxLines === 'number') return this.maxLinesR(maxLines);
    if (isObservable(maxLines)) return this.maxLinesO(maxLines);
    throw new Error('given maxLines type is not supported');
  }
  //endregion
  //region multiLine
  private multiLineR(multiLine: boolean): TextInputElement {
    this.textInputIsMultiLine.next(multiLine);
    return this;
  }

  private multiLineO(multiLine: Observable<boolean>): TextInputElement {
    multiLine.subscribe({
      next: v => this.textInputIsMultiLine.next(v),
    });
    return this;
  }

  isMultiLine(multiLine: Observable<boolean> | boolean): TextInputElement {
    if (typeof multiLine === 'boolean') return this.multiLineR(multiLine);
    if (isObservable(multiLine)) return this.multiLineO(multiLine);
    throw new Error('given error type is not supported');
  }
  //endregion
  //region placeHolder
  private passwordR(error: boolean): TextInputElement {
    this.textInputIsPassword.next(error);
    return this;
  }

  private passwordO(error: Observable<boolean>): TextInputElement {
    error.subscribe({
      next: v => this.textInputIsPassword.next(v),
    });
    return this;
  }

  isPassword(error: Observable<boolean> | boolean): TextInputElement {
    if (typeof error === 'boolean') return this.passwordR(error);
    if (isObservable(error)) return this.passwordO(error);
    throw new Error('given error type is not supported');
  }
  //endregion
  //region disable
  private disableR(disable: boolean): TextInputElement {
    this.textInputDisabled.next(disable);
    return this;
  }

  private disableO(disable: Observable<boolean>): TextInputElement {
    disable.subscribe({
      next: v => this.textInputDisabled.next(v),
    });
    return this;
  }

  isDisable(disable: Observable<boolean> | boolean): TextInputElement {
    if (typeof disable === 'boolean') return this.disableR(disable);
    if (isObservable(disable)) return this.disableO(disable);
    throw new Error('given disable type is not supported');
  }
  //endregion
  //region errorOrDescriptionText
  private errorOrDescriptionTextR(placeHolder: string): TextInputElement {
    this.textInputErrorOrDescriptionText.next(placeHolder);
    return this;
  }

  private errorOrDescriptionTextO(placeHolder: Observable<string>): TextInputElement {
    placeHolder.subscribe({
      next: v => this.textInputErrorOrDescriptionText.next(v),
    });
    return this;
  }

  errorOrDescriptionText(textInputErrorOrDescriptionText: Observable<string> | string): TextInputElement {
    if (typeof textInputErrorOrDescriptionText === 'string') return this.errorOrDescriptionTextR(textInputErrorOrDescriptionText);
    if (isObservable(textInputErrorOrDescriptionText)) return this.errorOrDescriptionTextO(textInputErrorOrDescriptionText);
    throw new Error('given textInputErrorOrDescriptionText type is not supported');
  }
  //endregion
  //region styleType
  private styleTypeR(text: string): TextInputElement {
    this.textInputStyleType.next(text);
    return this;
  }
  private styleTypeO(text: Observable<string>): TextInputElement {
    text.subscribe({
      next: v => this.textInputStyleType.next(v),
    });
    return this;
  }

  styleType(styleType: Observable<string> | string): TextInputElement {
    if (typeof styleType === 'string') return this.styleTypeR(styleType);
    if (isObservable(styleType)) return this.styleTypeO(styleType);
    throw new Error('given styleType is not supported');
  }
  //endregion

}

const TextInput = (controller: string | Observable<string> | BehaviorSubject<string>): TextInputElement => {
  return new TextInputElement().text(controller);
};

export default TextInput;
