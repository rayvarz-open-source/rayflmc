import { CSSProperties } from "react";
import { BehaviorSubject, isObservable, Observable } from "rxjs";
import { VisibilityType } from "../share/VisibilityType";

export type Visibility = "show" | "gone" | "hidden" | VisibilityType;
type NativeProps = { [key: string]: any };

export class BaseElement {
  elementVisibilityContainer = new BehaviorSubject<Visibility>("show");

  showStyle: CSSProperties = {
    visibility: "visible",
  };
  hiddenStyle: CSSProperties = {
    visibility: "hidden",
  };
  goneStyle: CSSProperties = {
    display: "none",
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
      next: (v) => this.elementVisibilityContainer.next(v),
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
  private nativePropsR(nativePropsType: NativeProps) {
    this.nativePropsContainer.next(nativePropsType);
    return this;
  }

  private nativePropsO(nativePropsType: Observable<NativeProps>) {
    nativePropsType.subscribe({
      next: (v) => this.nativePropsContainer.next(v),
    });
    return this;
  }
  nativePropsContainer = new BehaviorSubject<NativeProps>({});

  nativeProps(nativePropsType: Observable<NativeProps> | NativeProps) {
    if (isObservable(nativePropsType))
      return this.nativePropsO(nativePropsType);
    else return this.nativePropsR(nativePropsType);
    throw new Error("given visibility is not supported");
  }

  metaContainer: any;

  meta(value: any) {
    this.metaContainer = value;
    return this;
  }
}
