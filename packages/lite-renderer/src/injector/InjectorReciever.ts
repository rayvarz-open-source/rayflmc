import { Injector } from "./Injector";

export interface InjectorReciever {
  injector: Injector | null;
}

export function isInjectorReciever(value: any): value is InjectorReciever {
  return value.injector !== undefined;
}
