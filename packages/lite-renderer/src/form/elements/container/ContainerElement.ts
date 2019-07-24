import IElement, {
  ValidationResult,
  areElements,
  areContainElement
} from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { Direction } from '../share/Direction';
import {BaseElement} from "../base/BaseElement";
import {ContainerModel} from "./ContainerModel";
import {element, instanceOf, number} from "prop-types";
import "reflect-metadata";
export class ContainerElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.CONTAINER;
  }

  childrenContainer!: BehaviorSubject<IElement[]>;
  childrenWeightedContainer!: BehaviorSubject<ContainerModel[]>;

  validate(): ValidationResult {
    return new ValidationResult(this.childrenContainer.value.map(i => i.validate().isValid).reduce((p, c) => p && c));
  }

  private childrenR(children: IElement[]): ContainerElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    this.childrenContainer.next(children);
    return this;
  }

  private childrenO(children: Observable<IElement[]>): ContainerElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    children.subscribe({
      next: v => this.childrenContainer.next(v),
    });
    return this;
  }

  children(children_: Observable<IElement[]> | IElement[]): ContainerElement {
    if (isObservable(children_)) return this.childrenO(children_);
    if (areElements(children_)) return this.childrenR(children_); // TODO: move array check in areElements
    throw new Error('given children type is not support');
  }

  private childrenWeightedR(childrenWeighted: ContainerModel[]): ContainerElement {
    if (this.childrenWeightedContainer == null) this.childrenWeightedContainer = new BehaviorSubject<ContainerModel[]>([]);
    this.childrenWeightedContainer.next(childrenWeighted);
    return this;
  }

  private childrenWeightedO(childrenWeighted: Observable<ContainerModel[]>): ContainerElement {
    if (this.childrenWeightedContainer == null) this.childrenWeightedContainer = new BehaviorSubject<ContainerModel[]>([]);
    childrenWeighted.subscribe({
      next: v => this.childrenWeightedContainer.next(v),
    });
    return this;
  }

  childrenWeighted(childrenWeighted: Observable<ContainerModel[]> | ContainerModel[]): ContainerElement {
    if (isObservable(childrenWeighted)) return this.childrenWeightedO(childrenWeighted);
    if (areContainElement(childrenWeighted)) return this.childrenWeightedR(childrenWeighted); // TODO: move array check in areElements
    throw new Error('given children type is not support');
  }

  // direction

  directionValue = new BehaviorSubject<Direction>(Direction.Column);

  private directionR(dir: Direction): ContainerElement {
    this.directionValue.next(dir);
    return this;
  }

  private directionO(dir: Observable<Direction>): ContainerElement {
    dir.subscribe({
      next: v => this.directionValue.next(v),
    });
    return this;
  }

  direction(dir: Observable<Direction> | Direction): ContainerElement {
    if (typeof dir === 'string') return this.directionR(dir);
    if (isObservable(dir)) return this.directionO(dir);
    throw new Error('given dir type is not support');
  }

}

interface DataControllerBuilder {
  (children?: Observable<IElement[]> | IElement[]| Observable<ContainerModel[]> | ContainerModel[],isWeighted?:boolean): ContainerElement,
  createWeightedElement(element:IElement,weight:number): ContainerModel
}

// @ts-ignore
const Container: DataControllerBuilder = (children?: Observable<IElement[]> | IElement[]| Observable<ContainerModel[]> | ContainerModel[],isWeighted?:boolean): ContainerElement => {
  let element = new ContainerElement();
  if (children) {
    if (isWeighted) {
      return element.childrenWeighted(children as any);
    } else {
      return element.children(children as any);
    }
  }
  return element;
};

(Container as any).createWeightedElement = function createWeightedElement(element:IElement,weight:number){
  return new ContainerModel(element,weight);
}

export default Container;
