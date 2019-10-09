import IElement, { ValidationResult } from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import { TypeGuards, ReactElementBuilder } from "./RawElementAttributes";

export type Validator = () => ValidationResult;

export class RawElement extends BaseElement implements IElement {

  private validatorContainer: Validator | null = null;

  validator(value: Validator): RawElement {
    this.validatorContainer = value;
    return this;
  }

  validate(): ValidationResult {
    return this.validatorContainer == null ? new ValidationResult(true) : this.validatorContainer();
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Raw;
  }

  reactElementBuilderContainer = new BehaviorSubject<ReactElementBuilder>(_ => null);

  /** iternal function for handling raw ReactElementBuilder types*/
  private reactElementBuilderR(value: ReactElementBuilder): RawElement {
    this.reactElementBuilderContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<ReactElementBuilder> types*/
  private reactElementBuilderO(value: Observable<ReactElementBuilder>): RawElement {
    value.subscribe({ next: v => this.reactElementBuilderContainer.next(v) });
    return this;
  }

  /**
   * default value: (_) => null
   *
   * container children
   */
  reactElementBuilder(value: Observable<ReactElementBuilder> | ReactElementBuilder): RawElement {
    if (TypeGuards.isReactElementBuilder(value)) return this.reactElementBuilderR(value);
    else if (isObservable(value)) return this.reactElementBuilderO(value);
    throw new Error(`invalid type ${typeof value} for ReactElementBuilder`);
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
const Raw = (reactElementBuilder: Observable<ReactElementBuilder> | ReactElementBuilder): RawElement => {
  return new RawElement().reactElementBuilder(reactElementBuilder);
};

export default Raw;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
