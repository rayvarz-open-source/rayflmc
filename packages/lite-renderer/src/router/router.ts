import IDataController from "../flmc-data-layer/Base/IDataController";
import { Route as FRoute } from "./route";

interface IControllerBuilder {
  (path: string, params: object): object;
}

type Props = {
  path: string;
  params: object;
  hash: string;
  controller: IControllerBuilder;
};

class Route {
  //props
  path: string;
  params: object;
  hash: string;
  //lifecycle methods
  controller: IControllerBuilder;

  constructor(props?: Props) {
    if (props != null) {
      this.path = props.path;
      this.params = props.params;
      this.hash = props.hash;
      this.controller = props.controller;
    }
  }

  parse(hash: string): [string, object] {
    let parts = hash.substring(2).split("/{");
    let path = "";
    let params = "{}";
    if (parts.length == 1) {
      path = parts[0];
    } else {
      path = parts[0];
      params = "{" + parts.slice(1, parts.length).join("/{");
    }
    params = decodeURIComponent(params);
    let paramsObj = params.trim() === "" ? {} : JSON.parse(params);
    return ["/" + path, paramsObj];
  }

  __initFromUrl() {
    try {
      this.hash = window.location.hash;
      let [path, params] = this.parse(this.hash);
      this.path = path;
      this.params = params;
    } catch (err) {
      // this.changeLocation('404')
      changeRoute("/", {});
    }
  }

  __setHash(hash: string) {
    this.hash = hash;

    let [path, params] = this.parse(this.hash);
    this.path = path;
    this.params = params;
  }
}

function onRoutChange(props?: Props): Route {
  var route = new Route(props);
  if (props == null) {
    route.__initFromUrl();
  } else {
    if (props.hash != undefined) {
      route.__setHash(props.hash);
    }
    if (props.path != undefined) {
      route.path = props.path;
    }
    if (props.params != undefined) {
      route.params = props.params;
    }
  }
  return route;
  // routeList.forEach(element => {
  //   if(element.path == route.path){
  //     element.controller(element.path,route.params);
  //   }
  // });
}

export const createOnHashChangeFunction = (routes: FRoute[]) => {
  return (): [IDataController, FRoute] | undefined => {
    var currentRoute = onRoutChange();
    for (let route of routes) {
      if (route.path == currentRoute.path || (route.path == "/" && !currentRoute.path))
        return [route.builder(route.path, currentRoute.params), route as FRoute];
    }
    changeRoute("/", {});
    return undefined;
  };
};

const changeHash = (hash: string) => {
  if (history.pushState) {
    history.pushState(null, "", `#${hash}`);
  } else {
    location.hash = `#${hash}`;
  }
  // changing history on hash doesn't trigger onhashchnage so we need to trigger it manually
  (window as any).onhashchange();
};

export const changeRoute = (path: string | Route, params?: object) => {
  console.warn("changeRoute is deprecated and soon will be removed. please use routerService instead.");
  
  let _path = typeof path == "string" ? path : path.path;

  let hash = `${_path}/${JSON.stringify(params || {})}`;
  changeHash(hash);
};

export function areRoutesValid(routes: FRoute[]) {
  for (let route of routes)
    if (
      !route.path.startsWith("/") &&
      route.path.substring(1) === "/" &&
      route.path.endsWith("/") &&
      route.path.includes("/{")
    )
      throw new Error(`invalid route path: ${route.path}`);
}
