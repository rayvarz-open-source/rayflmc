import { BehaviorSubject, isObservable, Observable } from "rxjs";
import IElement, { ValidationResult } from "../../../flmc-data-layer/FormController/IElement";
import { BaseElement } from "../base/BaseElement";
import { ElementType } from "../ElementType";
import { ContainerDecoration } from "./ContainerDecoration";
import { ContainerDirection } from "./ContainerDirection";
import { AlignItems, Children, Decoration, Direction, Flex, JustifyContent, TypeGuards, Wrap } from "./ContainerElementAttributes";
import { ContainerWrap } from "./ContainerWrap";

export class ContainerElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    let validationResults = (this.childrenContainer.value || []).map(v => v.validate());
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

  directionContainer = new BehaviorSubject<Direction>(ContainerDirection.Column);

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

  wrapContainer = new BehaviorSubject<Wrap>(ContainerWrap.NoWrap);

  /** iternal function for handling raw Wrap types*/
  private wrapR(value: Wrap): ContainerElement {
    this.wrapContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Wrap> types*/
  private wrapO(value: Observable<Wrap>): ContainerElement {
    value.subscribe({ next: v => this.wrapContainer.next(v) });
    return this;
  }

  /**
   * default value: ContainerWrap.NoWrap
   *
   *
   */
  wrap(value: Observable<Wrap> | Wrap): ContainerElement {
    if (TypeGuards.isWrap(value)) return this.wrapR(value);
    else if (isObservable(value)) return this.wrapO(value);
    throw new Error(`invalid type ${typeof value} for Wrap`);
  }

  decorationContainer = new BehaviorSubject<Decoration>(ContainerDecoration.None);

  /** iternal function for handling raw Decoration types*/
  private decorationR(value: Decoration): ContainerElement {
    this.decorationContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Decoration> types*/
  private decorationO(value: Observable<Decoration>): ContainerElement {
    value.subscribe({ next: v => this.decorationContainer.next(v) });
    return this;
  }

  /**
   * default value: ContainerDecoration.None
   *
   *
   */
  decoration(value: Observable<Decoration> | Decoration): ContainerElement {
    if (TypeGuards.isDecoration(value)) return this.decorationR(value);
    else if (isObservable(value)) return this.decorationO(value);
    throw new Error(`invalid type ${typeof value} for Decoration`);
  }

  justifyContentContainer = new BehaviorSubject<JustifyContent>(undefined);

  /** iternal function for handling raw JustifyContent types*/
  private justifyContentR(value: JustifyContent): ContainerElement {
    this.justifyContentContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<JustifyContent> types*/
  private justifyContentO(value: Observable<JustifyContent>): ContainerElement {
    value.subscribe({ next: v => this.justifyContentContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  justifyContent(value: Observable<JustifyContent> | JustifyContent): ContainerElement {
    if (isObservable(value)) this.justifyContentO(value);
    else this.justifyContentR(value);
    return this;
  }

  alignItemsContainer = new BehaviorSubject<AlignItems>(undefined);

  /** iternal function for handling raw AlignItems types*/
  private alignItemsR(value: AlignItems): ContainerElement {
    this.alignItemsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<AlignItems> types*/
  private alignItemsO(value: Observable<AlignItems>): ContainerElement {
    value.subscribe({ next: v => this.alignItemsContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  alignItems(value: Observable<AlignItems> | AlignItems): ContainerElement {
    if (isObservable(value)) this.alignItemsO(value);
    else this.alignItemsR(value);
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
 * // usage:
 * Container([
 *  Label('I\'m a label'),
 *  Button('Submit'),
 * ]);
 *
 */
const Container = (children: Observable<Children> | Children): ContainerElement => {
  return new ContainerElement().children(children);
};

export default Container;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
