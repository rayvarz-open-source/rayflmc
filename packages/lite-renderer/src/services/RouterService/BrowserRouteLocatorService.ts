import { Route as BrowserURLParser } from "../../router/router";
import { IPlatformRouteLocatorService, PlatformRouteInfo } from "./IPlatformRouteLocatorService";

const detectBackOrForward = function(onBackOrForward) {
  return function() {
    onBackOrForward();
  };
};

export class BrowserRouteLocatorService implements IPlatformRouteLocatorService {
  private listenders: (((info: PlatformRouteInfo) => void) | null)[] = [];

  private notifyListiners = (info: PlatformRouteInfo) =>
    this.listenders.forEach(cb => cb && cb(info));

  constructor() {
    window.addEventListener(
      "hashchange",
      detectBackOrForward(() => this.notifyListiners(this.getCurrentRouteInfo()))
    );
  }

  removeOnPlatformRouteChangedListener(callbackId: number) {
    this.listenders[callbackId] = null;
  }

  addOnPlatformRouteChangedListener(callback: (info: PlatformRouteInfo) => void): number {
    this.listenders.push(callback);
    return this.listenders.length - 1;
  }

  getCurrentRouteInfo(): PlatformRouteInfo {
    const route = new BrowserURLParser();
    route.__initFromUrl();
    return {
      path: route.path,
      params: route.params
    };
  }

  pushRoute(info: PlatformRouteInfo) {
    history.pushState("", info.title || "", `#${info.path}`);
  }
  pushReplaceRoute(info: PlatformRouteInfo) {
    history.replaceState("", info.title || "", `#${info.path}`);
  }
  pop() {
    history.go(-1);
  }
}
