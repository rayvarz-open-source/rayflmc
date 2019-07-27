import { TextInputElement } from './TextInputElement';
import * as React from 'react';
import { Value, Label, Placeholder, Disabled, HelperText, Error, StartText, EndText, StartIcon, EndIcon, Variant, Password, Multiline, Rows, RowsMax, Direction, OnEndIconClick, OnStartIconClick } from './TextInputElementAttributes';
import { Visibility } from '../base/BaseElement';
import { TextField, InputAdornment, IconButton, Icon } from '@material-ui/core';

type Props = {
  element: TextInputElement,
  weight: number
}

export default function TextInputView({ element, weight }: Props) {

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [value, setValue] = React.useState<Value>('');
  const [label, setLabel] = React.useState<Label>(undefined);
  const [placeholder, setPlaceholder] = React.useState<Placeholder>(undefined);
  const [disabled, setDisabled] = React.useState<Disabled>(false);
  const [helperText, setHelperText] = React.useState<HelperText>(undefined);
  const [isInError, setIsInError] = React.useState<IsInError>(false);
  const [startText, setStartText] = React.useState<StartText>(undefined);
  const [endText, setEndText] = React.useState<EndText>(undefined);
  const [startIcon, setStartIcon] = React.useState<StartIcon>(undefined);
  const [endIcon, setEndIcon] = React.useState<EndIcon>(undefined);
  const [variant, setVariant] = React.useState<Variant>('standard');
  const [password, setPassword] = React.useState<Password>(false);
  const [multiline, setMultiline] = React.useState<Multiline>(false);
  const [rows, setRows] = React.useState<Rows>(0);
  const [rowsMax, setRowsMax] = React.useState<RowsMax>(0);
  const [direction, setDirection] = React.useState<Direction>('ltr');
  const [onEndIconClick, setOnEndIconClick] = React.useState<OnEndIconClick>(undefined);
  const [onStartIconClick, setOnStartIconClick] = React.useState<OnStartIconClick>(undefined);
  const [visibility, setVisibility] = React.useState<Visibility>('show');

  React.useEffect(() => {

    let valueSub = element.valueContainer.subscribe({ next: v => setValue(v) });
    let labelSub = element.labelContainer.subscribe({ next: v => setLabel(v) });
    let placeholderSub = element.placeholderContainer.subscribe({ next: v => setPlaceholder(v) });
    let disabledSub = element.disabledContainer.subscribe({ next: v => setDisabled(v) });
    let helperTextSub = element.helperTextContainer.subscribe({ next: v => setHelperText(v) });
    let isInErrorSub = element.isInErrorContainer.subscribe({ next: v => setIsInError(v) });
    let startTextSub = element.startTextContainer.subscribe({ next: v => setStartText(v) });
    let endTextSub = element.endTextContainer.subscribe({ next: v => setEndText(v) });
    let startIconSub = element.startIconContainer.subscribe({ next: v => setStartIcon(v) });
    let endIconSub = element.endIconContainer.subscribe({ next: v => setEndIcon(v) });
    let variantSub = element.variantContainer.subscribe({ next: v => setVariant(v) });
    let passwordSub = element.passwordContainer.subscribe({ next: v => setPassword(v) });
    let multilineSub = element.multilineContainer.subscribe({ next: v => setMultiline(v) });
    let rowsSub = element.rowsContainer.subscribe({ next: v => setRows(v) });
    let rowsMaxSub = element.rowsMaxContainer.subscribe({ next: v => setRowsMax(v) });
    let directionSub = element.directionContainer.subscribe({ next: v => setDirection(v) });
    let onEndIconClickSub = element.onEndIconClickContainer.subscribe({ next: v => setOnEndIconClick(v) });
    let onStartIconClickSub = element.onStartIconClickContainer.subscribe({ next: v => setOnStartIconClick(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

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
      passwordSub.unsubscribe();
      multilineSub.unsubscribe();
      rowsSub.unsubscribe();
      rowsMaxSub.unsubscribe();
      directionSub.unsubscribe();
      onEndIconClickSub.unsubscribe();
      onStartIconClickSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  // handles bidirectional bindings
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value == value) return;
    element.valueContainer.next(event.target.value);
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
      return (<InputAdornment position="end">{endText}</InputAdornment>);

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
      return (<InputAdornment position="start">{startText}</InputAdornment>);

    return undefined;
  }

  return (
    <TextField
      style={
        {
          ...element.getVisibilityStyle(visibility),
          ...element.getWeightStyle(weight)
        }
      }
      placeholder={placeholder}
      variant={variant as any}
      multiline={multiline}
      rowsMax={rowsMax}
      inputProps={{ dir: direction }}
      rows={rows}
      type={password ? 'password' : 'text'}
      label={label}
      helperText={helperText}
      onChange={handleChange}
      value={value}
      disabled={disabled}
      error={isInError}
      InputProps={{
        endAdornment: createEndAdornment(),
        startAdornment: createStartAdornment(),
      }}

    />
  );

}
