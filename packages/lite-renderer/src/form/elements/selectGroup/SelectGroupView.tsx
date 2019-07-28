import {SelectGroupElement} from './SelectGroupElement';
import RadioGroup from '@material-ui/core/RadioGroup';
import * as React from 'react';
import {useRef} from 'react';
import {StyleColor} from "../share/StyleColor";
import {StyleType} from "../share/StyleType";
import SelectBox, {SelectBoxElement} from "../selectBox/SelectBoxElement";
import useTheme from "@material-ui/core/styles/useTheme";
import Radio from "@material-ui/core/Radio";
import {SelectBoxStyleType} from "../../..";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorder from "@material-ui/core/SvgIcon/SvgIcon";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {MapToView} from "../ElementToViewMapper";

type Props = {
  element: SelectGroupElement,
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

export default function SelectGroupView({element}: Props) {
  const inputEl = useRef(null);

  let onChange: (value) => void = (value) => {
    setInputValue(value);
    console.log(value);
  };
  const [inputTitle, setInputTitle] = React.useState("");
  const [inputValue, setInputValue] = React.useState();
  const [inputName, setInputName] = React.useState();
  const [elements, setInputElements] = React.useState<SelectBoxElement[]>([]);
  function handleChange(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  React.useEffect(() => {

    let callbackSub = element.checkChangeCallback.subscribe({
      next: (v) => onChange = v == null ? () => {
      } : v
    });

    let titleSub = element.selectBoxText.subscribe({
      next: (v) => setInputTitle(v)
    });
    let valueSub = element.selectBoxValue.subscribe({
      next: (v) => setInputValue(v)
    });
    let nameSub = element.selectBoxName.subscribe({
      next: (v) => setInputName(v)
    });
    let elementsSub = element.selectBoxElements.subscribe({
      next: (v) => setInputElements(v)
    });


    return () => {
      callbackSub.unsubscribe();
      titleSub.unsubscribe();
      valueSub.unsubscribe();
      nameSub.unsubscribe();
      elementsSub.unsubscribe();
    }
  })
  function renderChildren() {
    return elements.map((v, i) => <MapToView element={v} key={`${v.type}_${i}`} weight={0} />);
  }
  return (
    <RadioGroup

      aria-label={inputTitle}
      name={inputName}
      value={inputValue}
      onChange={handleChange}
    >
      {renderChildren()}
    </RadioGroup>
  )

}
