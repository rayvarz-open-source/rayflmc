import { Button, CircularProgress, Icon as MIcon, withStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { useTheme } from "@material-ui/styles";
import * as React from "react";
import useFunctionAsState from "../../../custom-hooks/function-state";
import { Visibility } from "../base/BaseElement";
import { ButtonElement } from "./ButtonElement";
import { Colors, Disabled, Icon, IconPlacement, Loading, OnClick, Text, Variant } from "./ButtonElementAttributes";
import { ButtonIconPlacement } from "./ButtonIconPlacement";

type Props = {
  element: ButtonElement;
  weight: number;
};

export default function ButtonView({ element, weight }: Props) {
  const theme = useTheme<Theme>();

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [text, setText] = React.useState<Text>(() => element.textContainer.value);
  const [loading, setLoading] = React.useState<Loading>(() => element.loadingContainer.value);
  const [disabled, setDisabled] = React.useState<Disabled>(() => element.disabledContainer.value);
  const [colors, setColors] = React.useState<Colors>(() => element.colorsContainer.value);
  const [variant, setVariant] = React.useState<Variant>(() => element.variantContainer.value);
  const [icon, setIcon] = React.useState<Icon>(() => element.iconContainer.value);
  const [onClick, setOnClick] = useFunctionAsState<OnClick>(undefined);
  const [iconPlacement, setIconPlacement] = React.useState<IconPlacement>(() => element.iconPlacementContainer.value);
  const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

  React.useEffect(() => {
    let textSub = element.textContainer.subscribe({ next: v => setText(v) });
    let loadingSub = element.loadingContainer.subscribe({ next: v => setLoading(v) });
    let disabledSub = element.disabledContainer.subscribe({ next: v => setDisabled(v) });
    let colorsSub = element.colorsContainer.subscribe({ next: v => setColors(v) });
    let variantSub = element.variantContainer.subscribe({ next: v => setVariant(v) });
    let iconSub = element.iconContainer.subscribe({ next: v => setIcon(v) });
    let onClickSub = element.onClickContainer.subscribe({ next: v => setOnClick(v) });
    let iconPlacementSub = element.iconPlacementContainer.subscribe({ next: v => setIconPlacement(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      textSub.unsubscribe();
      loadingSub.unsubscribe();
      disabledSub.unsubscribe();
      colorsSub.unsubscribe();
      variantSub.unsubscribe();
      iconSub.unsubscribe();
      onClickSub.unsubscribe();
      iconPlacementSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  function getTextColor(color: Colors, contrast: boolean) {
    let defaultColor = contrast ? "#ffffff" : "#000000";
    if (theme == null) return defaultColor;
    switch (color) {
      case "default":
        return defaultColor;
      case "inherit":
        return defaultColor;
      case "primary":
        return contrast ? theme.palette.primary.contrastText : theme.palette.primary.main;
      case "secondary":
        return contrast ? theme.palette.secondary.contrastText : theme.palette.secondary.main;
      default:
        return defaultColor;
    }
  }

  function getProgressColor(variant: Variant, color: Colors) {
    switch (variant) {
      case "contained":
        return getTextColor(color, true);
      case "outlined":
        return getTextColor(color, false);
      case "text":
        return getTextColor(color, false);
      default:
        return getTextColor(color, false);
    }
  }

  const ColorCircularProgress = withStyles({
    root: {
      color: getProgressColor(variant, colors)
    }
  })(CircularProgress);

  function createIcon() {
    if (!icon) return null;
    let margin = !!text ? 8 : 0;
    return <MIcon style={{ marginRight: margin, marginLeft: margin }}>{icon}</MIcon>;
  }

  function createLoading() {
    if (!loading) return null;
    return <ColorCircularProgress style={{ marginRight: !!text ? 8 : 0 }} size={20} thickness={3} />;
  }

  const handleClick = () => {
    if (loading || onClick == null) return;
    onClick();
  };

  return (
    <Button
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }}
      variant={variant as any}
      color={colors}
      disabled={disabled}
      onClick={handleClick}
    >
      {createLoading()}
      {iconPlacement === ButtonIconPlacement.Start && createIcon()}
      {text}
      {iconPlacement === ButtonIconPlacement.End && createIcon()}
    </Button>
  );
}
