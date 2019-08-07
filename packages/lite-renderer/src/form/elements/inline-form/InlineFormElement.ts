import IElement, { ValidationResult } from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import { isSubject } from "../../../flmc-data-layer";
import { TypeGuards, FormBuilder } from "./InlineFormElementAttributes";

export class InlineFormElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.InlineForm;
  }

  formBuilderContainer = new BehaviorSubject<FormBuilder>(() => null);

  /** iternal function for handling raw FormBuilder types*/
  private formBuilderR(value: FormBuilder): InlineFormElement {
    this.formBuilderContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<FormBuilder> types*/
  private formBuilderO(value: Observable<FormBuilder>): InlineFormElement {
    value.subscribe({ next: v => this.formBuilderContainer.next(v) });
    return this;
  }

  /**
   * default value: () => null
   *
   * container children
   */
  formBuilder(value: Observable<FormBuilder> | FormBuilder): InlineFormElement {
    if (isObservable(value)) this.formBuilderO(value);
    else this.formBuilderR(value);
    return this;
  }

  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion
}

/*******************************************/
/* GENERATED CODE, DO NOT MODIFY BY HAND!! */
/*******************************************/

/**
 * @example
 *
 */
const InlineForm = (formBuilder: Observable<FormBuilder> | FormBuilder): InlineFormElement => {
  return new InlineFormElement().formBuilder(formBuilder);
};

export default InlineForm;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
