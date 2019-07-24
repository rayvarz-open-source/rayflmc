import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import {BaseElement} from "../base/BaseElement";
import {ImageScaleType} from "./ImageScaleType";

export class ImageElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.IMAGE;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  imageAddress = new BehaviorSubject<string>('');
  imageAlt = new BehaviorSubject<string>('');
  imageWidth = new BehaviorSubject<number>(60);
  imageHeight = new BehaviorSubject<number>(60);
  imageScaleType = new BehaviorSubject<ImageScaleType>(ImageScaleType.Contain);
  imageBorderType = new BehaviorSubject<string>('');

  //region image
  private srcR(image: string): ImageElement {
    this.imageAddress.next(image);
    return this;
  }

  private srcO(image: Observable<string>): ImageElement {
    image.subscribe({
      next: v => this.imageAddress.next(v),
    });
    return this;
  }

  src(image: Observable<string> | string): ImageElement {
    if (typeof image === 'string') return this.srcR(image);
    if (isObservable(image)) return this.srcO(image);
    throw new Error('given text type is not supported');
  }
  //endregion
  //region alt
  private altR(image: string): ImageElement {
    this.imageAlt.next(image);
    return this;
  }

  private altO(image: Observable<string>): ImageElement {
    image.subscribe({
      next: v => this.imageAlt.next(v),
    });
    return this;
  }

  alt(image: Observable<string> | string): ImageElement {
    if (typeof image === 'string') return this.altR(image);
    if (isObservable(image)) return this.altO(image);
    throw new Error('given text type is not supported');
  }
  //endregion

  //region width
  private widthR(width: number): ImageElement {
    this.imageWidth.next(width);
    return this;
  }
  private widthO(width: Observable<number>): ImageElement {
    width.subscribe({
      next: v => this.imageWidth.next(v),
    });
    return this;
  }

  width(width: Observable<number> | number): ImageElement {
    if (typeof width === 'number') return this.widthR(width);
    if (isObservable(width)) return this.widthO(width);
    throw new Error('given width is not supported');
  }
  //endregion
  //region height
  private heightR(height: number): ImageElement {
    this.imageHeight.next(height);
    return this;
  }

  private heightO(height: Observable<number>): ImageElement {
    height.subscribe({
      next: v => this.imageHeight.next(v),
    });
    return this;
  }

  height(height: Observable<number> | number): ImageElement {
    if (typeof height === 'number') return this.heightR(height);
    if (isObservable(height)) return this.heightO(height);
    throw new Error('given height is not supported');
  }
  //endregion

  //region scaleType
  private scaleTypeR(scaleType: ImageScaleType): ImageElement {
    this.imageScaleType.next(scaleType);
    return this;
  }
  private scaleTypeO(scaleType: Observable<ImageScaleType>): ImageElement {
    scaleType.subscribe({
      next: v => this.imageScaleType.next(v),
    });
    return this;
  }

  scaleType(scaleType: Observable<ImageScaleType> | ImageScaleType): ImageElement {
    if (isObservable(scaleType)) return this.scaleTypeO(scaleType);
    return this.scaleTypeR(scaleType);

  }
  //endregion

  //region borderType
  private borderTypeR(borderType: string): ImageElement {
    this.imageBorderType.next(borderType);
    return this;
  }
  private borderTypeO(borderType: Observable<string>): ImageElement {
    borderType.subscribe({
      next: v => this.imageBorderType.next(v),
    });
    return this;
  }

  borderType(borderType: Observable<string> | string): ImageElement {
    if (typeof borderType === 'string') return this.borderTypeR(borderType);
    if (isObservable(borderType)) return this.borderTypeO(borderType);
    throw new Error('given borderType is not supported');
  }
  //endregion

}
const Image = (): ImageElement => {
  let element = new ImageElement();
  return element;
};
export default Image;
