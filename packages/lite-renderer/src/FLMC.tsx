import { Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import * as React from "react";
import { FormView } from ".";
import IDataController from "./flmc-data-layer/Base/IDataController";
import { FLMCFormController } from "./FLMCFormController";
import { CustomElementContext, CustomElementMapper } from "./form/elements/CustomElementsContext";
import { ModalElement } from "./form/elements/modal/ModalElement";
import { InjectorContainer } from "./injector/InjectorContainer";
import { InjectorContext } from "./injector/InjectorContext";
import { RouteMiddleWares } from "./router/middleware";
import { Route } from "./router/route";
import { areRoutesValid as validateRoutes, oldChangeRoute } from "./router/router";
import { ModalProvider } from "./services/ModalService/ModalProvider";
import { ModalService, MODAL_SERVICE_NAME } from "./services/ModalService/ModalService";
import { BrowserRouteLocatorService } from "./services/RouterService/BrowserRouteLocatorService";
import { PLATFORM_ROUTE_LOCATOR_SERVICE } from "./services/RouterService/IPlatformRouteLocatorService";
import { RouterService, RouterStackItem, ROUTER_SERVICE } from "./services/RouterService/RouterService";
import { SnackService, SNACK_SERVICE_NAME } from "./services/SnackService";
import DefaultSkeleton from "./skeleton/default-skeleton/DefaultSkeleton";
import { RouteToFormView, Skeletons } from "./skeleton/RouteToFormView";

export type ServiceRegisterer = (container: InjectorContainer) => void;

export type Props = {
  routes: Route[];
  routerMiddlewares?: RouteMiddleWares;
  theme?: Theme;
  skeletons?: Skeletons;
  customElementMappers?: CustomElementMapper[];
  serviceRegisterer?: ServiceRegisterer;
};
type States = {
  currentController: IDataController | null;
  currentRoute: Route | null;
  formKey: number;
  container: InjectorContainer;
  modalElement: ModalElement;
};

export default class FLMC extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      container: new InjectorContainer(),
      currentController: null,
      currentRoute: null,
      formKey: 0,
      modalElement: new ModalElement()
    };

    // validate routes:
    validateRoutes(this.props.routes);
  }

  handleOnAfterRouteChangedMiddlewares() {
    if (this.props.routerMiddlewares == null) return;
    (this.props.routerMiddlewares.afterRouteChanged || []).forEach(middleware => {
      middleware(this.state.currentRoute, this.state.container.injector);
    });
  }

  setupCoreServices() {
    const container = this.state.container;
    container.addSingleton({
      serviceName: SNACK_SERVICE_NAME,
      builder: () => new SnackService()
    });
    container.addSingleton({
      serviceName: MODAL_SERVICE_NAME,
      builder: () => new ModalService(this.state.modalElement)
    });
    container.addSingleton({
      serviceName: PLATFORM_ROUTE_LOCATOR_SERVICE,
      builder: () => new BrowserRouteLocatorService(),
      isLazyBuilder: false
    });
    container.addSingleton({
      serviceName: ROUTER_SERVICE,
      builder: () =>
        new RouterService({ routes: this.props.routes, onRouteChangedListener: info => this.onRouteChanged(info) }),
      isLazyBuilder: false
    });
  }

  onRouteChanged(info: RouterStackItem) {
    const [controller, route] = info;
    this.setState(
      {
        currentController: controller,
        currentRoute: route,
        formKey: this.state.formKey + 1
      },
      () => this.handleOnAfterRouteChangedMiddlewares()
    );
  }

  componentDidMount() {
    this.setupCoreServices();
    const router =  this.state.container.injector.inject<RouterService>(ROUTER_SERVICE);
    oldChangeRoute.logic = (path: string | Route, params?: object) => router!.push(path, params);
    if (this.props.serviceRegisterer != null) this.props.serviceRegisterer(this.state.container);
  }

  renderView() {
    let skeletons: Skeletons = {
      default: route => (
        <DefaultSkeleton currentRoute={route.currentRoute} routes={route.routes}>
          {route.controller != null ? <FormView controller={route.controller!} key={route.formKey} /> : null}
        </DefaultSkeleton>
      ),
      ...(this.props.skeletons || {})
    };

    return (
      <RouteToFormView
        skeletons={skeletons}
        currentRoute={this.state.currentRoute}
        controller={this.state.currentController as FLMCFormController}
        formKey={`${this.state.formKey}_FormView`}
        routes={this.props.routes}
      />
    );
  }

  render() {
    let view = (
      <ModalProvider modalElement={this.state.modalElement}>
        <SnackbarProvider hideIconVariant={true} maxSnack={2}>
          {/* TODO: set maxSnack from options */}
          <InjectorContext.Provider value={this.state.container}>
            <CustomElementContext.Provider value={this.props.customElementMappers || []}>
              {this.renderView()}
            </CustomElementContext.Provider>
          </InjectorContext.Provider>
        </SnackbarProvider>
      </ModalProvider>
    );

    if (this.props.theme == null) return view;
    else return <ThemeProvider theme={this.props.theme}>{view}</ThemeProvider>;
  }
}
