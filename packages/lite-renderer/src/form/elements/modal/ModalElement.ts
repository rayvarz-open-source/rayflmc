import IElement, { ValidationResult } from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import { isSubject } from "../../../flmc-data-layer";
import {
  TypeGuards,
  Child,
  Open,
  VisibleHeader,
  VisibleHeaderCloseButton,
  Title,
  NoPadding,
  NoBackground,
  NoBackdropClickClose,
  NoEscapeKeyDownClose,
  LazyContent,
  MinWidth,
  MinHeight,
  MaxWidth,
  MaxHeight
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

  visibleHeaderContainer = new BehaviorSubject<VisibleHeader>(true);

  /** iternal function for handling raw VisibleHeader types*/
  private visibleHeaderR(value: VisibleHeader): ModalElement {
    this.visibleHeaderContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<VisibleHeader> types*/
  private visibleHeaderO(value: Observable<VisibleHeader>): ModalElement {
    value.subscribe({ next: v => this.visibleHeaderContainer.next(v) });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  visibleHeader(value: Observable<VisibleHeader> | VisibleHeader): ModalElement {
    if (TypeGuards.isVisibleHeader(value)) return this.visibleHeaderR(value);
    else if (isObservable(value)) return this.visibleHeaderO(value);
    throw new Error(`invalid type ${typeof value} for VisibleHeader`);
  }

  visibleHeaderCloseButtonContainer = new BehaviorSubject<VisibleHeaderCloseButton>(true);

  /** iternal function for handling raw VisibleHeaderCloseButton types*/
  private visibleHeaderCloseButtonR(value: VisibleHeaderCloseButton): ModalElement {
    this.visibleHeaderCloseButtonContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<VisibleHeaderCloseButton> types*/
  private visibleHeaderCloseButtonO(value: Observable<VisibleHeaderCloseButton>): ModalElement {
    value.subscribe({ next: v => this.visibleHeaderCloseButtonContainer.next(v) });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  visibleHeaderCloseButton(value: Observable<VisibleHeaderCloseButton> | VisibleHeaderCloseButton): ModalElement {
    if (TypeGuards.isVisibleHeaderCloseButton(value)) return this.visibleHeaderCloseButtonR(value);
    else if (isObservable(value)) return this.visibleHeaderCloseButtonO(value);
    throw new Error(`invalid type ${typeof value} for VisibleHeaderCloseButton`);
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

  noPaddingContainer = new BehaviorSubject<NoPadding>(false);

  /** iternal function for handling raw NoPadding types*/
  private noPaddingR(value: NoPadding): ModalElement {
    this.noPaddingContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<NoPadding> types*/
  private noPaddingO(value: Observable<NoPadding>): ModalElement {
    value.subscribe({ next: v => this.noPaddingContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   *
   */
  noPadding(value: Observable<NoPadding> | NoPadding): ModalElement {
    if (TypeGuards.isNoPadding(value)) return this.noPaddingR(value);
    else if (isObservable(value)) return this.noPaddingO(value);
    throw new Error(`invalid type ${typeof value} for NoPadding`);
  }

  noBackgroundContainer = new BehaviorSubject<NoBackground>(false);

  /** iternal function for handling raw NoBackground types*/
  private noBackgroundR(value: NoBackground): ModalElement {
    this.noBackgroundContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<NoBackground> types*/
  private noBackgroundO(value: Observable<NoBackground>): ModalElement {
    value.subscribe({ next: v => this.noBackgroundContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   *
   */
  noBackground(value: Observable<NoBackground> | NoBackground): ModalElement {
    if (TypeGuards.isNoBackground(value)) return this.noBackgroundR(value);
    else if (isObservable(value)) return this.noBackgroundO(value);
    throw new Error(`invalid type ${typeof value} for NoBackground`);
  }

  noBackdropClickCloseContainer = new BehaviorSubject<NoBackdropClickClose>(true);

  /** iternal function for handling raw NoBackdropClickClose types*/
  private noBackdropClickCloseR(value: NoBackdropClickClose): ModalElement {
    this.noBackdropClickCloseContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<NoBackdropClickClose> types*/
  private noBackdropClickCloseO(value: Observable<NoBackdropClickClose>): ModalElement {
    value.subscribe({ next: v => this.noBackdropClickCloseContainer.next(v) });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  noBackdropClickClose(value: Observable<NoBackdropClickClose> | NoBackdropClickClose): ModalElement {
    if (TypeGuards.isNoBackdropClickClose(value)) return this.noBackdropClickCloseR(value);
    else if (isObservable(value)) return this.noBackdropClickCloseO(value);
    throw new Error(`invalid type ${typeof value} for NoBackdropClickClose`);
  }

  noEscapeKeyDownCloseContainer = new BehaviorSubject<NoEscapeKeyDownClose>(true);

  /** iternal function for handling raw NoEscapeKeyDownClose types*/
  private noEscapeKeyDownCloseR(value: NoEscapeKeyDownClose): ModalElement {
    this.noEscapeKeyDownCloseContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<NoEscapeKeyDownClose> types*/
  private noEscapeKeyDownCloseO(value: Observable<NoEscapeKeyDownClose>): ModalElement {
    value.subscribe({ next: v => this.noEscapeKeyDownCloseContainer.next(v) });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  noEscapeKeyDownClose(value: Observable<NoEscapeKeyDownClose> | NoEscapeKeyDownClose): ModalElement {
    if (TypeGuards.isNoEscapeKeyDownClose(value)) return this.noEscapeKeyDownCloseR(value);
    else if (isObservable(value)) return this.noEscapeKeyDownCloseO(value);
    throw new Error(`invalid type ${typeof value} for NoEscapeKeyDownClose`);
  }

  lazyContentContainer = new BehaviorSubject<LazyContent>(true);

  /** iternal function for handling raw LazyContent types*/
  private lazyContentR(value: LazyContent): ModalElement {
    this.lazyContentContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<LazyContent> types*/
  private lazyContentO(value: Observable<LazyContent>): ModalElement {
    value.subscribe({ next: v => this.lazyContentContainer.next(v) });
    return this;
  }

  /**
   * default value: true
   *
   *
   */
  lazyContent(value: Observable<LazyContent> | LazyContent): ModalElement {
    if (TypeGuards.isLazyContent(value)) return this.lazyContentR(value);
    else if (isObservable(value)) return this.lazyContentO(value);
    throw new Error(`invalid type ${typeof value} for LazyContent`);
  }

  minWidthContainer = new BehaviorSubject<MinWidth>(undefined);

  /** iternal function for handling raw MinWidth types*/
  private minWidthR(value: MinWidth): ModalElement {
    this.minWidthContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<MinWidth> types*/
  private minWidthO(value: Observable<MinWidth>): ModalElement {
    value.subscribe({ next: v => this.minWidthContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  minWidth(value: Observable<MinWidth> | MinWidth): ModalElement {
    if (isObservable(value)) this.minWidthO(value);
    else this.minWidthR(value);
    return this;
  }

  minHeightContainer = new BehaviorSubject<MinHeight>(undefined);

  /** iternal function for handling raw MinHeight types*/
  private minHeightR(value: MinHeight): ModalElement {
    this.minHeightContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<MinHeight> types*/
  private minHeightO(value: Observable<MinHeight>): ModalElement {
    value.subscribe({ next: v => this.minHeightContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  minHeight(value: Observable<MinHeight> | MinHeight): ModalElement {
    if (isObservable(value)) this.minHeightO(value);
    else this.minHeightR(value);
    return this;
  }

  maxWidthContainer = new BehaviorSubject<MaxWidth>(undefined);

  /** iternal function for handling raw MaxWidth types*/
  private maxWidthR(value: MaxWidth): ModalElement {
    this.maxWidthContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<MaxWidth> types*/
  private maxWidthO(value: Observable<MaxWidth>): ModalElement {
    value.subscribe({ next: v => this.maxWidthContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  maxWidth(value: Observable<MaxWidth> | MaxWidth): ModalElement {
    if (isObservable(value)) this.maxWidthO(value);
    else this.maxWidthR(value);
    return this;
  }

  maxHeightContainer = new BehaviorSubject<MaxHeight>(undefined);

  /** iternal function for handling raw MaxHeight types*/
  private maxHeightR(value: MaxHeight): ModalElement {
    this.maxHeightContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<MaxHeight> types*/
  private maxHeightO(value: Observable<MaxHeight>): ModalElement {
    value.subscribe({ next: v => this.maxHeightContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  maxHeight(value: Observable<MaxHeight> | MaxHeight): ModalElement {
    if (isObservable(value)) this.maxHeightO(value);
    else this.maxHeightR(value);
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
const Modal = (child: Observable<Child> | Child): ModalElement => {
  return new ModalElement().child(child);
};

export default Modal;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
