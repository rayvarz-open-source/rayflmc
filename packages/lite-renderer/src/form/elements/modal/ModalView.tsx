import {ModalElement} from './ModalElement';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {Direction} from '../container/ContainerDirection';
import IElement from 'flmc-data-layer/FormController/IElement';
import {MapToView} from '../ElementToViewMapper';
import Modal from '@material-ui/core/Modal';
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/Close';

type Props = {
  element: ModalElement,
  weight:number
}

export default function ModalView({element,weight}: Props) {
  const [modalStyle] = React.useState(getModalStyle);
  const [title, setTitle] = React.useState("");

  const [direction, setDirection] = React.useState(Direction.Column);
  const [children, setChildren] = React.useState<IElement[]>([]);
  const [openStatus, setOpenStatus] = React.useState(false);
  const [headerCloseIconVisibleSub, setHeaderCloseIconVisibleSub] = React.useState(false);
  const [headerVisibleSub, setHeaderVisibleSub] = React.useState(false);
  let onClose: VoidFunction = () => {
  };

  React.useEffect(() => {
    let titleSub = element.modalTitle.subscribe({
      next: (v) => setTitle(v)
    });
    let openStatusSub = element.modalOpenStatus.subscribe({

      next: (v) => setOpenStatus(v)
    });

    let headerCloseIconVisibleSub = element.modalIsHeaderCloseIconVisible.subscribe({

      next: (v) => setHeaderCloseIconVisibleSub(v)
    });
    let headerVisibleSub = element.modalIsHeaderVisible.subscribe({

      next: (v) => setHeaderVisibleSub(v)
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
      openStatusSub.unsubscribe();
      childrenSub.unsubscribe();
      callbackSub.unsubscribe();
      headerCloseIconVisibleSub.unsubscribe();
      headerVisibleSub.unsubscribe();
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
    <Modal open={openStatus} onClose={() => onClose()}>
      <Card style={modalStyle}>
        {headerVisibleSub && <CardHeader

           action={
             headerCloseIconVisibleSub && <IconButton aria-label="Settings"
                                                      onClick={()=>onClose()}>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}

        />}
        <CardContent>
        {renderChildren()}
        </CardContent>
      </Card>
    </Modal>
  )

}
