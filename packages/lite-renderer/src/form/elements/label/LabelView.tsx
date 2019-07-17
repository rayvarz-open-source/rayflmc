import {LabelElement} from './LabelElement';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import {VisibilityType} from "../../..";

type Props = {
  element: LabelElement
}

export default function LabelView({element}: Props) {

  const [text, setText] = React.useState("");
  const [textAlign, setTextAlign] = React.useState();
  const [displayType, setDisplayType] = React.useState();
  const [textSize, setTextSize] = React.useState();
  const [textStyle, setTextStyle] = React.useState();
  const [noWrap, setNoWrap] = React.useState();
  const [gutterBottom, setGutterBottom] = React.useState();
  const [visibility, setVisibility] = React.useState('');

  React.useEffect(() => {
    let textSub = element.value.subscribe({
      next: (v) => setText(v)
    });
    let textStyleSub = element.labelTextStyle.subscribe({
      next: (v) => setTextStyle(v)
    });
    let textSizeSub = element.labelTextSize.subscribe({
      next: (v) => setTextSize(v)
    });
    let displayTypeSub = element.labelDisplayType.subscribe({
      next: (v) => setDisplayType(v)
    });
    let noWrap = element.labelIsNoWrap.subscribe({
      next: (v) => setNoWrap(v)
    });
    let gutterBottomSub = element.labelIsGutterBottom.subscribe({
      next: (v) => setGutterBottom(v)
    });
    let textAlign = element.labelTextAlign.subscribe({
      next: (v) => setTextAlign(v)
    });
    let visibilitySub = element.elementVisibility.subscribe({
      next: (v) => setVisibility(v)
    });
    return () => {
      textSub.unsubscribe();
      textStyleSub.unsubscribe();
      textSizeSub.unsubscribe();
      displayTypeSub.unsubscribe();
      noWrap.unsubscribe();
      gutterBottomSub.unsubscribe();
      textAlign.unsubscribe();
      visibilitySub.unsubscribe();

    }

  })

  return (
    <Typography
      style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
      variant={textSize} color={textStyle} align={textAlign} gutterBottom={gutterBottom} display={displayType}
      noWrap={noWrap}>
      {text}
    </Typography>
  )

}
