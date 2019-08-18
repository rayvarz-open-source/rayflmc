import { BehaviorSubject } from "rxjs";
import { filter, skip } from "rxjs/operators";
import IElement from "../../flmc-data-layer/FormController/IElement";
import { ModalElement } from "../../form/elements/modal/ModalElement";
import { MaxHeight, MaxWidth, MinHeight, MinWidth } from "../../form/elements/modal/ModalElementAttributes";
export const MODAL_SERVICE_NAME = "LiteRenderer:Services:ModalService";

type Options = {
  visibleHeader: boolean;
  maxWidth: MaxWidth;
  minWidth: MinWidth;
  maxHeight: MaxHeight;
  minHeight: MinHeight;
  noAutoClose: boolean;
  noPadding: boolean;
};
export class ModalService {
  modalElement: ModalElement;
  child = new BehaviorSubject<IElement | undefined>(undefined);
  isOpen = new BehaviorSubject<boolean>(false);
  visibleHeader = new BehaviorSubject<boolean>(true);
  maxWidth = new BehaviorSubject<MaxWidth>(undefined);
  minWidth = new BehaviorSubject<MinWidth>(undefined);
  maxHeight = new BehaviorSubject<MaxHeight>(undefined);
  minHeight = new BehaviorSubject<MinHeight>(undefined);
  noAutoClose = new BehaviorSubject<boolean>(true);
  noPadding = new BehaviorSubject<boolean>(false);

  queue: ([IElement, Options])[] = [];

  constructor(modalElement: ModalElement) {
    this.modalElement = modalElement
      .child(this.child)
      .maxWidth(this.maxWidth)
      .minWidth(this.minWidth)
      .maxHeight(this.maxHeight)
      .minHeight(this.minHeight)
      .noBackdropClickClose(this.noAutoClose)
      .noBackdropClickClose(this.noAutoClose)
      .noPadding(this.noPadding)
      .visibleHeader(this.visibleHeader)
      .open(this.isOpen);

    this.isOpen
      .pipe(
        skip(1),
        filter(v => v === false)
      )
      .subscribe(v => {
        this.child.next(undefined);
        if (this.queue.length === 0) return;
        const [element, options] = this.queue[0];
        setTimeout(() => {
          this.open(element, options);
        }, 200); // a little bit of delay between each modal TODO: add value to flmc options
        this.queue = this.queue.slice(1, this.queue.length);
      });
  }

  enqueue(
    element: IElement,
    options: Options = {
      visibleHeader: true,
      maxHeight: undefined,
      maxWidth: undefined,
      minHeight: undefined,
      minWidth: undefined,
      noAutoClose: true,
      noPadding: false
    }
  ) {
    if (this.isOpen.value === false && this.queue.length === 0) {
      this.open(element, options);
      return;
    }

    this.queue.push([element, options]);
  }

  closeCurrent() {
    this.isOpen.next(false);
  }

  private open(element: IElement, options: Options) {
    this.child.next(element);
    this.visibleHeader.next(options.visibleHeader);
    this.maxHeight.next(options.maxHeight);
    this.minHeight.next(options.minHeight);
    this.maxWidth.next(options.maxWidth);
    this.minWidth.next(options.minWidth);
    this.noAutoClose.next(options.noAutoClose);
    this.noPadding.next(options.noPadding);
    this.isOpen.next(true);
  }
}
