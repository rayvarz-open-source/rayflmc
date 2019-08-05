import IElement, {
  ValidationResult
} from "../../../flmc-data-layer/FormController/IElement";
import { ElementType } from "../ElementType";
import { Observable, BehaviorSubject, isObservable } from "rxjs";
import { BaseElement } from "../base/BaseElement";
import {
  TypeGuards,
  Value,
  NoWrap,
  GutterBottom,
  Colors,
  Variant,
  Display,
  Align
} from "./LabelElementAttributes";

export class LabelElement extends BaseElement implements IElement {
  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Label;
  }

  valueContainer = new BehaviorSubject<Value>("");

  /** iternal function for handling raw Value types*/
  private valueR(value: Value): LabelElement {
    this.valueContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Value> types*/
  private valueO(value: Observable<Value>): LabelElement {
    value.subscribe({ next: v => this.valueContainer.next(v) });
    return this;
  }

  /**
   * default value: ''
   *
   * container that holds value of text input.
   * @example
   * // read a label value
   *
   * controller = new BehaviorSubject<string>("label text");
   * Label(controller);
   * console.log(controller.value);
   *
   * // set text label value
   *
   * controller.next("new value")
   *
   */
  value(value: Observable<Value> | Value): LabelElement {
    if (TypeGuards.isValue(value)) return this.valueR(value);
    else if (isObservable(value)) return this.valueO(value);
    throw new Error(`invalid type ${typeof value} for Value`);
  }

  noWrapContainer = new BehaviorSubject<NoWrap>(false);

  /** iternal function for handling raw NoWrap types*/
  private noWrapR(value: NoWrap): LabelElement {
    this.noWrapContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<NoWrap> types*/
  private noWrapO(value: Observable<NoWrap>): LabelElement {
    value.subscribe({ next: v => this.noWrapContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   * If true, the text will not wrap, but instead will truncate with an ellipsis.
   *
   * see https://material-ui.com/api/typography/ for more info
   */
  noWrap(value: Observable<NoWrap> | NoWrap): LabelElement {
    if (TypeGuards.isNoWrap(value)) return this.noWrapR(value);
    else if (isObservable(value)) return this.noWrapO(value);
    throw new Error(`invalid type ${typeof value} for NoWrap`);
  }

  gutterBottomContainer = new BehaviorSubject<GutterBottom>(false);

  /** iternal function for handling raw GutterBottom types*/
  private gutterBottomR(value: GutterBottom): LabelElement {
    this.gutterBottomContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<GutterBottom> types*/
  private gutterBottomO(value: Observable<GutterBottom>): LabelElement {
    value.subscribe({ next: v => this.gutterBottomContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   * 	If true, the text will have a bottom margin.
   *
   * see https://material-ui.com/api/typography/ for more info
   */
  gutterBottom(value: Observable<GutterBottom> | GutterBottom): LabelElement {
    if (TypeGuards.isGutterBottom(value)) return this.gutterBottomR(value);
    else if (isObservable(value)) return this.gutterBottomO(value);
    throw new Error(`invalid type ${typeof value} for GutterBottom`);
  }

  colorsContainer = new BehaviorSubject<Colors>("initial");

  /** iternal function for handling raw Colors types*/
  private colorsR(value: Colors): LabelElement {
    this.colorsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Colors> types*/
  private colorsO(value: Observable<Colors>): LabelElement {
    value.subscribe({ next: v => this.colorsContainer.next(v) });
    return this;
  }

  /**
   * default value: 'initial'
   *
   * The color of the component. It supports those theme colors that make sense for this component.
   * valid colors : LabelColors.* | 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
   *
   * see https://material-ui.com/api/typography/ for more info
   */
  colors(value: Observable<Colors> | Colors): LabelElement {
    if (TypeGuards.isColor(value)) return this.colorsR(value);
    else if (isObservable(value)) return this.colorsO(value);
    throw new Error(`invalid type ${typeof value} for Colors`);
  }

  variantContainer = new BehaviorSubject<Variant>("inherit");

  /** iternal function for handling raw Variant types*/
  private variantR(value: Variant): LabelElement {
    this.variantContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Variant> types*/
  private variantO(value: Observable<Variant>): LabelElement {
    value.subscribe({ next: v => this.variantContainer.next(v) });
    return this;
  }

  /**
   * default value: 'inherit'
   *
   * Applies the theme typography styles.
   * valid variants : LabelVariant.* | 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit'
   *
   * see https://material-ui.com/api/typography/ for more info
   */
  variant(value: Observable<Variant> | Variant): LabelElement {
    if (TypeGuards.isLabelVariant(value)) return this.variantR(value);
    else if (isObservable(value)) return this.variantO(value);
    throw new Error(`invalid type ${typeof value} for Variant`);
  }

  displayContainer = new BehaviorSubject<Display>("initial");

  /** iternal function for handling raw Display types*/
  private displayR(value: Display): LabelElement {
    this.displayContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Display> types*/
  private displayO(value: Observable<Display>): LabelElement {
    value.subscribe({ next: v => this.displayContainer.next(v) });
    return this;
  }

  /**
   * default value: 'initial'
   *
   * Controls the display type
   * valid variants :  DisplayType.* | 'block' | 'initial' | 'inline'
   *
   * see https://material-ui.com/api/typography/ for more info
   */
  display(value: Observable<Display> | Display): LabelElement {
    if (TypeGuards.isDisplayType(value)) return this.displayR(value);
    else if (isObservable(value)) return this.displayO(value);
    throw new Error(`invalid type ${typeof value} for Display`);
  }

  alignContainer = new BehaviorSubject<Align>("inherit");

  /** iternal function for handling raw Align types*/
  private alignR(value: Align): LabelElement {
    this.alignContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Align> types*/
  private alignO(value: Observable<Align>): LabelElement {
    value.subscribe({ next: v => this.alignContainer.next(v) });
    return this;
  }

  /**
   * default value: 'inherit'
   *
   * Set the text-align on the component.
   * valid variants :  TextAlignment.* | 'inherit', 'left', 'center', 'right', 'justify'
   *
   * see https://material-ui.com/api/typography/ for more info
   */
  align(value: Observable<Align> | Align): LabelElement {
    if (TypeGuards.isAlign(value)) return this.alignR(value);
    else if (isObservable(value)) return this.alignO(value);
    throw new Error(`invalid type ${typeof value} for Align`);
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
 * Label("This is a label");
 *
 */
const Label = (value: Observable<Value> | Value): LabelElement => {
  return new LabelElement().value(value);
};

export default Label;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
