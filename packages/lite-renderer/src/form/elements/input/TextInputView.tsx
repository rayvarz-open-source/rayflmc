import {
  FilledInput,
  FormControl,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { useTheme } from "@material-ui/styles";
import * as React from "react";
import useFunctionAsState from "../../../custom-hooks/function-state";
import { Visibility } from "../base/BaseElement";
import { VisibilityType } from "../share/VisibilityType";
import { TextInputElement } from "./TextInputElement";
import {
  Direction,
  Disabled,
  EndIcon,
  EndText,
  HelperText,
  InputType,
  IsInError,
  Label,
  Mask,
  MaxLength,
  Multiline,
  NumberFormatter,
  OnEndIconClick,
  OnStartIconClick,
  Placeholder,
  PlaceholderDirection,
  Rows,
  RowsMax,
  SelectOptions,
  StartIcon,
  StartText,
  Value,
  Variant
} from "./TextInputElementAttributes";
import { TextInputMask } from "./TextInputMask";
import { TextInputNumberFormatter } from "./TextInputNumberFormatter";
import { TextInputStyleType } from "./TextInputStyleType";

type Props = {
  element: TextInputElement;
  weight: number;
};

export default function TextInputView({ element, weight }: Props) {
  const theme = useTheme<Theme>();

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [value, setValue] = React.useState<Value>(
    () => element.valueContainer.value
  );
  const [label, setLabel] = React.useState<Label>(
    () => element.labelContainer.value
  );
  const [placeholder, setPlaceholder] = React.useState<Placeholder>(
    () => element.placeholderContainer.value
  );
  const [disabled, setDisabled] = React.useState<Disabled>(
    () => element.disabledContainer.value
  );
  const [helperText, setHelperText] = React.useState<HelperText>(
    () => element.helperTextContainer.value
  );
  const [isInError, setIsInError] = React.useState<IsInError>(
    () => element.isInErrorContainer.value
  );
  const [startText, setStartText] = React.useState<StartText>(
    () => element.startTextContainer.value
  );
  const [endText, setEndText] = React.useState<EndText>(
    () => element.endTextContainer.value
  );
  const [startIcon, setStartIcon] = React.useState<StartIcon>(
    () => element.startIconContainer.value
  );
  const [endIcon, setEndIcon] = React.useState<EndIcon>(
    () => element.endIconContainer.value
  );
  const [variant, setVariant] = React.useState<Variant>(
    () => element.variantContainer.value
  );
  const [inputType, setInputType] = React.useState<InputType>(
    () => element.inputTypeContainer.value
  );
  const [multiline, setMultiline] = React.useState<Multiline>(
    () => element.multilineContainer.value
  );
  const [rows, setRows] = React.useState<Rows>(
    () => element.rowsContainer.value
  );
  const [rowsMax, setRowsMax] = React.useState<RowsMax>(
    () => element.rowsMaxContainer.value
  );
  const [direction, setDirection] = React.useState<Direction>(
    () => element.directionContainer.value
  );
  const [placeholderDirection, setPlaceholderDirection] = React.useState<
    PlaceholderDirection
  >(() => element.placeholderDirectionContainer.value);
  const [onEndIconClick, setOnEndIconClick] = useFunctionAsState<
    OnEndIconClick
  >(undefined);
  const [onStartIconClick, setOnStartIconClick] = useFunctionAsState<
    OnStartIconClick
  >(undefined);
  const [numberFormatter, setNumberFormatter] = React.useState<NumberFormatter>(
    () => element.numberFormatterContainer.value
  );
  const [mask, setMask] = React.useState<Mask>(
    () => element.maskContainer.value
  );
  const [selectOptions, setSelectOptions] = React.useState<SelectOptions>(
    () => element.selectOptionsContainer.value
  );
  const [maxLength, setMaxLength] = React.useState<MaxLength>(
    () => element.maxLengthContainer.value
  );
  const [visibility, setVisibility] = React.useState<Visibility>(
    () => element.elementVisibilityContainer.value
  );
  const [nativeProps, setNativeProps] = React.useState(
    () => element.nativePropsContainer.value
  );
  const [onInputClick, setOnInputClick] = useFunctionAsState<
    VoidFunction | undefined
  >(undefined);
  React.useEffect(() => {
    let valueSub = element.valueContainer.subscribe({ next: v => setValue(v) });
    let labelSub = element.labelContainer.subscribe({ next: v => setLabel(v) });
    let placeholderSub = element.placeholderContainer.subscribe({
      next: v => setPlaceholder(v)
    });
    let disabledSub = element.disabledContainer.subscribe({
      next: v => setDisabled(v)
    });
    let helperTextSub = element.helperTextContainer.subscribe({
      next: v => setHelperText(v)
    });
    let isInErrorSub = element.isInErrorContainer.subscribe({
      next: v => setIsInError(v)
    });
    let startTextSub = element.startTextContainer.subscribe({
      next: v => setStartText(v)
    });
    let endTextSub = element.endTextContainer.subscribe({
      next: v => setEndText(v)
    });
    let startIconSub = element.startIconContainer.subscribe({
      next: v => setStartIcon(v)
    });
    let endIconSub = element.endIconContainer.subscribe({
      next: v => setEndIcon(v)
    });
    let variantSub = element.variantContainer.subscribe({
      next: v => setVariant(v)
    });
    let inputTypeSub = element.inputTypeContainer.subscribe({
      next: v => setInputType(v)
    });
    let multilineSub = element.multilineContainer.subscribe({
      next: v => setMultiline(v)
    });
    let rowsSub = element.rowsContainer.subscribe({ next: v => setRows(v) });
    let rowsMaxSub = element.rowsMaxContainer.subscribe({
      next: v => setRowsMax(v)
    });
    let directionSub = element.directionContainer.subscribe({
      next: v => setDirection(v)
    });
    let placeholderDirectionSub = element.placeholderDirectionContainer.subscribe(
      {
        next: v => setPlaceholderDirection(v)
      }
    );
    let onEndIconClickSub = element.onEndIconClickContainer.subscribe({
      next: v => setOnEndIconClick(v)
    });
    let onStartIconClickSub = element.onStartIconClickContainer.subscribe({
      next: v => setOnStartIconClick(v)
    });
    let numberFormatterSub = element.numberFormatterContainer.subscribe({
      next: v => setNumberFormatter(v)
    });
    let maskSub = element.maskContainer.subscribe({ next: v => setMask(v) });
    let selectOptionsSub = element.selectOptionsContainer.subscribe({
      next: v => setSelectOptions(v)
    });
    let maxLengthSub = element.maxLengthContainer.subscribe({
      next: v => setMaxLength(v)
    });
    let visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });
    const nativePropsSub = element.nativePropsContainer.subscribe({
      next: v => setNativeProps(v)
    });
    let onInputClickSub = element.onInputClickContainer.subscribe({
      next: v => setOnInputClick(v)
    });
    return () => {
      valueSub.unsubscribe();
      labelSub.unsubscribe();
      placeholderSub.unsubscribe();
      disabledSub.unsubscribe();
      helperTextSub.unsubscribe();
      isInErrorSub.unsubscribe();
      startTextSub.unsubscribe();
      endTextSub.unsubscribe();
      startIconSub.unsubscribe();
      endIconSub.unsubscribe();
      variantSub.unsubscribe();
      inputTypeSub.unsubscribe();
      multilineSub.unsubscribe();
      rowsSub.unsubscribe();
      rowsMaxSub.unsubscribe();
      directionSub.unsubscribe();
      placeholderDirectionSub.unsubscribe();
      onEndIconClickSub.unsubscribe();
      onStartIconClickSub.unsubscribe();
      numberFormatterSub.unsubscribe();
      maskSub.unsubscribe();
      selectOptionsSub.unsubscribe();
      maxLengthSub.unsubscribe();
      visibilitySub.unsubscribe();
      nativePropsSub.unsubscribe();
      onInputClickSub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  // handles bidirectional bindings
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (maxLength && event.target.value.length > maxLength) return;
    if (event.target.value == value || !element.isExternalValueContainer)
      return;
    element.valueContainer.next(event.target.value);
    if (element.isInErrorContainer.value) {
      element.validate();
    }
  }

  if (selectOptions != null) {
    let input: React.ReactNode;

    switch (variant) {
      case TextInputStyleType.Filled:
        input = <FilledInput placeholder={placeholder} />;
        break;
      case TextInputStyleType.Outlined:
        input = <OutlinedInput placeholder={placeholder} labelWidth={50} />;
        break;
      case TextInputStyleType.Standard:
        input = <Input placeholder={placeholder} />;
        break;
    }

    return (
      <FormControl
        variant={variant}
        style={{
          ...element.getVisibilityStyle(visibility),
          ...element.getWeightStyle(weight)
        }}
      >
        <InputLabel htmlFor="input-label">{label}</InputLabel>
        <Select value={value} onChange={handleChange} input={input}>
          <MenuItem value={undefined}>
            <em>-</em>
          </MenuItem>
          {selectOptions.map(v => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  // handles end text and end icon
  function createEndAdornment(): React.ReactNode | undefined {
    if (endIcon !== undefined)
      return (
        <InputAdornment position="end">
          <IconButton edge="end" onClick={onEndIconClick}>
            <Icon>{endIcon}</Icon>
          </IconButton>
        </InputAdornment>
      );
    if (endText !== undefined)
      return <InputAdornment position="end">{endText}</InputAdornment>;

    return undefined;
  }

  // handles start text and start icon
  function createStartAdornment(): React.ReactNode | undefined {
    if (startIcon !== undefined)
      return (
        <InputAdornment position="start">
          <IconButton edge="start" onClick={onStartIconClick}>
            <Icon>{startIcon}</Icon>
          </IconButton>
        </InputAdornment>
      );
    if (startText !== undefined)
      return <InputAdornment position="start">{startText}</InputAdornment>;

    return undefined;
  }

  function getDirection(): Direction {
    if (value == "" && placeholderDirection != null)
      return placeholderDirection;
    return direction == "default"
      ? theme == null
        ? "ltr"
        : theme.direction
      : direction;
  }

  function createInputComponent(): any {
    if (mask != null && numberFormatter)
      throw new Error("only one of mask and numberFormatter can be provided");
    if (mask) return TextInputMask(mask);
    if (numberFormatter) return TextInputNumberFormatter;
    return undefined;
  }

  /// TODO:
  /// this is because MaterialUi.TextField can't calculate label with for Outlined mode when
  /// style is none so when later visiblity sets to Show it doesn't have label width so labels
  /// renderes incorrectly
  /// for now we render div to avoid these situation later we should trigger label width calculation instead
  if (
    variant == TextInputStyleType.Outlined &&
    visibility == VisibilityType.Gone
  )
    return <div></div>;

  return (
    <TextField
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight),
        ...(nativeProps.style ? nativeProps.style : {})
      }}
      {...nativeProps}
      placeholder={placeholder}
      variant={variant as any}
      multiline={multiline}
      rowsMax={rowsMax}
      inputProps={{ dir: getDirection() }}
      rows={rows}
      type={inputType}
      label={label}
      onClick={onInputClick}
      helperText={helperText}
      onChange={handleChange}
      value={value}
      disabled={disabled}
      error={isInError}
      InputProps={{
        endAdornment: createEndAdornment(),
        startAdornment: createStartAdornment(),
        inputComponent: createInputComponent()
      }}
    />
  );
}
