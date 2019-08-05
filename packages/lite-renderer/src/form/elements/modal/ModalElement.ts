import IElement, {
  ValidationResult
} from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import { isSubject } from "../../../flmc-data-layer";
import {
  TypeGuards,
  Child,
  Open,
  VisibileHeader,
  VisibileHeaderCloseButton,
  Title
} from "./ModalElementAttributes";

export class ModalElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Modal;
  }

  childContainer = new BehaviorSubject<Child>(undefined);

  /** iternal function for handling raw Child types*/
  private childR(value: Child): ModalElement {
    this.childContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Child> types*/
  private childO(value: Observable<Child>): ModalElement {
    value.subscribe({ next: v => this.childContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * container children
   */
  child(value: Observable<Child> | Child): ModalElement {
    if (TypeGuards.isChild(value)) return this.childR(value);
    else if (isObservable(value)) return this.childO(value);
    throw new Error(`invalid type ${typeof value} for Child`);
  }

  openContainer = new BehaviorSubject<Open>(false);

  /** iternal function for handling BehaviorSubject<Open> types used for bidirectional bindings*/
  private openB(value: BehaviorSubject<Open>): ModalElement {
    this.openContainer = value;
    return this;
  }

  /** iternal function for handling raw Open types*/
  private openR(value: Open): ModalElement {
    this.openContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Open> types*/
  private openO(value: Observable<Open>): ModalElement {
    value.subscribe({ next: v => this.openContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   *
   */
  open(value: BehaviorSubject<Open> | Observable<Open> | Open): ModalElement {
    if (TypeGuards.isOpen(value)) return this.openR(value);
    else if (isSubject(value)) return this.openB(value);
    else if (isObservable(value)) return this.openO(value);
    throw new Error(`invalid type ${typeof value} for Open`);
  }

  visibileHeaderContainer = new BehaviorSubject<VisibileHeader>(true);

  /** iternal function for handling raw VisibileHeader types*/
  private visibileHeaderR(value: VisibileHeader): ModalElement {
    this.visibileHeaderContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<VisibileHeader> types*/
  private visibileHeaderO(value: Observable<VisibileHeader>): ModalElement {
    value.subscribe({ next: v => this.visibileHeaderContainer.next(v) });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  visibileHeader(
    value: Observable<VisibileHeader> | VisibileHeader
  ): ModalElement {
    if (TypeGuards.isVisibileHeader(value)) return this.visibileHeaderR(value);
    else if (isObservable(value)) return this.visibileHeaderO(value);
    throw new Error(`invalid type ${typeof value} for VisibileHeader`);
  }

  visibileHeaderCloseButtonContainer = new BehaviorSubject<
    VisibileHeaderCloseButton
  >(true);

  /** iternal function for handling raw VisibileHeaderCloseButton types*/
  private visibileHeaderCloseButtonR(
    value: VisibileHeaderCloseButton
  ): ModalElement {
    this.visibileHeaderCloseButtonContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<VisibileHeaderCloseButton> types*/
  private visibileHeaderCloseButtonO(
    value: Observable<VisibileHeaderCloseButton>
  ): ModalElement {
    value.subscribe({
      next: v => this.visibileHeaderCloseButtonContainer.next(v)
    });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  visibileHeaderCloseButton(
    value: Observable<VisibileHeaderCloseButton> | VisibileHeaderCloseButton
  ): ModalElement {
    if (TypeGuards.isVisibileHeaderCloseButton(value))
      return this.visibileHeaderCloseButtonR(value);
    else if (isObservable(value)) return this.visibileHeaderCloseButtonO(value);
    throw new Error(
      `invalid type ${typeof value} for VisibileHeaderCloseButton`
    );
  }

  titleContainer = new BehaviorSubject<Title>(undefined);

  /** iternal function for handling raw Title types*/
  private titleR(value: Title): ModalElement {
    this.titleContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Title> types*/
  private titleO(value: Observable<Title>): ModalElement {
    value.subscribe({ next: v => this.titleContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  title(value: Observable<Title> | Title): ModalElement {
    if (TypeGuards.isTitle(value)) return this.titleR(value);
    else if (isObservable(value)) return this.titleO(value);
    throw new Error(`invalid type ${typeof value} for Title`);
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
const Modal = (child: Observable<Child> | Child): ModalElement => {
  return new ModalElement().child(child);
};

export default Modal;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
