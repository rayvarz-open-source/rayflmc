import { Checkbox, FormControlLabel, Radio, Switch } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import * as React from "react";
import { Visibility } from "../base/BaseElement";
import { SelectBoxElement } from "./SelectBoxElement";
import { Colors, Disabled, Label, LabelPlacement, SelectedValue, Value, Variant } from "./SelectBoxElementAttributes";
import { SelectBoxVariant } from "./SelectBoxVariant";

type Props<T> = {
  element: SelectBoxElement<T>;
  weight: number;
};

export default function SelectBoxView({ element, weight }: Props<any>) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [value, setValue] = React.useState<Value<any>>(() => element.valueContainer.value);
  const [selectedValue, setSelectedValue] = React.useState<SelectedValue<any>>(() => element.selectedValueContainer.value);
  const [label, setLabel] = React.useState<Label>(() => element.labelContainer.value);
  const [labelPlacement, setLabelPlacement] = React.useState<LabelPlacement>(() => element.labelPlacementContainer.value);
  const [variant, setVariant] = React.useState<Variant>(() => element.variantContainer.value);
  const [disabled, setDisabled] = React.useState<Disabled>(() => element.disabledContainer.value);
  const [colors, setColors] = React.useState<Colors>(() => element.colorsContainer.value);
  const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

  React.useEffect(() => {
    let valueSub = element.valueContainer.subscribe({ next: v => setValue(v) });
    let selectedValueSub = element.selectedValueContainer.subscribe({ next: v => setSelectedValue(v) });
    let labelSub = element.labelContainer.subscribe({ next: v => setLabel(v) });
    let labelPlacementSub = element.labelPlacementContainer.subscribe({ next: v => setLabelPlacement(v) });
    let variantSub = element.variantContainer.subscribe({ next: v => setVariant(v) });
    let disabledSub = element.disabledContainer.subscribe({ next: v => setDisabled(v) });
    let colorsSub = element.colorsContainer.subscribe({ next: v => setColors(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      valueSub.unsubscribe();
      selectedValueSub.unsubscribe();
      labelSub.unsubscribe();
      labelPlacementSub.unsubscribe();
      variantSub.unsubscribe();
      disabledSub.unsubscribe();
      colorsSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    if (checked) element.valueContainer.next(selectedValue);
    else element.valueContainer.next(null);
  }

  function createSelectBox() {
    let checked = value === selectedValue;

    switch (variant) {
      case SelectBoxVariant.CheckBox:
        return <Checkbox color={colors} disabled={disabled} checked={checked} onChange={handleChange} />;
      case SelectBoxVariant.Radio:
        return <Radio color={colors} disabled={disabled} checked={checked} onChange={handleChange} />;
      case SelectBoxVariant.Like:
        return (
          <Checkbox
            color={colors}
            disabled={disabled}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={checked}
            onChange={handleChange}
          />
        );
      case SelectBoxVariant.Switch:
        return <Switch color={colors} checked={checked} onChange={handleChange} disabled={disabled} />;
    }
  }

  let view: React.ReactElement;

  if (label == null) view = createSelectBox();
  else view = <FormControlLabel control={createSelectBox()} label={label} labelPlacement={labelPlacement} />;

  return (
    <div
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }}
    >
      {view}
    </div>
  );
}
