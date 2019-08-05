import IElement, {
  ValidationResult
} from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import {
  TypeGuards,
  Children,
  Direction,
  Flex
} from "./ContainerElementAttributes";
import { ContainerDirection } from "./ContainerDirection";

export class ContainerElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    let validationResults = (this.childrenContainer.value || []).map(v =>
      v.validate()
    );
    for (let validationResult of validationResults) {
      if (!validationResult.isValid) return new ValidationResult(false, "");
    }
    return new ValidationResult(true, "");
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Container;
  }

  childrenContainer = new BehaviorSubject<Children>([]);

  /** iternal function for handling raw Children types*/
  private childrenR(value: Children): ContainerElement {
    this.childrenContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Children> types*/
  private childrenO(value: Observable<Children>): ContainerElement {
    value.subscribe({ next: v => this.childrenContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * container children
   */
  children(value: Observable<Children> | Children): ContainerElement {
    if (isObservable(value)) return this.childrenO(value);
    else if (TypeGuards.isChildren(value)) return this.childrenR(value);
    throw new Error(`invalid type ${typeof value} for Children`);
  }

  directionContainer = new BehaviorSubject<Direction>(
    ContainerDirection.Column
  );

  /** iternal function for handling raw Direction types*/
  private directionR(value: Direction): ContainerElement {
    this.directionContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Direction> types*/
  private directionO(value: Observable<Direction>): ContainerElement {
    value.subscribe({ next: v => this.directionContainer.next(v) });
    return this;
  }

  /**
   * default value: ContainerDirection.Column
   *
   * children direction
   *
   * valid options: ContainerDirection.*
   *
   */
  direction(value: Observable<Direction> | Direction): ContainerElement {
    if (TypeGuards.isDirection(value)) return this.directionR(value);
    else if (isObservable(value)) return this.directionO(value);
    throw new Error(`invalid type ${typeof value} for Direction`);
  }

  flexContainer = new BehaviorSubject<Flex>([]);

  /** iternal function for handling raw Flex types*/
  private flexR(value: Flex): ContainerElement {
    this.flexContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Flex> types*/
  private flexO(value: Observable<Flex>): ContainerElement {
    value.subscribe({ next: v => this.flexContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * array of numbers representing flex number of each child
   *
   * must be same size as children
   * @example
   *
   * Container([Label('test'), TextInput(controller)])
   *  .flex([3, 1]) // Label will be 3 times bigger than TextInput
   *
   *
   *
   */
  flex(value: Observable<Flex> | Flex): ContainerElement {
    if (TypeGuards.isFlex(value)) return this.flexR(value);
    else if (isObservable(value)) return this.flexO(value);
    throw new Error(`invalid type ${typeof value} for Flex`);
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
 * Container([
 *  Label('I\'m a label'),
 *  Button('Submit'),
 * ]);
 *
 */
const Container = (
  children: Observable<Children> | Children
): ContainerElement => {
  return new ContainerElement().children(children);
};

export default Container;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
