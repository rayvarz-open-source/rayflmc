import * as React from 'react'
import Skeleton from './base/Skeleton.js';
import FormController from 'flmc-data-layer/src/FormController/FormController';
import FormView from './form/FormView.js';
import Button from './form/elements/button/ButtonElement.js';
import TextInput from './form/elements/input/text/TextInputElement.js';
import Container from './form/elements/container/ContainerElement.js';
import Label from './form/elements/label/LabelElement.js';
import { Route } from './router/route.js';
import IDataController from 'flmc-data-layer/src/Base/IDataController';
import { createOnHashChangeFunction } from './router/router.js';
import { RootRouteCategory } from './router/route';

export {
  FormController, Button,
  TextInput,
  Container,
  Label,

  RootRouteCategory
};



export type Props = { routes: Route[] }
type States = {
  currentController: IDataController | null
}

export default class FLMC extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
       currentController: null
    }
  }

  componentDidMount() {
    let controllerBuilder = createOnHashChangeFunction(this.props.routes);
    window.onhashchange = () => {
      this.setState({currentController: controllerBuilder()});
    };
    this.setState({currentController: controllerBuilder()});
  }

  render() {
    const { currentController } = this.state

    return (
      <Skeleton>
        {currentController != null ? <FormView controller={this.state.currentController as FormController}/> : null}
      </Skeleton>
    )
  }
}
