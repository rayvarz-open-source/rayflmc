
import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { BaseElement } from "../base/BaseElement";
import { isSubject } from '../../../flmc-data-layer';
import { TypeGuards, Width, Height } from './SpaceElementAttributes';

export class SpaceElement extends BaseElement implements IElement {

    validate(): ValidationResult {
        return new ValidationResult(true);
    }

    dispose(): void { }

    //region auto generated code
    /*******************************************/
    /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
    /*******************************************/

    get type(): string {
        return ElementType.Space;
    }

    widthContainer = new BehaviorSubject<Width>(0);

    /** iternal function for handling raw Width types*/
    private widthR(value: Width): SpaceElement {
        this.widthContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<Width> types*/
    private widthO(value: Observable<Width>): SpaceElement {
        value.subscribe({ next: v => this.widthContainer.next(v) });
        return this;
    }

    /**
     * default value: 60
     * 
     * space width
     * 
     */
    width(value: Observable<Width> | Width): SpaceElement {
        if (TypeGuards.isWidth(value)) return this.widthR(value);
        else if (isObservable(value)) return this.widthO(value);
        throw new Error(`invalid type ${typeof (value)} for Width`)
    }


    heightContainer = new BehaviorSubject<Height>(0);

    /** iternal function for handling raw Height types*/
    private heightR(value: Height): SpaceElement {
        this.heightContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<Height> types*/
    private heightO(value: Observable<Height>): SpaceElement {
        value.subscribe({ next: v => this.heightContainer.next(v) });
        return this;
    }

    /**
     * default value: 60
     * 
     * space height
     * 
     */
    height(value: Observable<Height> | Height): SpaceElement {
        if (TypeGuards.isHeight(value)) return this.heightR(value);
        else if (isObservable(value)) return this.heightO(value);
        throw new Error(`invalid type ${typeof (value)} for Height`)
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
 * Space().width(10).height(10)
 * 
 */
const Space = (): SpaceElement => {
    return new SpaceElement()
        ;
};

export default Space;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/

