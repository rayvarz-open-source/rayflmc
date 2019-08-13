import { ContainerElement } from "./ContainerElement";
import * as React from "react";
import { Children, Direction, Flex, Wrap } from "./ContainerElementAttributes";
import { Visibility } from "../base/BaseElement";
import { ContainerDirection } from "./ContainerDirection";
import { Box } from "@material-ui/core";
import { MapToView } from "../ElementToViewMapper";
import { ContainerWrap } from "./ContainerWrap";
import { skip } from "rxjs/operators";

type Props = {
  element: ContainerElement;
  weight: number;
};

export default function ContainerView({ element, weight }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [children, setChildren] = React.useState<Children>(() => element.childrenContainer.value);
  const [direction, setDirection] = React.useState<Direction>(ContainerDirection.Column);
  const [flex, setFlex] = React.useState<Flex>([]);
  const [wrap, setWrap] = React.useState<Wrap>(ContainerWrap.NoWrap);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  React.useEffect(() => {
    let childrenSub = element.childrenContainer.pipe(skip(1)).subscribe({ next: v => setChildren(v) });
    let directionSub = element.directionContainer.subscribe({ next: v => setDirection(v) });
    let flexSub = element.flexContainer.subscribe({ next: v => setFlex(v) });
    let wrapSub = element.wrapContainer.subscribe({ next: v => setWrap(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      childrenSub.unsubscribe();
      directionSub.unsubscribe();
      flexSub.unsubscribe();
      wrapSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  if (flex.length > 0 && flex.length != children.length)
    throw new Error(`flex length (${flex.length}) must be same as children length ${children.length}`);

  function renderChildren() {
    if (flex.length != 0)
      return children.map((element, i) => (
        <MapToView element={element} weight={flex[i]} key={`${element.type}_${i}`} />
      ));
    return children.map((v, i) => <MapToView element={v} weight={0} key={`${v.type}_${i}`} />);
  }

  return (
    <Box
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight),
        flexWrap: wrap
      }}
      display="flex"
      flexDirection={direction}
    >
      {renderChildren()}
    </Box>
  );
}
