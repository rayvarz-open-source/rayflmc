import IDataController from "../../flmc-data-layer/Base/IDataController";
import { Injector } from "../../injector/Injector";
import { InjectorReciever } from "../../injector/InjectorReciever";
import { Route } from "../../router/route";
import { IPlatformRouteLocatorService, PLATFORM_ROUTE_LOCATOR_SERVICE } from "./IPlatformRouteLocatorService";

type Props = {
  routes: Route[];
  onRouteChangedListener: (routeItem: RouterStackItem) => void
};

export type RouterStackItem = [IDataController, Route, object];

export class RouterService implements InjectorReciever {
  
  private onRouteChangedListener: (routeItem: RouterStackItem) => void;
  private stack: RouterStackItem[] = [];
  private routes: Route[];

  private createNewPath(path: string | Route, params?: object): RouterStackItem {
    const pathString = typeof path === "string" ? path : path.path;

    const route = this.routes.find(r => r.path === pathString);
    if (route == null) throw new Error(`cannot find path:${path}- params: ${params}`);

    const controller = route.builder(pathString, params);

    const stackItem: RouterStackItem = [controller, route, params || {}];
    this.stack.push(stackItem);

    return stackItem;
  }

  constructor({ routes, onRouteChangedListener }: Props) {
    this.routes = routes;
    this.onRouteChangedListener = onRouteChangedListener;
  }

  routeLocator: IPlatformRouteLocatorService | null = null;

  inject(injector: Injector) {
    this.routeLocator = injector.inject<IPlatformRouteLocatorService>(PLATFORM_ROUTE_LOCATOR_SERVICE);
  }

  push(path: string | Route, params?: object) {
    const item = this.createNewPath(path, params);
    this.routeLocator!.pushRoute({ path: typeof path === "string" ? path : path.path, params: params || {} });
    this.onRouteChangedListener(item);
  }

  pushReplace(path: string | Route, params?: object) {
    this.stack.pop();
    const item = this.createNewPath(path, params);
    this.routeLocator!.pushReplaceRoute({ path: typeof path === "string" ? path : path.path, params: params || {} });
    this.onRouteChangedListener(item);
  }

  pop() {
    if (this.stack.length === 0) {
      console.warn("can't go back any further.history is empty");
      return;
    }
    this.stack.pop();
    this.routeLocator!.pop();
    const item = this.stack[this.stack.length - 1];
    this.onRouteChangedListener(item);
  }
}
