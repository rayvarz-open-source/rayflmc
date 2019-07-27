
import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { BaseElement } from "../base/BaseElement";
import { TypeGuards, Text, Loading, Disabled, Colors, Variant, Icon } from './ButtonElementAttributes';

export class ButtonElement extends BaseElement implements IElement {

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void { }

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Button;
  }

  textContainer = new BehaviorSubject<Text>(undefined);

  /** iternal function for handling raw Text types*/
  private textR(value: Text): ButtonElement {
    this.textContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Text> types*/
  private textO(value: Observable<Text>): ButtonElement {
    value.subscribe({ next: v => this.textContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   * 
   * label of button.
   * 
   * 
   */
  ;
  text(value: Observable<Text> | Text): ButtonElement {
    if (TypeGuards.isText(value)) return this.textR(value);
    else if (isObservable(value)) return this.textO(value);
    throw new Error(`invalid type ${typeof (value)} for Text`)
  }


  loadingContainer = new BehaviorSubject<Loading>(false);

  /** iternal function for handling raw Loading types*/
  private loadingR(value: Loading): ButtonElement {
    this.loadingContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Loading> types*/
  private loadingO(value: Observable<Loading>): ButtonElement {
    value.subscribe({ next: v => this.loadingContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   * 
   * if true, button will be disabled and shows an loading indicator
   * 
   */
  ;
  loading(value: Observable<Loading> | Loading): ButtonElement {
    if (TypeGuards.isLoading(value)) return this.loadingR(value);
    else if (isObservable(value)) return this.loadingO(value);
    throw new Error(`invalid type ${typeof (value)} for Loading`)
  }


  disabledContainer = new BehaviorSubject<Disabled>(false);

  /** iternal function for handling raw Disabled types*/
  private disabledR(value: Disabled): ButtonElement {
    this.disabledContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Disabled> types*/
  private disabledO(value: Observable<Disabled>): ButtonElement {
    value.subscribe({ next: v => this.disabledContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   * 
   * If true, the button will be disabled.
   * 
   * see https://material-ui.com/api/button/ for more info
   */
  ;
  disabled(value: Observable<Disabled> | Disabled): ButtonElement {
    if (TypeGuards.isDisabled(value)) return this.disabledR(value);
    else if (isObservable(value)) return this.disabledO(value);
    throw new Error(`invalid type ${typeof (value)} for Disabled`)
  }


  colorsContainer = new BehaviorSubject<Colors>('default');

  /** iternal function for handling raw Colors types*/
  private colorsR(value: Colors): ButtonElement {
    this.colorsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Colors> types*/
  private colorsO(value: Observable<Colors>): ButtonElement {
    value.subscribe({ next: v => this.colorsContainer.next(v) });
    return this;
  }

  /**
   * default value: 'default'
   * 
   * The color of the component. It supports those theme colors that make sense for this component.
   * 
   * valid colors : ButtonColor.* | 'default' | 'inherit' | 'primary' | 'secondary'
   * 
   * see https://material-ui.com/api/button/ for more info
   */
  ;
  colors(value: Observable<Colors> | Colors): ButtonElement {
    if (TypeGuards.isColors(value)) return this.colorsR(value);
    else if (isObservable(value)) return this.colorsO(value);
    throw new Error(`invalid type ${typeof (value)} for Colors`)
  }


  variantContainer = new BehaviorSubject<Variant>('contained');

  /** iternal function for handling raw Variant types*/
  private variantR(value: Variant): ButtonElement {
    this.variantContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Variant> types*/
  private variantO(value: Observable<Variant>): ButtonElement {
    value.subscribe({ next: v => this.variantContainer.next(v) });
    return this;
  }

  /**
   * default value: 'contained'
   * 
   * 	The variant to use.
   * 
   * valid colors : ButtonVariant.* | 'text' | 'outlined' | 'contained'
   * 
   * see https://material-ui.com/api/button/ for more info
   */
  ;
  variant(value: Observable<Variant> | Variant): ButtonElement {
    if (TypeGuards.isVariant(value)) return this.variantR(value);
    else if (isObservable(value)) return this.variantO(value);
    throw new Error(`invalid type ${typeof (value)} for Variant`)
  }


  iconContainer = new BehaviorSubject<Icon>(undefined);

  /** iternal function for handling raw Icon types*/
  private iconR(value: Icon): ButtonElement {
    this.iconContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Icon> types*/
  private iconO(value: Observable<Icon>): ButtonElement {
    value.subscribe({ next: v => this.iconContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   * 
   * name of button's icon
   * all supported icon names : https://material.io/tools/icons
   * 
   */
  ;
  icon(value: Observable<Icon> | Icon): ButtonElement {
    if (TypeGuards.isIcon(value)) return this.iconR(value);
    else if (isObservable(value)) return this.iconO(value);
    throw new Error(`invalid type ${typeof (value)} for Icon`)
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
 * Button("This is button's label");
 * 
 */
const Button = (text: Observable<Text> | Text): ButtonElement => {
  return new ButtonElement()
    .text(text);
};

export default Button;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/

