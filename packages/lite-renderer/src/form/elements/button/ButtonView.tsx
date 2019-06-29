import {ButtonElement} from './ButtonElement';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import {useRef} from 'react';
import Icon from '@material-ui/core/Icon';
import {Alignment} from "../share/Alignment";
import {StyleColor} from "../share/StyleColor";
import {StyleType} from "../share/StyleType";
import {CircularProgress} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";

type Props = {
    element: ButtonElement
}
function getProgressColor(styleType,styleColor) {
  if (styleType==StyleType.Contained && (styleColor==StyleColor.Primary || styleColor==StyleColor.Secondary))
    return "#fefefe";
  else if (styleColor==StyleColor.Primary || styleColor==StyleColor.Secondary)
    return styleColor==StyleColor.Primary?useTheme().palette.primary.main :useTheme().palette.secondary.main;
  else
    return "#000000"
}
export default function ButtonView({ element }: Props) {
  const inputEl = useRef(null);

    let onClick: VoidFunction = () => { };
    const [title, setTitle] = React.useState("");
    const [styleType, setStyleType]  = React.useState();
    const [styleColor, setStyleColor]  = React.useState();
    const [disabled, setDisabled]  = React.useState(false);
    const [icon, setIcon]  = React.useState('');
    const [iconAlignment, setIconAlignment]  = React.useState();
    const [loading, setLoading]  = React.useState();
    const [size, setSize]  = React.useState();
    const [fullWidth, setFullWidth]  = React.useState();

  

  const ColorCircularProgress = withStyles({
    root: {
      color: getProgressColor(styleType,styleColor),
    },
  })(CircularProgress);
    React.useEffect(() => {

        let callbackSub = element.buttonCallback.subscribe({
            next: (v) => onClick = v == null ? () => { } : v
        });
    
        let textSub = element.buttonText.subscribe({
            next: (v) => setTitle(v)
        });
      let styleTypeSub = element.buttonStyleType.subscribe({
        next: (v) => setStyleType(v)
      });
      let styleColorSub = element.buttonStyleColor.subscribe({
        next: (v) => setStyleColor(v)
      });
      let disabledSub = element.buttonIsDisabled.subscribe({
        next: (v) => setDisabled(v)
      });
      let iconSub = element.buttonIcon.subscribe({
        next: (v) => setIcon(v)
      });
      let iconAlignmentSub = element.buttonIconAlign.subscribe({
        next: (v) => setIconAlignment(v)
      });
      let loadingSub = element.buttonIsLoading.subscribe({
        next: (v) => setLoading(v)
      });
      let sizeSub = element.buttonSize.subscribe({
        next: (v) => setSize(v)
      });
      let fullWidthSub = element.buttonIsFullWidth.subscribe({
        next: (v) => setFullWidth(v)
      });
        return () => {
            callbackSub.unsubscribe();
            textSub.unsubscribe();
            styleTypeSub.unsubscribe();
            styleColorSub.unsubscribe();
            disabledSub.unsubscribe();
            iconSub.unsubscribe();
            iconAlignmentSub.unsubscribe();
            loadingSub.unsubscribe();
            sizeSub.unsubscribe();
            fullWidthSub.unsubscribe();
        }

    })

    return (
        <Button  ref={inputEl}  variant={styleType} color={styleColor} fullWidth={fullWidth} disabled={disabled} onClick={() => !loading  && onClick()}>
          {!loading && icon!="" && iconAlignment===Alignment.Left && <Icon style={{marginRight:8}}>{icon}</Icon>}
          {loading && iconAlignment===Alignment.Left && <ColorCircularProgress style={{marginRight:8}} size={20} thickness={3} />}
            {title}
            {loading && iconAlignment===Alignment.Right && <ColorCircularProgress style={{marginLeft:8}} size={20} thickness={3} />}
          {!loading && icon!="" && iconAlignment===Alignment.Right && <Icon style={{marginLeft:8}}>{icon}</Icon>}
        </Button>
    )

}
