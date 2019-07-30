import { Route } from "./route";

type OnRouteChanged = (route: Route | null) => void;

export interface RouteMiddleWares {
    afterRouteChanged?: OnRouteChanged[]
}
