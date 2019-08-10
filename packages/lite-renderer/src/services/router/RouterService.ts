import { Route } from "./route";
import IDataController from "../../flmc-data-layer/Base/IDataController";
import { createOnHashChangeFunction, changeWindowRoute } from "./router";

type Props = {
  routes: Route[];
};

export class RouterService {
  stack: [IDataController, Route, object][] = [];
  routes: Route[] = [];

  controllerBuilder: () => [IDataController, Route] | undefined;

  constructor({ routes }: Props) {
    this.routes = routes;
    this.controllerBuilder = createOnHashChangeFunction(routes);
    window.onhashchange = () => this.onHashChanged();
    this.onHashChanged();
  }

  onHashChanged() {
    let builder = this.controllerBuilder();
    if (builder == null) {
      changeWindowRoute("/", {});
      return;
    }
    const [controller, route] = builder;
    
  }

  push(path: string | Route, params?: object) {
      changeWindowRoute(path, params);
  }

  pushReplace(path: string | Route, params?: object) {
      this.stack.pop();
      changeWindowRoute(path, params, true);
  }

  pop() {
    this.stack.pop();
    if (this.stack.length === 0)
        throw new Error("can't go back any further.history is empty");
    let [controller, route, params] = this.stack[this.stack.length - 1];
    changeWindowRoute(route.path, params, false);
  }

  popUntil(path: string | Route) {
      this.stack.pop();
      if (this.stack.length == 0)
        throw new Error(`no open path found for ${path}`);
      if ()
  }
}

/*


    window.onhashchange = () => {
      
    };
    const [controller, route] = controllerBuilder()!;
    this.setState({ currentController: controller, currentRoute: route, formKey: this.state.formKey + 1 }, () =>
      this.handleOnAfterRouteChangedMiddlewares()
    );
    */
