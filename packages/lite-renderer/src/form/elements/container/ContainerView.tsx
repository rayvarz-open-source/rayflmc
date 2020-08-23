import { Box, Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as React from "react";
import { skip } from "rxjs/operators";
import IElement from "../../../flmc-data-layer/FormController/IElement";
import { Visibility } from "../base/BaseElement";
import { MapToView } from "../ElementToViewMapper";
import { ContainerDecoration } from "./ContainerDecoration";
import { ContainerElement } from "./ContainerElement";
import {
  AlignItems,
  Decoration,
  Direction,
  Flex,
  JustifyContent,
  LayoutMode,
  Wrap
} from "./ContainerElementAttributes";
import { ContainerLayoutMode } from "./ContainerLayoutMode";

type Props = {
  element: ContainerElement;
  weight: number;
};

export default function ContainerView({ element, weight }: Props) {
  const [direction, setDirection] = React.useState<Direction>(
    () => element.directionContainer.value
  );
  const [flex, setFlex] = React.useState<Flex>(
    () => element.flexContainer.value
  );
  const [wrap, setWrap] = React.useState<Wrap>(
    () => element.wrapContainer.value
  );
  const [justifyContent, setJustifyContent] = React.useState<JustifyContent>(
    () => element.justifyContentContainer.value
  );
  const [alignItems, setAlignItems] = React.useState<AlignItems>(
    () => element.alignItemsContainer.value
  );
  const [decoration, setDecoration] = React.useState<Decoration>(
    () => element.decorationContainer.value
  );
  const [layoutMode, setLayoutMode] = React.useState<LayoutMode>(
    () => element.layoutModeContainer.value
  );
  const [visibility, setVisibility] = React.useState<Visibility>(
    () => element.elementVisibilityContainer.value
  );
  const [nativeProps, setNativeProps] = React.useState(
    () => element.nativePropsContainer.value
  );

  function renderChildren(elements: IElement[]): React.ReactElement[] {
    if (flex.length != 0)
      return elements.map((element, i) => (
        <MapToView
          element={element}
          weight={flex[i]}
          key={`${element.type}_${i}`}
        />
      ));
    return elements.map((v, i) => (
      <MapToView element={v} weight={0} key={`${v.type}_${i}`} />
    ));
  }

  const [children, setChildren] = React.useState<React.ReactElement[]>(() =>
    renderChildren(element.childrenContainer.value)
  );

  React.useEffect(() => {
    let childrenSub = element.childrenContainer
      .pipe(skip(1))
      .subscribe({ next: v => setChildren(renderChildren(v)) });
    let directionSub = element.directionContainer.subscribe({
      next: v => setDirection(v)
    });
    let flexSub = element.flexContainer.subscribe({ next: v => setFlex(v) });
    let wrapSub = element.wrapContainer.subscribe({ next: v => setWrap(v) });
    let decorationSub = element.decorationContainer.subscribe({
      next: v => setDecoration(v)
    });
    let justifyContentSub = element.justifyContentContainer.subscribe({
      next: v => setJustifyContent(v)
    });
    let alignItemsSub = element.alignItemsContainer.subscribe({
      next: v => setAlignItems(v)
    });
    let layoutModeSub = element.layoutModeContainer.subscribe({
      next: v => setLayoutMode(v)
    });
    let visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });
    const nativePropsSub = element.nativePropsContainer.subscribe({
      next: v => setNativeProps(v)
    });

    return () => {
      childrenSub.unsubscribe();
      directionSub.unsubscribe();
      flexSub.unsubscribe();
      wrapSub.unsubscribe();
      decorationSub.unsubscribe();
      justifyContentSub.unsubscribe();
      alignItemsSub.unsubscribe();
      layoutModeSub.unsubscribe();
      visibilitySub.unsubscribe();
      nativePropsSub.unsubscribe();
    };
  }, [element.childrenContainer]);

  const isSmallScreen = useMediaQuery("(max-width:425px)");

  if (flex.length > 0 && flex.length != children.length)
    throw new Error(
      `flex length (${flex.length}) must be same as children length ${children.length}`
    );

  let view: React.ReactElement | null = null;

  switch (decoration) {
    case ContainerDecoration.None:
      view = (
        <Box
          {...nativeProps}
          style={{
            ...element.getVisibilityStyle(visibility),
            ...element.getWeightStyle(weight),
            flexWrap: wrap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            ...(nativeProps.style ? nativeProps.style : {})
          }}
          display="flex"
          flexDirection={
            isSmallScreen && layoutMode === ContainerLayoutMode.Responsive
              ? "column"
              : direction
          }
        >
          {children}
        </Box>
      );
      break;
    case ContainerDecoration.Paper:
      view = (
        <Paper
          {...nativeProps}
          style={{
            display: "flex",
            flexDirection:
              isSmallScreen && layoutMode === ContainerLayoutMode.Responsive
                ? "column"
                : direction,
            ...element.getVisibilityStyle(visibility),
            ...element.getWeightStyle(weight),
            flexWrap: wrap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            ...(nativeProps.style ? nativeProps.style : {})
          }}
        >
          {children}
        </Paper>
      );
      break;
  }

  return view;
}
