import IElement, { ValidationResult, areElements } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { Direction } from '../share/Direction';

export class ModalElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementType.MODAL;
  }

  childrenContainer!: BehaviorSubject<IElement[]>;
  modalOpenStatus = new BehaviorSubject<boolean>(false);
  modalIsHeaderVisible = new BehaviorSubject<boolean>(false);
  modalIsHeaderCloseIconVisible = new BehaviorSubject<boolean>(false);
  onCloseCallBack = new BehaviorSubject<VoidFunction | null>(null);
  modalTitle = new BehaviorSubject<string>("");

  validate(): ValidationResult {
    return new ValidationResult(this.childrenContainer.value.map(i => i.validate().isValid).reduce((p, c) => p && c));
  }
  private onCloseR(action: VoidFunction): ModalElement {
    this.onCloseCallBack.next(action);
    return this;
  }

  private onCloseO(action: Observable<VoidFunction>): ModalElement {
    action.subscribe({
      next: v => this.onCloseCallBack.next(v),
    });
    return this;
  }

  onClose(action: Observable<VoidFunction> | VoidFunction): ModalElement {
    if (typeof action === 'function') return this.onCloseR(action);
    if (isObservable(action)) return this.onCloseO(action);
    throw new Error('given action type is not supported');
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

  private headerIconVisibilityR(isDisabled: boolean): ModalElement {
    this.modalIsHeaderCloseIconVisible.next(isDisabled);
    return this;
  }
  private headerIconVisibilityO(isDisabled: Observable<boolean>): ModalElement {
    isDisabled.subscribe({
      next: v => this.modalIsHeaderCloseIconVisible.next(v),
    });
    return this;
  }

  headerIconVisibility(headerIconVisibility: Observable<boolean> | boolean): ModalElement {
    if (typeof headerIconVisibility === 'boolean') return this.headerIconVisibilityR(headerIconVisibility);
    if (isObservable(headerIconVisibility)) return this.headerIconVisibilityO(headerIconVisibility);
    throw new Error('given isDisabled is not supported');
  }

  private headerVisibilityR(isDisabled: boolean): ModalElement {
    this.modalIsHeaderVisible.next(isDisabled);
    return this;
  }
  private headerVisibilityO(isDisabled: Observable<boolean>): ModalElement {
    isDisabled.subscribe({
      next: v => this.modalIsHeaderVisible.next(v),
    });
    return this;
  }

  headerVisibility(headerIconVisibility: Observable<boolean> | boolean): ModalElement {
    if (typeof headerIconVisibility === 'boolean') return this.headerVisibilityR(headerIconVisibility);
    if (isObservable(headerIconVisibility)) return this.headerVisibilityO(headerIconVisibility);
    throw new Error('given isDisabled is not supported');
  }


  private openStatusR(isDisabled: boolean): ModalElement {
    this.modalOpenStatus.next(isDisabled);
    return this;
  }
  private openStatusO(isDisabled: Observable<boolean>): ModalElement {
    isDisabled.subscribe({
      next: v => this.modalOpenStatus.next(v),
    });
    return this;
  }

  openStatus(openStatus: Observable<boolean> | boolean): ModalElement {
    if (typeof openStatus === 'boolean') return this.openStatusR(openStatus);
    if (isObservable(openStatus)) return this.openStatusO(openStatus);
    throw new Error('given isDisabled is not supported');
  }

  private titleR(title: string): ModalElement {
    this.modalTitle.next(title);
    return this;
  }

  private titleO(title: Observable<string>): ModalElement {
    title.subscribe({
      next: v => this.modalTitle.next(v),
    });
    return this;
  }

  title(title: Observable<string> | string): ModalElement {
    if (typeof title === 'string') return this.titleR(title);
    if (isObservable(title)) return this.titleO(title);
    throw new Error('given title type is not supported');
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

const Modal = (children?: Observable<IElement[]> | IElement[]): ModalElement => {
  let element = new ModalElement();
  if (children) return element.children(children);
  return element;
};

export default Modal;
