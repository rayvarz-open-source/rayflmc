import * as React from 'react'
import Skeleton from './base/Skeleton.js';
import FormController from 'flmc-data-layer/src/FormController/FormController';
import FormView from './form/FormView.js';
import Button from './form/elements/button/ButtonElement.js';
import TextInput from './form/elements/input/text/TextInputElement.js';
import Container from './form/elements/container/ContainerElement.js';
import Label from './form/elements/label/LabelElement.js';

export {
  FormController, Button,
  TextInput,
  Container,
  Label
};

export type Props = { sampleController: FormController }

export default class FLMC extends React.Component<Props> {
  render() {
    const { sampleController } = this.props

    return (
      <Skeleton>
        <FormView controller={sampleController}/>
      </Skeleton>
    )
  }
}
