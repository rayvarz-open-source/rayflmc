import {BehaviorSubject, isObservable, Observable} from "rxjs";
import {VisibilityType} from "../share/VisibilityType";
import {CSSProperties} from "react";

export class BaseElement {
  elementVisibility = new BehaviorSubject<string>("show");

  showStyle: CSSProperties = {
    visibility: 'visible'
  }
  hiddenStyle: CSSProperties = {
    visibility: 'hidden'
  }
  goneStyle: CSSProperties = {
    display: 'none'
  }
  getWeightStyle(weight): CSSProperties{
    return {"flexGrow":weight};
  }
  getVisibilityStyle(type): CSSProperties{
    switch (type) {
      case VisibilityType.Gone:
        return this.goneStyle;
      case VisibilityType.Hidden:
        return this.hiddenStyle;
      default:
        return this.showStyle;
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
