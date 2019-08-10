import { ModalElement } from "../../form/elements/modal/ModalElement";
import IElement from "../../flmc-data-layer/FormController/IElement";
import { BehaviorSubject } from "rxjs";
import { filter, skip } from "rxjs/operators";
import { element } from "prop-types";
export const MODAL_SERVICE_NAME = "LiteRenderer:Services:ModalService";

type Options = { visibleHeader: boolean };
export class ModalService {
  modalElement: ModalElement;
  child = new BehaviorSubject<IElement | undefined>(undefined);
  isOpen = new BehaviorSubject<boolean>(false);
  visibleHeader = new BehaviorSubject<boolean>(true);

  queue: ([IElement, Options])[] = [];

  constructor(modalElement: ModalElement) {
    this.modalElement = modalElement
      .child(this.child)
      .visibleHeader(this.visibleHeader)
      .open(this.isOpen);

    this.isOpen
      .pipe(
        skip(1),
        filter(v => v === false)
      )
      .subscribe(v => {
        console.log(v);
        this.child.next(undefined);
        if (this.queue.length === 0) return;
        const [element, options] = this.queue[0];
        setTimeout(() => {
          this.open(element, options);
        }, 200); // a little bit of delay between each modal TODO: add value to flmc options
        this.queue = this.queue.slice(1, this.queue.length);
      });
  }

  enqueue(element: IElement, options: Options = { visibleHeader: true }) {
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
    this.isOpen.next(true);
  }
}
