import IElement, { ValidationResult, areElements } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { Direction } from '../share/Direction';
import {BaseElement} from "../base/BaseElement";
import {ChipModel} from "./ChipModel";
import {ChipSelectionType} from './ChipSelectionType';

export class ChipElement extends BaseElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.CHIP;
  }

  childrenContainer!: BehaviorSubject<ChipModel[]>;
  selectionType = new BehaviorSubject<string>(ChipSelectionType.Show);

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  private childrenR(children: ChipModel[]): ChipElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<ChipModel[]>([]);
    this.childrenContainer.next(children);
    return this;
  }

  private childrenO(children: Observable<ChipModel[]>): ChipElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<ChipModel[]>([]);
    children.subscribe({
      next: v => this.childrenContainer.next(v),
    });
    return this;
  }

  children(children_: Observable<ChipModel[]> | ChipModel[]): ChipElement {
    if (isObservable(children_)) return this.childrenO(children_);
    return this.childrenR(children_); // TODO: move array check in areElements
    throw new Error('given children type is not support');
  }
  private selectTypeR(selectType: string): ChipElement {
    this.selectionType.next(selectType);
    return this;
  }

  private selectTypeO(selectType: Observable<string>): ChipElement {
    selectType.subscribe({
      next: v => this.selectionType.next(v),
    });
    return this;
  }

  selectType(selectionType: Observable<string> | string): ChipElement {
    if (typeof selectionType === 'string') return this.selectTypeR(selectionType);
    if (isObservable(selectionType)) return this.selectTypeO(selectionType);
    throw new Error('given dir type is not support');
  }
  // direction

  directionValue = new BehaviorSubject<Direction>(Direction.Column);

  private directionR(dir: Direction): ChipElement {
    this.directionValue.next(dir);
    return this;
  }

  private directionO(dir: Observable<Direction>): ChipElement {
    dir.subscribe({
      next: v => this.directionValue.next(v),
    });
    return this;
  }

  direction(dir: Observable<Direction> | Direction): ChipElement {
    if (typeof dir === 'number') return this.directionR(dir);
    if (isObservable(dir)) return this.directionO(dir);
    throw new Error('given dir type is not support');
  }
}

const Chip = (children?: Observable<ChipModel[]> | ChipModel[]): ChipElement => {
  let element = new ChipElement();
  if (children) return element.children(children);
  return element;
};

export default Chip;
