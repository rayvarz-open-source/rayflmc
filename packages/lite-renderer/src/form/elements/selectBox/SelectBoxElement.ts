import IElement, {
  ValidationResult
} from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import { isSubject } from "../../../flmc-data-layer";
import {
  TypeGuards,
  Value,
  SelectedValue,
  Label,
  LabelPlacement,
  Variant,
  Disabled
} from "./SelectBoxElementAttributes";
import { SelectBoxLabelPlacement } from "./SelectBoxLabelPlacement";
import { SelectBoxVariant } from "./SelectBoxVariant";

export class SelectBoxElement<T> extends BaseElement implements IElement {
  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.SelectBox;
  }

  valueContainer = new BehaviorSubject<Value<T>>(null);

  /** iternal function for handling BehaviorSubject<value> types used for bidirectional bindings*/
  private valueB(value: BehaviorSubject<Value<T>>): SelectBoxElement<T> {
    this.valueContainer = value;
    return this;
  }

  /** iternal function for handling raw value types*/
  private valueR(value: Value<T>): SelectBoxElement<T> {
    this.valueContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<value> types*/
  private valueO(value: Observable<Value<T>>): SelectBoxElement<T> {
    value.subscribe({ next: v => this.valueContainer.next(v) });
    return this;
  }

  /**
   * default value: null
   *
   * current value
   *
   */
  value(
    value: BehaviorSubject<Value<T>> | Observable<Value<T>> | Value<T>
  ): SelectBoxElement<T> {
    if (isSubject(value)) return this.valueB(value);
    else if (isObservable(value)) return this.valueO(value);
    return this.valueR(value);
  }

  selectedValueContainer = new BehaviorSubject<SelectedValue<T>>(undefined);

  /** iternal function for handling raw Selectedvalue types*/
  private selectedValueR(value: SelectedValue<T>): SelectBoxElement<T> {
    this.selectedValueContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Selectedvalue> types*/
  private selectedValueO(
    value: Observable<SelectedValue<T>>
  ): SelectBoxElement<T> {
    value.subscribe({ next: v => this.selectedValueContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * if value equal to this value, select box will be checked
   *
   */
  selectedvalue(
    value: Observable<SelectedValue<T>> | SelectedValue<T>
  ): SelectBoxElement<T> {
    if (isObservable(value)) this.selectedValueO(value);
    else this.selectedValueR(value);
    return this;
  }

  labelContainer = new BehaviorSubject<Label>(undefined);

  /** iternal function for handling raw Label types*/
  private labelR(value: Label): SelectBoxElement<T> {
    this.labelContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Label> types*/
  private labelO(value: Observable<Label>): SelectBoxElement<T> {
    value.subscribe({ next: v => this.labelContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * text to describe this select box
   * enter undefined for no label
   *
   */
  label(value: Observable<Label> | Label): SelectBoxElement<T> {
    if (TypeGuards.isLabel(value)) return this.labelR(value);
    else if (isObservable(value)) return this.labelO(value);
    throw new Error(`invalid type ${typeof value} for Label`);
  }

  labelPlacementContainer = new BehaviorSubject<LabelPlacement>(
    SelectBoxLabelPlacement.End
  );

  /** iternal function for handling raw LabelPlacement types*/
  private labelPlacementR(value: LabelPlacement): SelectBoxElement<T> {
    this.labelPlacementContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<LabelPlacement> types*/
  private labelPlacementO(
    value: Observable<LabelPlacement>
  ): SelectBoxElement<T> {
    value.subscribe({ next: v => this.labelPlacementContainer.next(v) });
    return this;
  }

  /**
   * default value: SelectBoxLabelPlacement.End
   *
   * position of label relative to SelectBox
   *
   */
  labelPlacement(
    value: Observable<LabelPlacement> | LabelPlacement
  ): SelectBoxElement<T> {
    if (TypeGuards.isLabelPlacement(value)) return this.labelPlacementR(value);
    else if (isObservable(value)) return this.labelPlacementO(value);
    throw new Error(`invalid type ${typeof value} for LabelPlacement`);
  }

  variantContainer = new BehaviorSubject<Variant>(SelectBoxVariant.CheckBox);

  /** iternal function for handling raw Variant types*/
  private variantR(value: Variant): SelectBoxElement<T> {
    this.variantContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Variant> types*/
  private variantO(value: Observable<Variant>): SelectBoxElement<T> {
    value.subscribe({ next: v => this.variantContainer.next(v) });
    return this;
  }

  /**
   * default value: SelectBoxVariant.CheckBox
   *
   * shape of SelectBox
   *
   */
  variant(value: Observable<Variant> | Variant): SelectBoxElement<T> {
    if (TypeGuards.isVariant(value)) return this.variantR(value);
    else if (isObservable(value)) return this.variantO(value);
    throw new Error(`invalid type ${typeof value} for Variant`);
  }

  disabledContainer = new BehaviorSubject<Disabled>(false);

  /** iternal function for handling raw Disabled types*/
  private disabledR(value: Disabled): SelectBoxElement<T> {
    this.disabledContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Disabled> types*/
  private disabledO(value: Observable<Disabled>): SelectBoxElement<T> {
    value.subscribe({ next: v => this.disabledContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   *
   * TODO: add docs
   */
  disabled(value: Observable<Disabled> | Disabled): SelectBoxElement<T> {
    if (TypeGuards.isDisabled(value)) return this.disabledR(value);
    else if (isObservable(value)) return this.disabledO(value);
    throw new Error(`invalid type ${typeof value} for Disabled`);
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
 * // usage:
 * let value = new BehaviorSubject<int | null>(1);
 * SelectBox(controller, 2); // 2 == checkedValue
 *
 * // if controller value == 2, select box state will be selected
 *
 */
const SelectBox = <T>(
  value: BehaviorSubject<Value<T>> | Observable<Value<T>> | Value<T>,
  selectedvalue: Observable<SelectedValue<T>> | SelectedValue<T>
): SelectBoxElement<T> => {
  return new SelectBoxElement<T>().value(value).selectedvalue(selectedvalue);
};

export default SelectBox;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
