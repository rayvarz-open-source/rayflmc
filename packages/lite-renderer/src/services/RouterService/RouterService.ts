import IDataController from "../../flmc-data-layer/Base/IDataController";
import { Injector } from "../../injector/Injector";
import { InjectorReciever } from "../../injector/InjectorReciever";
import { Route } from "../../router/route";
import { IPlatformRouteLocatorService, PLATFORM_ROUTE_LOCATOR_SERVICE } from "./IPlatformRouteLocatorService";

type Props = {
  routes: Route[];
  onRouteChangedListener: (routeItem: RouterStackItem) => void;
};

export type RouterStackItem = [IDataController, Route, object];

export const ROUTER_SERVICE = "LiteRenderer:Services:RouterService";
export const notFoundPath = "/404";
export const homePath = "/";

export class RouterService implements InjectorReciever {
  private onRouteChangedListener: (routeItem: RouterStackItem) => void;
  private stack: RouterStackItem[] = [];
  private routes: Route[];

  // returns [item, isFailed]
  private createNewPath(path: string | Route, params?: object): [RouterStackItem, boolean] {
    const pathString = typeof path === "string" ? path : path.path;

    const route = this.routes.find(r => r.path === pathString);
    if (route == null) {
      // has 404 route ?
      //   const notFoundRoute = this.routes.find(r => r.path === notFoundPath);
      //   const [item] = notFoundRoute != null ? this.createNewPath(notFoundPath, {}) : this.createNewPath(homePath, {});
      const [item] = this.createNewPath(homePath, {});
      return [item, true];
    }

    const controller = route.builder(pathString, params);

    const stackItem: RouterStackItem = [controller, route, params || {}];

    this.stack.push(stackItem);

    return [stackItem, false];
  }

  constructor({ routes, onRouteChangedListener }: Props) {
    this.routes = routes;
    this.onRouteChangedListener = onRouteChangedListener;
  }

  routeLocator: IPlatformRouteLocatorService | null = null;

  inject(injector: Injector) {
    this.routeLocator = injector.inject<IPlatformRouteLocatorService>(PLATFORM_ROUTE_LOCATOR_SERVICE);

    this.routeLocator!.addOnPlatformRouteChangedListener(info => {
      // check if last path is equal to current path then it's a pop else is a push
      if (this.stack.length < 2 || this.stack[this.stack.length - 2][1].path !== info.path) {
        this.push(info.path, info.params, false);
      } else {
        this.pop(false);
      }
    });

    // setup init route
    const initRoute = this.routeLocator!.getCurrentRouteInfo();
    this.push(initRoute.path, initRoute.params);
  }

  push(path: string | Route, params?: object, notifyLocator: boolean = true) {
    const [item, isFailed] = this.createNewPath(path, params);
    if (isFailed || notifyLocator) this.routeLocator!.pushRoute({ path: item[1].path, params: item[2] });
    this.onRouteChangedListener(item);
  }

  pushReplace(path: string | Route, params?: object) {
    this.stack.pop();
    const [item, isFailed] = this.createNewPath(path, params);
    if (!isFailed) this.routeLocator!.pushReplaceRoute({ path: item[1].path, params: item[2] });
    this.onRouteChangedListener(item);
  }

  pop(notifyLocator: boolean = true) {
    if (this.stack.length === 0) {
      console.warn("can't go back any further.history is empty");
      return;
    }
    this.stack.pop();
    if (notifyLocator) this.routeLocator!.pop();
    const item = this.stack[this.stack.length - 1];
    this.onRouteChangedListener(item);
  }
}
