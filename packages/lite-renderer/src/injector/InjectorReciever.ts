import { Injector } from "./Injector";

export interface InjectorReciever {
  injector: Injector | null;

  inject();
}

export function isInjectorReciever(value: any): value is InjectorReciever {
  return value.injector !== undefined && (value.inject != null && typeof value.inject == "function");
}
