import { Route } from "./route";
import { Injector } from "../injector/Injector";

type OnRouteChanged = (route: Route | null, injector: Injector) => void;

export interface RouteMiddleWares {
  afterRouteChanged?: OnRouteChanged[];
}
