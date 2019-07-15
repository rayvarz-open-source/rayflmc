import IElement, { ValidationResult, areElements } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { Direction } from '../share/Direction';

export class ModalElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.CONTAINER;
  }

  childrenContainer!: BehaviorSubject<IElement[]>;

  validate(): ValidationResult {
    return new ValidationResult(this.childrenContainer.value.map(i => i.validate().isValid).reduce((p, c) => p && c));
  }

  private childrenR(children: IElement[]): ModalElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    this.childrenContainer.next(children);
    return this;
  }

  private childrenO(children: Observable<IElement[]>): ModalElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    children.subscribe({
      next: v => this.childrenContainer.next(v),
    });
    return this;
  }

  children(children_: Observable<IElement[]> | IElement[]): ModalElement {
    if (isObservable(children_)) return this.childrenO(children_);
    if (areElements(children_)) return this.childrenR(children_); // TODO: move array check in areElements
    throw new Error('given children type is not support');
  }

  // direction

  directionValue = new BehaviorSubject<Direction>(Direction.Column);

  private directionR(dir: Direction): ModalElement {
    this.directionValue.next(dir);
    return this;
  }

  private directionO(dir: Observable<Direction>): ModalElement {
    dir.subscribe({
      next: v => this.directionValue.next(v),
    });
    return this;
  }

  direction(dir: Observable<Direction> | Direction): ModalElement {
    if (typeof dir === 'number') return this.directionR(dir);
    if (isObservable(dir)) return this.directionO(dir);
    throw new Error('given dir type is not support');
  }
}

const Container = (children?: Observable<IElement[]> | IElement[]): ModalElement => {
  let element = new ModalElement();
  if (children) return element.children(children);
  return element;
};

export default Container;
