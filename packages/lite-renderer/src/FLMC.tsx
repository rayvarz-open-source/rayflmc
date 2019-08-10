import { Route } from "./services/router/route";
import { RouteMiddleWares } from "./services/router/middleware";
import { Theme } from "@material-ui/core";
import * as React from "react";
import { createOnHashChangeFunction, changeRoute, areRoutesValid as validateRoutes } from "./services/router/router";
import { ThemeProvider } from "@material-ui/styles";
import IDataController from "./flmc-data-layer/Base/IDataController";
import { Skeletons, RouteToFormView } from "./skeleton/RouteToFormView";
import DefaultSkeleton from "./skeleton/default-skeleton/DefaultSkeleton";
import { FormView } from ".";
import { CustomElementMapper, CustomElementContext } from "./form/elements/CustomElementsContext";
import { InjectorContainer } from "./injector/InjectorContainer";
import { InjectorContext } from "./injector/InjectorContext";
import { FLMCFormController } from "./FLMCFormController";
import { SnackbarProvider } from "notistack";
import { SNACK_SERVICE_NAME, SnackService } from "./services/SnackService";

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
};

export default class FLMC extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      container: new InjectorContainer(),
      currentController: null,
      currentRoute: null,
      formKey: 0
    };

    // validate routes:
    validateRoutes(this.props.routes);
  }

  handleOnAfterRouteChangedMiddlewares() {
    if (this.props.routerMiddlewares == null) return;
    (this.props.routerMiddlewares.afterRouteChanged || []).forEach(middleware => {
      middleware(this.state.currentRoute);
    });
  }

  setupCoreServices() {
    const container = this.state.container;
    container.addSignleton({
      serviceName: SNACK_SERVICE_NAME,
      builder: () => new SnackService()
    });
  }

  componentDidMount() {
    this.setupCoreServices();
    // register services in contaienr
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
      <SnackbarProvider maxSnack={2}>
        {/* set maxSnack from options */}
        <InjectorContext.Provider value={this.state.container}>
          <CustomElementContext.Provider value={this.props.customElementMappers || []}>
            {this.renderView()}
          </CustomElementContext.Provider>
        </InjectorContext.Provider>
      </SnackbarProvider>
    );

    if (this.props.theme == null) return view;
    else return <ThemeProvider theme={this.props.theme}>{view}</ThemeProvider>;
  }
}
