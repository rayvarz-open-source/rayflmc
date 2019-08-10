import { Injector } from "./Injector";

export interface InjectorReciever {
  inject(injector: Injector);
}

export function isInjectorReciever(value: any): value is InjectorReciever {
  return value.inject != null && typeof value.inject == "function";
}
