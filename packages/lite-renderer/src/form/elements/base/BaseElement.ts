import { CSSProperties } from "react";
import { BehaviorSubject, isObservable, Observable } from "rxjs";
import { VisibilityType } from "../share/VisibilityType";

export type Visibility = "show" | "gone" | "hidden" | VisibilityType;

export class BaseElement {
  elementVisibilityContainer = new BehaviorSubject<Visibility>("show");

  showStyle: CSSProperties = {
    visibility: "visible"
  };
  hiddenStyle: CSSProperties = {
    visibility: "hidden"
  };
  goneStyle: CSSProperties = {
    display: "none"
  };
  getWeightStyle(weight: number): CSSProperties {
    return weight === 0 ? { flexGrow: weight } : { flex: weight };
  }
  getVisibilityStyle(type: Visibility): CSSProperties {
    switch (type) {
      case VisibilityType.Gone:
      case "gone":
        return this.goneStyle;
      case VisibilityType.Hidden:
      case "hidden":
        return this.hiddenStyle;
      default:
        return this.showStyle;
    }
  }

  private visibilityR(visibilityType: Visibility) {
    this.elementVisibilityContainer.next(visibilityType);
    return this;
  }

  private visibilityO(visibilityType: Observable<Visibility>) {
    visibilityType.subscribe({
      next: v => this.elementVisibilityContainer.next(v)
    });
    return this;
  }

  visibility(visibilityType: Observable<Visibility> | Visibility) {
    if (
      visibilityType === "show" ||
      visibilityType === "hidden" ||
      visibilityType === "gone"
    )
      return this.visibilityR(visibilityType);
    if (isObservable(visibilityType)) return this.visibilityO(visibilityType);
    throw new Error("given visibility is not supported");
  }
}
