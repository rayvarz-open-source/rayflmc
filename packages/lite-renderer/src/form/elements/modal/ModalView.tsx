import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Modal
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import MoreVertIcon from "@material-ui/icons/Close";
import * as React from "react";
import IElement from "../../../flmc-data-layer/FormController/IElement";
import { Visibility } from "../base/BaseElement";
import { MapToView } from "../ElementToViewMapper";
import { ModalElement } from "./ModalElement";
import {
  Child,
  LazyContent,
  MaxHeight,
  MaxWidth,
  MinHeight,
  MinWidth,
  NoBackdropClickClose,
  NoBackground,
  NoEscapeKeyDownClose,
  NoPadding,
  Open,
  Title,
  VisibleHeader,
  VisibleHeaderCloseButton
} from "./ModalElementAttributes";

type Props = {
  element: ModalElement;
  weight: number;
};

export default function ModalView({ element }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [child, setChild] = React.useState<Child>(
    () => element.childContainer.value
  );
  const [open, setOpen] = React.useState<Open>(
    () => element.openContainer.value
  );
  const [visibleHeader, setVisibleHeader] = React.useState<VisibleHeader>(
    () => element.visibleHeaderContainer.value
  );
  const [
    visibleHeaderCloseButton,
    setVisibleHeaderCloseButton
  ] = React.useState<VisibleHeaderCloseButton>(
    () => element.visibleHeaderCloseButtonContainer.value
  );
  const [title, setTitle] = React.useState<Title>(
    () => element.titleContainer.value
  );
  const [noPadding, setNoPadding] = React.useState<NoPadding>(
    () => element.noPaddingContainer.value
  );
  const [noBackground, setNoBackground] = React.useState<NoBackground>(
    () => element.noBackgroundContainer.value
  );
  const [noBackdropClickClose, setNoBackdropClickClose] = React.useState<
    NoBackdropClickClose
  >(() => element.noBackdropClickCloseContainer.value);
  const [noEscapeKeyDownClose, setNoEscapeKeyDownClose] = React.useState<
    NoEscapeKeyDownClose
  >(() => element.noEscapeKeyDownCloseContainer.value);
  const [lazyContent, setLazyContent] = React.useState<LazyContent>(
    () => element.lazyContentContainer.value
  );
  const [minWidth, setMinWidth] = React.useState<MinWidth>(
    () => element.minWidthContainer.value
  );
  const [minHeight, setMinHeight] = React.useState<MinHeight>(
    () => element.minHeightContainer.value
  );
  const [maxWidth, setMaxWidth] = React.useState<MaxWidth>(
    () => element.maxWidthContainer.value
  );
  const [maxHeight, setMaxHeight] = React.useState<MaxHeight>(
    () => element.maxHeightContainer.value
  );
  const [visibility, setVisibility] = React.useState<Visibility>("show");
  const [nativeProps, setNativeProps] = React.useState(
    () => element.nativePropsContainer.value
  );
  React.useEffect(() => {
    let childSub = element.childContainer.subscribe({ next: v => setChild(v) });
    let openSub = element.openContainer.subscribe({ next: v => setOpen(v) });
    let visibleHeaderSub = element.visibleHeaderContainer.subscribe({
      next: v => setVisibleHeader(v)
    });
    let visibleHeaderCloseButtonSub = element.visibleHeaderCloseButtonContainer.subscribe(
      {
        next: v => setVisibleHeaderCloseButton(v)
      }
    );
    let titleSub = element.titleContainer.subscribe({ next: v => setTitle(v) });
    let noPaddingSub = element.noPaddingContainer.subscribe({
      next: v => setNoPadding(v)
    });
    let noBackgroundSub = element.noBackgroundContainer.subscribe({
      next: v => setNoBackground(v)
    });
    let noBackdropClickCloseSub = element.noBackdropClickCloseContainer.subscribe(
      {
        next: v => setNoBackdropClickClose(v)
      }
    );
    let noEscapeKeyDownCloseSub = element.noEscapeKeyDownCloseContainer.subscribe(
      {
        next: v => setNoEscapeKeyDownClose(v)
      }
    );
    let lazyContentSub = element.lazyContentContainer.subscribe({
      next: v => setLazyContent(v)
    });
    let minWidthSub = element.minWidthContainer.subscribe({
      next: v => setMinWidth(v)
    });
    let minHeightSub = element.minHeightContainer.subscribe({
      next: v => setMinHeight(v)
    });
    let maxWidthSub = element.maxWidthContainer.subscribe({
      next: v => setMaxWidth(v)
    });
    let maxHeightSub = element.maxHeightContainer.subscribe({
      next: v => setMaxHeight(v)
    });
    let visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });
    const nativePropsSub = element.nativePropsContainer.subscribe({
      next: v => setNativeProps(v)
    });
    return () => {
      childSub.unsubscribe();
      openSub.unsubscribe();
      visibleHeaderSub.unsubscribe();
      visibleHeaderCloseButtonSub.unsubscribe();
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
      nativePropsSub.unsubscribe();
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
    return {
      overflow: "auto",
      outline: "none",
      alignSelf: "center",
      minWidth,
      minHeight,
      maxWidth,
      maxHeight
    };
  }

  function createHeader(): React.ReactElement | null {
    if (!visibleHeader) return null;
    let action: React.ReactElement | undefined = undefined;

    if (visibleHeaderCloseButton)
      action = (
        <IconButton onClick={handleClose}>
          <MoreVertIcon />
        </IconButton>
      );

    return <CardHeader action={action} title={title} />;
  }

  function createContent(): React.ReactElement | null {
    if (lazyContent && !open) return null;
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
      disableEnforceFocus
      {...nativeProps}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        ...(nativeProps.style ? nativeProps.style : {})
      }}
    >
      {content}
    </Modal>
  );
}
