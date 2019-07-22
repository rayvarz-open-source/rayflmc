import {ImageElement} from './ImageElement';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import {VisibilityType} from "../../..";
import {ImageBorderType} from "./ImageBorderType";
import {ImageScaleType} from "./ImageScaleType";

type Props = {
  element: ImageElement
}

export default function ImageView({element}: Props) {

  const [imageAddress, setImageAddress] = React.useState("");
  const [alt, setAlt] = React.useState("");
  const [width, setWidth] = React.useState(60);
  const [height, setHeight] = React.useState(60);
  const [scaleType, setScaleType] = React.useState(ImageScaleType.Contain);
  const [borderType,setBorderType]=React.useState('');
  const [visibility, setVisibility] = React.useState('');

  React.useEffect(() => {
    let imageAddressSub = element.imageAddress.subscribe({
      next: (v) => setImageAddress(v)
    });
    let altSub = element.imageAlt.subscribe({
      next: (v) => setAlt(v)
    });
    let widthSub = element.imageWidth.subscribe({
      next: (v) => setWidth(v)
    });
    let heightSub = element.imageHeight.subscribe({
      next: (v) => setHeight(v)
    });
    let scaleTypeSub = element.imageScaleType.subscribe({
      next: (v) => setScaleType(v)
    });
    let borderTypeSub = element.imageBorderType.subscribe({
      next: (v) => setBorderType(v)
    });
    let visibilitySub = element.elementVisibility.subscribe({
      next: (v) => setVisibility(v)
    });
    return () => {
      imageAddressSub.unsubscribe();
      widthSub.unsubscribe();
      heightSub.unsubscribe();
      scaleTypeSub.unsubscribe();
      borderTypeSub.unsubscribe();
      visibilitySub.unsubscribe();
      altSub.unsubscribe();
    }

  })
console.log(scaleType)
  return (
    <img
      style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
      style={{objectFit:scaleType,borderRadius:borderType==ImageBorderType.Avatar?'50%':borderType==ImageBorderType.Round?'4px':'none'}}
      src={imageAddress}
      width={width}
      height={height}
      alt={alt}

      />
  )

}
