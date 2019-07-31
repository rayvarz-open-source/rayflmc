import { SelectBoxElement, OnChange } from './SelectBoxElement';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import * as React from 'react';
import { useRef } from 'react';
import Icon from '@material-ui/core/Icon';
import { Alignment } from "../share/Alignment";
import { StyleColor } from "../share/StyleColor";
import { StyleType } from "../share/StyleType";
import { CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import { SelectBoxStyleType } from "./SelectBoxStyleType";
import useFunctionAsState from '../../../custom-hooks/function-state';

type Props = {
  element: SelectBoxElement,
  weight: number,
}

function getProgressColor(styleType, styleColor) {
  if (styleType == StyleType.Contained && (styleColor == StyleColor.Primary || styleColor == StyleColor.Secondary))
    return "#fefefe";
  else if (styleColor == StyleColor.Primary || styleColor == StyleColor.Secondary)
    return styleColor == StyleColor.Primary ? useTheme().palette.primary.main : useTheme().palette.secondary.main;
  else
    return "#000000"
}

export default function SelectBoxView({ element }: Props) {
  const inputEl = useRef(null);

  const [onChange, setOnChange] = useFunctionAsState<OnChange>(undefined);
  const [inputTitle, setInputTitle] = React.useState("");
  const [inputValue, setInputValue] = React.useState(false);
  const [styleType, setStyleType] = React.useState("CheckBox");
  const [styleColor, setStyleColor] = React.useState();
  const [disabled, setDisabled] = React.useState(false);
  const [alignment, setAlignment] = React.useState();


  React.useEffect(() => {
    let onCheckChangeSub = element.onCheckChangeContainer.subscribe({ next: v => setOnChange(v) });

    let titleSub = element.selectBoxText.subscribe({
      next: (v) => setInputTitle(v)
    });
    let valueSub = element.selectBoxValue.subscribe({
      next: (v) => setInputValue(v)
    });
    let styleTypeSub = element.selectBoxStyleType.subscribe({
      next: (v) => setStyleType(v)
    });
    let styleColorSub = element.selectBoxStyleColor.subscribe({
      next: (v) => setStyleColor(v)
    });
    let disabledSub = element.selectBoxIsDisabled.subscribe({
      next: (v) => setDisabled(v)
    });
    let alignmentSub = element.selectBoxAlign.subscribe({
      next: (v) => setAlignment(v)
    });

    return () => {
      titleSub.unsubscribe();
      valueSub.unsubscribe();
      styleTypeSub.unsubscribe();
      styleColorSub.unsubscribe();
      disabledSub.unsubscribe();
      alignmentSub.unsubscribe();
      onCheckChangeSub.unsubscribe();
    }

  })

  return (
    <FormControlLabel

      control={styleType === SelectBoxStyleType.Switch ? (<Switch
        checked={inputValue}
        value={inputValue}
        onChange={onChange}
        disabled={disabled}
        color={styleColor}
      />) : styleType === SelectBoxStyleType.CheckBox ?
          <Checkbox disabled={disabled} value={inputValue} color={styleColor} onChange={onChange} /> :
          styleType === SelectBoxStyleType.Like ?
            <Checkbox disabled={disabled} icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value={inputValue} color={styleColor} onChange={onChange} /> :
            <Radio disabled={disabled} color={styleColor} value={inputTitle} onChange={onChange} />}
      label={inputTitle}
      value={inputTitle}
      labelPlacement={alignment}
    />
  )

}
