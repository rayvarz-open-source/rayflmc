
import { LabelElement } from './LabelElement';
import * as React from 'react';
import { Value, NoWrap, GutterBottom, Colors, Variant, Display, Align } from './LabelElementAttributes';
import { Visibility } from '../base/BaseElement';
import { Typography } from '@material-ui/core';

type Props = {
  element: LabelElement,
  weight: number
}

export default function LabelView({ element, weight }: Props) {

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [value, setValue] = React.useState<Value>('');
  const [noWrap, setNoWrap] = React.useState<NoWrap>(false);
  const [gutterBottom, setGutterBottom] = React.useState<GutterBottom>(false);
  const [colors, setColors] = React.useState<Colors>('initial');
  const [variant, setVariant] = React.useState<Variant>('inherit');
  const [display, setDisplay] = React.useState<Display>('initial');
  const [align, setAlign] = React.useState<Align>('inherit');
  const [visibility, setVisibility] = React.useState<Visibility>('show');

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
