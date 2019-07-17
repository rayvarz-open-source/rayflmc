import IElement, { ValidationResult, areElements } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { Direction } from '../share/Direction';
import {BaseElement} from "../base/BaseElement";

export class TabElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.TAB;
  }

  childrenContainer!: BehaviorSubject<IElement[]>;
  childrenTitleContainer!: BehaviorSubject<string[]>;

  validate(): ValidationResult {
    return new ValidationResult(this.childrenContainer.value.map(i => i.validate().isValid).reduce((p, c) => p && c));
  }

  private childrenR(children: IElement[]): TabElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    this.childrenContainer.next(children);
    return this;
  }

  private childrenO(children: Observable<IElement[]>): TabElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    children.subscribe({
      next: v => this.childrenContainer.next(v),
    });
    return this;
  }

  children(children_: Observable<IElement[]> | IElement[]): TabElement {
    if (isObservable(children_)) return this.childrenO(children_);
    if (areElements(children_)) return this.childrenR(children_); // TODO: move array check in areElements
    throw new Error('given children type is not support');
  }
  private childrenTitleR(children: string[]): TabElement {
    if (this.childrenTitleContainer == null) this.childrenTitleContainer = new BehaviorSubject<string[]>([]);
    this.childrenTitleContainer.next(children);
    return this;
  }

  private childrenTitleO(children: Observable<string[]>): TabElement {
    if (this.childrenTitleContainer == null) this.childrenTitleContainer = new BehaviorSubject<string[]>([]);
    children.subscribe({
      next: v => this.childrenTitleContainer.next(v),
    });
    return this;
  }

  childrenTitle(childrenTitle: Observable<string[]> | string[]): TabElement {
    if (isObservable(childrenTitle)) return this.childrenTitleO(childrenTitle);
    return this.childrenTitleR(childrenTitle); // TODO: move array check in areElements
    throw new Error('given children type is not support');
  }
  // direction

  directionValue = new BehaviorSubject<Direction>(Direction.Column);

  private directionR(dir: Direction): TabElement {
    this.directionValue.next(dir);
    return this;
  }

  private directionO(dir: Observable<Direction>): TabElement {
    dir.subscribe({
      next: v => this.directionValue.next(v),
    });
    return this;
  }

  direction(dir: Observable<Direction> | Direction): TabElement {
    if (typeof dir === 'number') return this.directionR(dir);
    if (isObservable(dir)) return this.directionO(dir);
    throw new Error('given dir type is not support');
  }
}

const Tab = (children?: Observable<IElement[]> | IElement[]): TabElement => {
  let element = new TabElement();
  if (children) return element.children(children);
  return element;
};

export default Tab;
