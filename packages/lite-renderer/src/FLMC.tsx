import { Route } from "./router/route";
import { RouteMiddleWares } from "./router/middleware";
import { Theme } from "@material-ui/core";
import * as React from "react";
import { createOnHashChangeFunction } from "./router/router";
import { ThemeProvider } from "@material-ui/styles";
import IDataController from "./flmc-data-layer/Base/IDataController";
import { Skeletons, RouteToFormView } from "./skeleton/RouteToFormView";
import DefaultSkeleton from "./skeleton/default-skeleton/DefaultSkeleton";
import { FormController, FormView } from ".";
import { CustomElementMapper, CustomElementContext } from "./form/elements/CustomElementsContext";

export type Props = {
  routes: Route[];
  routerMiddlewares?: RouteMiddleWares;
  theme?: Theme;
  skeletons?: Skeletons;
  customElementMappers?: CustomElementMapper[];
};
type States = {
  currentController: IDataController | null;
  currentRoute: Route | null;
  formKey: number;
};

export default class FLMC extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentController: null,
      currentRoute: null,
      formKey: 0
    };
  }

  handleOnAfterRouteChangedMiddlewares() {
    if (this.props.routerMiddlewares == null) return;
    (this.props.routerMiddlewares.afterRouteChanged || []).forEach(middleware => {
      middleware(this.state.currentRoute);
    });
  }

  componentDidMount() {
    let controllerBuilder = createOnHashChangeFunction(this.props.routes);
    window.onhashchange = () => {
      const [controller, route] = controllerBuilder()!;
      this.setState({ currentController: controller, currentRoute: route, formKey: this.state.formKey + 1 }, () =>
        this.handleOnAfterRouteChangedMiddlewares()
      );
    };
    const [controller, route] = controllerBuilder()!;
    this.setState({ currentController: controller, currentRoute: route, formKey: this.state.formKey + 1 }, () =>
      this.handleOnAfterRouteChangedMiddlewares()
    );
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
        controller={this.state.currentController as FormController}
        formKey={`${this.state.formKey}_FormView`}
        routes={this.props.routes}
      />
    );
  }

  render() {
    let view = (
      <CustomElementContext.Provider value={this.props.customElementMappers || []}>
        {this.renderView()}
      </CustomElementContext.Provider>
    );

    if (this.props.theme == null) return view;
    else return <ThemeProvider theme={this.props.theme}>{view}</ThemeProvider>;
  }
}
