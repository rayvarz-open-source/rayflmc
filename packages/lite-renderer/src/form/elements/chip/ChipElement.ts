
import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { BaseElement } from "../base/BaseElement";
import { isSubject } from '../../../flmc-data-layer';
import { TypeGuards, Value, SelectionType } from './ChipElementAttributes';
import { ChipSelectionType } from './ChipSelectionType';

export class ChipElement extends BaseElement implements IElement {

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void { }

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Chip;
  }

  valueContainer = new BehaviorSubject<Value>(undefined);

  /** iternal function for handling BehaviorSubject<Value> types used for bidirectional bindings*/
  private valueB(value: BehaviorSubject<Value>): ChipElement {
    this.valueContainer = value;
    return this;
  }

  /** iternal function for handling raw Value types*/
  private valueR(value: Value): ChipElement {
    this.valueContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Value> types*/
  private valueO(value: Observable<Value>): ChipElement {
    value.subscribe({ next: v => this.valueContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   * 
   * container that holds chips.
   * 
   */
  value(value: BehaviorSubject<Value> | Observable<Value> | Value): ChipElement {
    if (TypeGuards.isValue(value)) return this.valueR(value);
    else if (isObservable(value)) return this.valueO(value);
    else if (isSubject(value)) return this.valueB(value);
    throw new Error(`invalid type ${typeof (value)} for Value`)
  }


  selectionTypeContainer = new BehaviorSubject<SelectionType>(ChipSelectionType.Show);

  /** iternal function for handling raw SelectionType types*/
  private selectionTypeR(value: SelectionType): ChipElement {
    this.selectionTypeContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<SelectionType> types*/
  private selectionTypeO(value: Observable<SelectionType>): ChipElement {
    value.subscribe({ next: v => this.selectionTypeContainer.next(v) });
    return this;
  }

  /**
   * default value: ChipSelectionType.Show
   * 
   * selection type // TODO: add docs
   * 
   */
  selectionType(value: Observable<SelectionType> | SelectionType): ChipElement {
    if (TypeGuards.isSelectionType(value)) return this.selectionTypeR(value);
    else if (isObservable(value)) return this.selectionTypeO(value);
    throw new Error(`invalid type ${typeof (value)} for SelectionType`)
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
 * let controller = new BehaviorSubject<ChipModel[]>([new ChipModel({title: "test", id: 1})]);
 * Chip(controller);
 * 
 */
const Chip = (value: BehaviorSubject<Value> | Observable<Value> | Value): ChipElement => {
  return new ChipElement()
    .value(value);
};

export default Chip;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/

