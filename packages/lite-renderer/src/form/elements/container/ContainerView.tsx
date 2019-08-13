import { ContainerElement } from "./ContainerElement";
import * as React from "react";
import { Children, Direction, Flex, Wrap, Decoration } from "./ContainerElementAttributes";
import { Visibility } from "../base/BaseElement";
import { ContainerDirection } from "./ContainerDirection";
import { Box, Paper } from "@material-ui/core";
import { MapToView } from "../ElementToViewMapper";
import { ContainerWrap } from "./ContainerWrap";
import { skip } from "rxjs/operators";
import IElement from "../../../flmc-data-layer/FormController/IElement";
import { ContainerDecoration } from "./ContainerDecoration";

type Props = {
  element: ContainerElement;
  weight: number;
};

export default function ContainerView({ element, weight }: Props) {
  const [direction, setDirection] = React.useState<Direction>(ContainerDirection.Column);
  const [flex, setFlex] = React.useState<Flex>(element.flexContainer.value);
  const [wrap, setWrap] = React.useState<Wrap>(ContainerWrap.NoWrap);
  const [decoration, setDecoration] = React.useState<Decoration>(ContainerDecoration.None);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  function renderChildren(elements: IElement[]): React.ReactElement[] {
    if (flex.length != 0)
      return elements.map((element, i) => (
        <MapToView element={element} weight={flex[i]} key={`${element.type}_${i}`} />
      ));
    return elements.map((v, i) => <MapToView element={v} weight={0} key={`${v.type}_${i}`} />);
  }

  const [children, setChildren] = React.useState<React.ReactElement[]>(() =>
    renderChildren(element.childrenContainer.value)
  );

  React.useEffect(() => {
    let childrenSub = element.childrenContainer.pipe(skip(1)).subscribe({ next: v => setChildren(renderChildren(v)) });
    let directionSub = element.directionContainer.subscribe({ next: v => setDirection(v) });
    let flexSub = element.flexContainer.subscribe({ next: v => setFlex(v) });
    let wrapSub = element.wrapContainer.subscribe({ next: v => setWrap(v) });
    let decorationSub = element.decorationContainer.subscribe({ next: v => setDecoration(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      childrenSub.unsubscribe();
      directionSub.unsubscribe();
      flexSub.unsubscribe();
      wrapSub.unsubscribe();
      decorationSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, [element.childrenContainer]);

  if (flex.length > 0 && flex.length != children.length)
    throw new Error(`flex length (${flex.length}) must be same as children length ${children.length}`);

  let view: React.ReactElement | null = null;

  switch (decoration) {
    case ContainerDecoration.None:
      view = (
        <Box
          style={{
            ...element.getVisibilityStyle(visibility),
            ...element.getWeightStyle(weight),
            flexWrap: wrap
          }}
          display="flex"
          flexDirection={direction}
        >
          {children}
        </Box>
      );
      break;
    case ContainerDecoration.Paper:
      view = (
        <Paper
          style={{
            display: "flex",
            flexDirection: direction,
            ...element.getVisibilityStyle(visibility),
            ...element.getWeightStyle(weight),
            flexWrap: wrap
          }}
        >
          {children}
        </Paper>
      );
      break;
  }

  return view;
}
