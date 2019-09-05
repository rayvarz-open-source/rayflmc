
import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Visibility } from '../base/BaseElement';
import { LabelElement } from './LabelElement';
import { Align, Colors, Display, GutterBottom, NoWrap, Value, Variant } from './LabelElementAttributes';

type Props = {
  element: LabelElement,
  weight: number
}

export default function LabelView({ element, weight }: Props) {

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [value, setValue] = React.useState<Value>(() => element.valueContainer.value);
  const [noWrap, setNoWrap] = React.useState<NoWrap>(() => element.noWrapContainer.value);
  const [gutterBottom, setGutterBottom] = React.useState<GutterBottom>(() => element.gutterBottomContainer.value);
  const [colors, setColors] = React.useState<Colors>(() => element.colorsContainer.value);
  const [variant, setVariant] = React.useState<Variant>(() => element.variantContainer.value);
  const [display, setDisplay] = React.useState<Display>(() => element.displayContainer.value);
  const [align, setAlign] = React.useState<Align>(() => element.alignContainer.value);
  const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

  React.useEffect(() => {

    let valueSub = element.valueContainer.subscribe({ next: v => setValue(v) });
    let noWrapSub = element.noWrapContainer.subscribe({ next: v => setNoWrap(v) });
    let gutterBottomSub = element.gutterBottomContainer.subscribe({ next: v => setGutterBottom(v) });
    let colorsSub = element.colorsContainer.subscribe({ next: v => setColors(v) });
    let variantSub = element.variantContainer.subscribe({ next: v => setVariant(v) });
    let displaySub = element.displayContainer.subscribe({ next: v => setDisplay(v) });
    let alignSub = element.alignContainer.subscribe({ next: v => setAlign(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      valueSub.unsubscribe();
      noWrapSub.unsubscribe();
      gutterBottomSub.unsubscribe();
      colorsSub.unsubscribe();
      variantSub.unsubscribe();
      displaySub.unsubscribe();
      alignSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  return (
    <Typography
      style={
        {
          ...element.getVisibilityStyle(visibility),
          ...element.getWeightStyle(weight)
        }
      }
      variant={variant}
      color={colors}
      align={align}
      gutterBottom={gutterBottom}
      display={display}
      noWrap={noWrap}
    >
      {value}
    </Typography>
  );

}
