import {ModalElement} from './ModalElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {Direction} from '../share/Direction';
import IElement from 'flmc-data-layer/src/FormController/IElement';
import {MapToView} from '../ElementToViewMapper';
import Modal from '@material-ui/core/Modal';
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

type Props = {
  element: ModalElement
}

export default function ModalView({element}: Props) {
  const [modalStyle] = React.useState(getModalStyle);

  const [direction, setDirection] = React.useState(Direction.Column);
  const [children, setChildren] = React.useState<IElement[]>([]);
  const [disabled, setDisabled] = React.useState(false);
  let onClose: VoidFunction = () => {
  };

  React.useEffect(() => {
    let disabledSub = element.buttonIsDisabled.subscribe({

      next: (v) => setDisabled(v)
    });
    let dirSub = element.directionValue.subscribe({
      next: (v) => {
        setDirection(v)
      }
    });

    let childrenSub = element.childrenContainer.subscribe({
      next: (v) => setChildren(v)
    });
    let callbackSub = element.onCloseCallBack.subscribe({
      next: (v) => onClose = v == null ? () => {
      } : v
    });
    return () => {
      dirSub.unsubscribe();
      disabledSub.unsubscribe();
      childrenSub.unsubscribe();
      callbackSub.unsubscribe();
    }

  })



  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  function renderChildren() {
    return children.map((v, i) => <MapToView element={v} key={`${v.type}_${i}`}/>);
  }

  return (
    <Modal open={disabled} onClose={() => onClose()}>
      <Card style={modalStyle}>
        <CardContent>
        {renderChildren()}
        </CardContent>
      </Card>
    </Modal>
  )

}
