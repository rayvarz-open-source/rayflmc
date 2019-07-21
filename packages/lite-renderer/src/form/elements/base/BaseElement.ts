import {BehaviorSubject, isObservable, Observable} from "rxjs";
import {VisibilityType} from "../share/VisibilityType";

export class BaseElement {
  elementVisibility = new BehaviorSubject<string>("show");

  showStyle = {
    visibility: 'visible'
  }
  hiddenStyle = {
    visibility: 'hidden'
  }
  goneStyle = {
    display: 'none'
  }

  setStyleBasedOnVisibilityType(type) {
    switch (type) {
      case VisibilityType.Gone:
        return this.goneStyle;
        break;
      case VisibilityType.Hidden:
        return this.hiddenStyle;
        break;
      case VisibilityType.Show:
        return this.showStyle;
        break

    }
  }

  private visibilityR(visibilityType: string) {
    this.elementVisibility.next(visibilityType);
    return this;
  }

  private visibilityO(visibilityType: Observable<string>) {
    visibilityType.subscribe({
      next: v => this.elementVisibility.next(v),
    });
    return this;
  }

  visibility(visibilityType: Observable<string> | string) {
    if (typeof visibilityType === 'string') return this.visibilityR(visibilityType);
    if (isObservable(visibilityType)) return this.visibilityO(visibilityType);
    throw new Error('given isDisabled is not supported');
  }
}
