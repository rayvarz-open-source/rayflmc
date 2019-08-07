import { ModalElement } from "./ModalElement";
import * as React from "react";
import {
  Child,
  Open,
  VisibileHeader,
  VisibileHeaderCloseButton,
  Title,
  NoPadding,
  NoBackdropClickClose,
  NoBackground,
  NoEscapeKeyDownClose,
  LazyContent,
  MinWidth,
  MinHeight,
  MaxWidth,
  MaxHeight
} from "./ModalElementAttributes";
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
  const [noBackground, setNoBackground] = React.useState<NoBackground>(false);
  const [noBackdropClickClose, setNoBackdropClickClose] = React.useState<NoBackdropClickClose>(true);
  const [noEscapeKeyDownClose, setNoEscapeKeyDownClose] = React.useState<NoEscapeKeyDownClose>(true);
  const [lazyContent, setLazyContent] = React.useState<LazyContent>(true);
  const [minWidth, setMinWidth] = React.useState<MinWidth>(undefined);
  const [minHeight, setMinHeight] = React.useState<MinHeight>(undefined);
  const [maxWidth, setMaxWidth] = React.useState<MaxWidth>(undefined);
  const [maxHeight, setMaxHeight] = React.useState<MaxHeight>(undefined);
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
    let noBackgroundSub = element.noBackgroundContainer.subscribe({ next: v => setNoBackground(v) });
    let noBackdropClickCloseSub = element.noBackdropClickCloseContainer.subscribe({
      next: v => setNoBackdropClickClose(v)
    });
    let noEscapeKeyDownCloseSub = element.noEscapeKeyDownCloseContainer.subscribe({
      next: v => setNoEscapeKeyDownClose(v)
    });
    let lazyContentSub = element.lazyContentContainer.subscribe({ next: v => setLazyContent(v) });
    let minWidthSub = element.minWidthContainer.subscribe({ next: v => setMinWidth(v) });
    let minHeightSub = element.minHeightContainer.subscribe({ next: v => setMinHeight(v) });
    let maxWidthSub = element.maxWidthContainer.subscribe({ next: v => setMaxWidth(v) });
    let maxHeightSub = element.maxHeightContainer.subscribe({ next: v => setMaxHeight(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      childSub.unsubscribe();
      openSub.unsubscribe();
      visibileHeaderSub.unsubscribe();
      visibileHeaderCloseButtonSub.unsubscribe();
      titleSub.unsubscribe();
      noPaddingSub.unsubscribe();
      noBackgroundSub.unsubscribe();
      noBackdropClickCloseSub.unsubscribe();
      noEscapeKeyDownCloseSub.unsubscribe();
      lazyContentSub.unsubscribe();
      minWidthSub.unsubscribe();
      minHeightSub.unsubscribe();
      maxWidthSub.unsubscribe();
      maxHeightSub.unsubscribe();
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
      transform: `translate(-${top}%, -${left}%)`,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight
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

  let content: React.ReactElement;

  if (noBackground) {
    content = (
      <div style={getModalStyle()}>
        {createHeader()}
        {createContent()}
      </div>
    );
  } else {
    content = (
      <Card style={getModalStyle()}>
        {createHeader()}
        {createContent()}
      </Card>
    );
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableBackdropClick={noBackdropClickClose}
      disableEscapeKeyDown={noEscapeKeyDownClose}
    >
      {content}
    </Modal>
  );
}
