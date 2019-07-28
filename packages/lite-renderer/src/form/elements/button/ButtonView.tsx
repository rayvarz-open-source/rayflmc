import { Icon as MIcon, Button, CircularProgress, withStyles } from '@material-ui/core';
import { ButtonElement } from './ButtonElement';
import * as React from 'react';
import { Text, Loading, Disabled, Colors, Variant, Icon, OnClick } from './ButtonElementAttributes';
import { Visibility } from '../base/BaseElement';
import { ButtonColor } from './ButtonColor';
import { ButtonVariant } from './ButtonVariant';
import useTheme from '@material-ui/styles/useTheme';

type Props = {
  element: ButtonElement,
  weight: number
}

export default function ButtonView({ element, weight }: Props) {

  const theme = useTheme();

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [text, setText] = React.useState<Text>(undefined);
  const [loading, setLoading] = React.useState<Loading>(false);
  const [disabled, setDisabled] = React.useState<Disabled>(false);
  const [colors, setColors] = React.useState<Colors>('default');
  const [variant, setVariant] = React.useState<Variant>('contained');
  const [icon, setIcon] = React.useState<Icon>(undefined);
  const [onClick, setOnClick] = React.useState<OnClick>(undefined);
  const [visibility, setVisibility] = React.useState<Visibility>('show');

  React.useEffect(() => {

    let textSub = element.textContainer.subscribe({ next: v => setText(v) });
    let loadingSub = element.loadingContainer.subscribe({ next: v => setLoading(v) });
    let disabledSub = element.disabledContainer.subscribe({ next: v => setDisabled(v) });
    let colorsSub = element.colorsContainer.subscribe({ next: v => setColors(v) });
    let variantSub = element.variantContainer.subscribe({ next: v => setVariant(v) });
    let iconSub = element.iconContainer.subscribe({ next: v => setIcon(v) });
    let onClickSub = element.onClickContainer.subscribe({ next: v => setOnClick(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      textSub.unsubscribe();
      loadingSub.unsubscribe();
      disabledSub.unsubscribe();
      colorsSub.unsubscribe();
      variantSub.unsubscribe();
      iconSub.unsubscribe();
      onClickSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion



  function getProgressColor(variant: Variant, color: Colors) {
    if (variant == ButtonVariant.Contained && (color == ButtonColor.Primary || color == ButtonColor.Secondary))
      return "#fefefe"; // TODO: USE THEME
    else if (color == ButtonColor.Primary || color == ButtonColor.Secondary)
      return color == ButtonColor.Primary ? theme.palette.primary.main : theme.palette.secondary.main;
    else
      return "#000000"  // TODO: USE THEME
  }

  const ColorCircularProgress = withStyles({
    root: {
      color: getProgressColor(variant, colors),
    },
  })(CircularProgress);

  function createIcon() {
    if (!icon) return null;
    return (<MIcon style={{ marginRight: 8 }}>{icon}</MIcon>);
  }

  function createLoading() {
    if (!loading) return null;
    return (<ColorCircularProgress style={{ marginRight: 8 }} size={20} thickness={3} />);
  }

  function handleClick() {
    if (loading || onClick == null) return;
    onClick();
  }

  return (
    <Button style={
      {
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }
    }
      variant={variant as any}
      color={colors}
      disabled={disabled}
      onClick={handleClick}
    >
      {createIcon()}
      {createLoading()}
      {text}
    </Button>

  );

}
