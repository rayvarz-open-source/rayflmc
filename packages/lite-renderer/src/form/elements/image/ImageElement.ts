
import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { BaseElement } from "../base/BaseElement";
import { TypeGuards, Address, Alt, Width, Height, Scale, Border } from './ImageElementAttributes';
import { ImageBorderType } from './ImageBorderType';
import { ImageScaleType } from './ImageScaleType';

export class ImageElement extends BaseElement implements IElement {

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void { }

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Image;
  }

  addressContainer = new BehaviorSubject<Address>(undefined);

  /** iternal function for handling raw Address types*/
  private addressR(value: Address): ImageElement {
    this.addressContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Address> types*/
  private addressO(value: Observable<Address>): ImageElement {
    value.subscribe({ next: v => this.addressContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   * 
   * address of image
   * 
   */
  ;
  address(value: Observable<Address> | Address): ImageElement {
    if (TypeGuards.isAddress(value)) return this.addressR(value);
    else if (isObservable(value)) return this.addressO(value);
    throw new Error(`invalid type ${typeof (value)} for Address`)
  }


  altContainer = new BehaviorSubject<Alt>(undefined);

  /** iternal function for handling raw Alt types*/
  private altR(value: Alt): ImageElement {
    this.altContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Alt> types*/
  private altO(value: Observable<Alt>): ImageElement {
    value.subscribe({ next: v => this.altContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   * 
   * same as <image alt=".."/>
   * 
   */
  ;
  alt(value: Observable<Alt> | Alt): ImageElement {
    if (TypeGuards.isAlt(value)) return this.altR(value);
    else if (isObservable(value)) return this.altO(value);
    throw new Error(`invalid type ${typeof (value)} for Alt`)
  }


  widthContainer = new BehaviorSubject<Width>(60);

  /** iternal function for handling raw Width types*/
  private widthR(value: Width): ImageElement {
    this.widthContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Width> types*/
  private widthO(value: Observable<Width>): ImageElement {
    value.subscribe({ next: v => this.widthContainer.next(v) });
    return this;
  }

  /**
   * default value: 60
   * 
   * image width
   * 
   */
  ;
  width(value: Observable<Width> | Width): ImageElement {
    if (TypeGuards.isWidth(value)) return this.widthR(value);
    else if (isObservable(value)) return this.widthO(value);
    throw new Error(`invalid type ${typeof (value)} for Width`)
  }


  heightContainer = new BehaviorSubject<Height>(60);

  /** iternal function for handling raw Height types*/
  private heightR(value: Height): ImageElement {
    this.heightContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Height> types*/
  private heightO(value: Observable<Height>): ImageElement {
    value.subscribe({ next: v => this.heightContainer.next(v) });
    return this;
  }

  /**
   * default value: 60
   * 
   * image height
   * 
   */
  ;
  height(value: Observable<Height> | Height): ImageElement {
    if (TypeGuards.isHeight(value)) return this.heightR(value);
    else if (isObservable(value)) return this.heightO(value);
    throw new Error(`invalid type ${typeof (value)} for Height`)
  }


  scaleContainer = new BehaviorSubject<Scale>(ImageScaleType.Contain);

  /** iternal function for handling raw Scale types*/
  private scaleR(value: Scale): ImageElement {
    this.scaleContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Scale> types*/
  private scaleO(value: Observable<Scale>): ImageElement {
    value.subscribe({ next: v => this.scaleContainer.next(v) });
    return this;
  }

  /**
   * default value: ImageScaleType.Contain
   * 
   * scale type // TODO: add docs
   * 
   */
  ;
  scale(value: Observable<Scale> | Scale): ImageElement {
    if (TypeGuards.isScale(value)) return this.scaleR(value);
    else if (isObservable(value)) return this.scaleO(value);
    throw new Error(`invalid type ${typeof (value)} for Scale`)
  }


  borderContainer = new BehaviorSubject<Border>(ImageBorderType.None);

  /** iternal function for handling raw Border types*/
  private borderR(value: Border): ImageElement {
    this.borderContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Border> types*/
  private borderO(value: Observable<Border>): ImageElement {
    value.subscribe({ next: v => this.borderContainer.next(v) });
    return this;
  }

  /**
   * default value: ImageBorderType.None
   * 
   * border type // TODO: add docs
   * 
   */
  ;
  border(value: Observable<Border> | Border): ImageElement {
    if (TypeGuards.isBorder(value)) return this.borderR(value);
    else if (isObservable(value)) return this.borderO(value);
    throw new Error(`invalid type ${typeof (value)} for Border`)
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
 * let controller = new BehaviorSubject<string>("http://images.test/placeholder.png");
 * Image(controller);
 * 
 */
const Image = (address: Observable<Address> | Address): ImageElement => {
  return new ImageElement()
    .address(address);
};

export default Image;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/

