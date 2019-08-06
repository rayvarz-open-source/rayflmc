import { ModalElement } from "./ModalElement";
import * as React from "react";
import { Child, Open, VisibileHeader, VisibileHeaderCloseButton, Title } from "./ModalElementAttributes";
import { Visibility } from "../base/BaseElement";
import { Modal, Card, CardHeader, IconButton, CardContent } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import MoreVertIcon from "@material-ui/icons/Close";
import { MapToView } from "../ElementToViewMapper";
import IElement from "../../../flmc-data-layer/FormController/IElement";

type Props = {
  element: ModalElement;
  weight: number;
};

export default function ModalView({ element }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [child, setChild] = React.useState<Child>(undefined);
  const [open, setOpen] = React.useState<Open>(false);
  const [visibileHeader, setVisibileHeader] = React.useState<VisibileHeader>(true);
  const [visibileHeaderCloseButton, setVisibileHeaderCloseButton] = React.useState<VisibileHeaderCloseButton>(true);
  const [title, setTitle] = React.useState<Title>(undefined);
  const [noPadding, setNoPadding] = React.useState<NoPadding>(false);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  React.useEffect(() => {
    let childSub = element.childContainer.subscribe({ next: v => setChild(v) });
    let openSub = element.openContainer.subscribe({ next: v => setOpen(v) });
    let visibileHeaderSub = element.visibileHeaderContainer.subscribe({ next: v => setVisibileHeader(v) });
    let visibileHeaderCloseButtonSub = element.visibileHeaderCloseButtonContainer.subscribe({
      next: v => setVisibileHeaderCloseButton(v)
    });
    let titleSub = element.titleContainer.subscribe({ next: v => setTitle(v) });
    let noPaddingSub = element.noPaddingContainer.subscribe({ next: v => setNoPadding(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      childSub.unsubscribe();
      openSub.unsubscribe();
      visibileHeaderSub.unsubscribe();
      visibileHeaderCloseButtonSub.unsubscribe();
      titleSub.unsubscribe();
      noPaddingSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  // if (child == null)
  //   throw new Error("child cannot be null or undefined");

  function handleClose() {
    element.openContainer.next(false);
  }

  function getModalStyle(): CSSProperties {
    const top = 50;
    const left = 50;
    // TODO: add to theme
    return {
      position: "absolute",
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  function createHeader(): React.ReactElement | null {
    if (!visibileHeader) return null;
    let action: React.ReactElement | undefined = undefined;

    if (visibileHeaderCloseButton)
      action = (
        <IconButton onClick={handleClose}>
          <MoreVertIcon />
        </IconButton>
      );

    return <CardHeader action={action} title={title} />;
  }

  function createContent(): React.ReactElement {
    let view = <MapToView element={child as IElement} weight={0} />;
    if (noPadding) return view;
    return <CardContent>{view}</CardContent>;
  }

  return (
    <Modal open={open} onClose={handleClose} disableBackdropClick={true} disableEscapeKeyDown={true}>
      <Card style={getModalStyle()}>
        {createHeader()}
        {createContent()}
      </Card>
    </Modal>
  );
}
