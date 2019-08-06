import IElement, { ValidationResult } from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import { isSubject } from "../../../flmc-data-layer";
import { TypeGuards, TabElements, TabTitles, CurrentTab } from "./TabElementAttributes";

export class TabElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    let validationResults = (this.tabElementsContainer.value || []).map(v => v.validate());
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
    return ElementType.Tab;
  }

  tabElementsContainer = new BehaviorSubject<TabElements>([]);

  /** iternal function for handling raw TabElements types*/
  private tabElementsR(value: TabElements): TabElement {
    this.tabElementsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<TabElements> types*/
  private tabElementsO(value: Observable<TabElements>): TabElement {
    value.subscribe({ next: v => this.tabElementsContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * TODO: add docs
   */
  tabElements(value: Observable<TabElements> | TabElements): TabElement {
    if (TypeGuards.isTabs(value)) return this.tabElementsR(value);
    else if (isObservable(value)) return this.tabElementsO(value);
    throw new Error(`invalid type ${typeof value} for TabElements`);
  }

  tabTitlesContainer = new BehaviorSubject<TabTitles>([]);

  /** iternal function for handling raw TabTitles types*/
  private tabTitlesR(value: TabTitles): TabElement {
    this.tabTitlesContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<TabTitles> types*/
  private tabTitlesO(value: Observable<TabTitles>): TabElement {
    value.subscribe({ next: v => this.tabTitlesContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * TODO: add docs
   *
   */
  tabTitles(value: Observable<TabTitles> | TabTitles): TabElement {
    if (TypeGuards.isTabTitles(value)) return this.tabTitlesR(value);
    else if (isObservable(value)) return this.tabTitlesO(value);
    throw new Error(`invalid type ${typeof value} for TabTitles`);
  }

  currentTabContainer = new BehaviorSubject<CurrentTab>(0);

  /** iternal function for handling BehaviorSubject<CurrentTab> types used for bidirectional bindings*/
  private currentTabB(value: BehaviorSubject<CurrentTab>): TabElement {
    this.currentTabContainer = value;
    return this;
  }

  /** iternal function for handling raw CurrentTab types*/
  private currentTabR(value: CurrentTab): TabElement {
    this.currentTabContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<CurrentTab> types*/
  private currentTabO(value: Observable<CurrentTab>): TabElement {
    value.subscribe({ next: v => this.currentTabContainer.next(v) });
    return this;
  }

  /**
   * default value: 0
   *
   * TODO: add docs
   *
   */
  currentTab(value: BehaviorSubject<CurrentTab> | Observable<CurrentTab> | CurrentTab): TabElement {
    if (TypeGuards.isCurrentTab(value)) return this.currentTabR(value);
    else if (isObservable(value)) return this.currentTabO(value);
    else if (isSubject(value)) return this.currentTabB(value);
    throw new Error(`invalid type ${typeof value} for CurrentTab`);
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
 * TODO: add docs
 *
 */
const Tab = (currentTab: BehaviorSubject<CurrentTab> | Observable<CurrentTab> | CurrentTab): TabElement => {
  return new TabElement().currentTab(currentTab);
};

export default Tab;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
