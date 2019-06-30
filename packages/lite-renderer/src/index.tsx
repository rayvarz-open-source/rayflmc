import * as React from 'react'
import Skeleton from './base/Skeleton.js';
import FormController from 'flmc-data-layer/src/FormController/FormController';
import FormView from './form/FormView.js';
import Button from './form/elements/button/ButtonElement.js';
import SelectBox from './form/elements/selectBox/SelectBoxElement';
import SelectBoxGroup from './form/elements/selectGroup/SelectGroupElement';
import TextInput from './form/elements/input/text/TextInputElement.js';
import Container from './form/elements/container/ContainerElement.js';
import Grid from './form/elements/grid/GridElement';
import Label from './form/elements/label/LabelElement.js';
import { Route } from './router/route.js';
import IDataController from 'flmc-data-layer/src/Base/IDataController';
import { createOnHashChangeFunction, changeRoute } from './router/router.js';
import { RootRouteCategory } from './router/route';
import {StyleType} from './form/elements/share/StyleType.js';
import {StyleColor} from './form/elements/share/StyleColor.js';
import {Alignment} from './form/elements/share/Alignment.js';
import {TextSize} from './form/elements/share/TextSize.js';
import {TextAlignment} from './form/elements/share/TextAlignment.js';
import {DisplayType} from './form/elements/share/DisplayType.js';
import {Size} from './form/elements/share/Size';
import {TextInputStyleType} from './form/elements/input/text/TextInputStyleType';
import {SelectBoxStyleType} from './form/elements/selectBox/SelectBoxStyleType';

export {
  FormController, Button,
  TextInput,
  SelectBox,
  Container,
  SelectBoxGroup,
  Label,
  StyleType,
  StyleColor,
  Grid,

  RootRouteCategory,
  Alignment,
  Size,
  TextSize,
  TextAlignment,
  DisplayType,
  TextInputStyleType,
  SelectBoxStyleType,
  changeRoute
};



export type Props = { routes: Route[] }
type States = {
  currentController: IDataController | null,
  currentRoute: Route | null,
}

export default class FLMC extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
      currentController: null,
      currentRoute: null
    }
  }

  componentDidMount() {
    let controllerBuilder = createOnHashChangeFunction(this.props.routes);
    window.onhashchange = () => {
      const [controller, route] = controllerBuilder()!;
      this.setState({ currentController: controller, currentRoute: route });
    };
    const [controller, route] = controllerBuilder()!;
    this.setState({ currentController: controller, currentRoute: route });
  }

  render() {
    const { currentController, currentRoute } = this.state

    return (
      <Skeleton currentRoute={currentRoute} routes={this.props.routes} >
        {currentController != null ? <FormView controller={this.state.currentController as FormController} /> : null}
      </Skeleton>
    )
  }
}
