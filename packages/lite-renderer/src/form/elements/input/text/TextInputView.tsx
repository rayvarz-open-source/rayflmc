import {TextInputElement} from './TextInputElement';
import * as React from 'react';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {TextInputStyleType} from "./TextInputStyleType";
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

type Props = {
  element: TextInputElement
}

export default function TextInputView({element}: Props) {

  const [inputValue, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [placeHolder, setPlaceHolder] = React.useState("");
  const [startIcon, setStartIcon] = React.useState("");
  const [endIcon, setEndIcon] = React.useState("");
  const [startText, setStartText] = React.useState("");
  const [endText, setEndText] = React.useState("");
  const [disabled, setDisabled] = React.useState();
  const [isInErrorMode, setIsInErrorMode] = React.useState(false);
  const [errorOrDescriptionText, setErrorOrDescriptionText] = React.useState("");
  const [styleType, setStyleType] = React.useState();
  const [isPassword, setIsPassword] = React.useState(false);
  let onEndIconClick: VoidFunction = () => {
  };
  let onStartIconClick: VoidFunction = () => {
  };


  React.useEffect(() => {
    let endIconClickSub = element.endIconClickCallback.subscribe({
      next: (v) => onEndIconClick = v == null ? () => {
      } : v
    });
    let startIconClickSub = element.startIconClickCallback.subscribe({
      next: (v) => onStartIconClick = v == null ? () => {
      } : v
    });

    let valueSub = element.textInputValue.subscribe({
      next: (v) => setValue(v)
    });

    let titleSub = element.textInputTitle.subscribe({
      next: (v) => setTitle(v)
    });
    let placeHolderSub = element.textInputPlaceHolder.subscribe({
      next: (v) => setPlaceHolder(v)
    });
    let disableSub = element.textInputDisabled.subscribe({
      next: (v) => setDisabled(v)
    });
    let isInErrorModeSub = element.textInputIsInErrorMode.subscribe({
      next: (v) => setIsInErrorMode(v)
    });
    let errorOrDescriptionTextSub = element.textInputErrorOrDescriptionText.subscribe({
      next: (v) => setErrorOrDescriptionText(v)
    });
    let startIconSub = element.textInputStartIcon.subscribe({
      next: (v) => setStartIcon(v)
    });
    let endIconSub = element.textInputEndIcon.subscribe({
      next: (v) => setEndIcon(v)
    });
    let startTextSub = element.textInputStartText.subscribe({
      next: (v) => setStartText(v)
    });
    let endTextSub = element.textInputEndText.subscribe({
      next: (v) => setEndText(v)
    });
    let styleTypeSub = element.textInputStyleType.subscribe({
      next: (v) => setStyleType(v)
    });
    let isPasswordSub = element.textInputIsPassword.subscribe({
      next: (v) => setIsPassword(v)
    });
    return () => {
      valueSub.unsubscribe();
      titleSub.unsubscribe();
      placeHolderSub.unsubscribe();
      disableSub.unsubscribe();
      isInErrorModeSub.unsubscribe();
      errorOrDescriptionTextSub.unsubscribe();
      styleTypeSub.unsubscribe();
      startIconSub.unsubscribe();
      endIconSub.unsubscribe();
      startTextSub.unsubscribe();
      endTextSub.unsubscribe();
      startIconClickSub.unsubscribe();
      endIconClickSub.unsubscribe();
      isPasswordSub.unsubscribe();
    }

  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
   // if (event.target.value == inputValue) return;
   // element.textInputValue.next(event.target.value);
   setValue(event.target.value)
  }
  function handleChanges(event) {
    if (event.value == inputValue) return;
    console.log(`updated with`,event);
    element.textInputValue.next(event.value);

  }



  function TextMaskCustom(props) {
    const {inputRef, onChange, ...other} = props;

    return (
      false ? (<MaskedInput
          ref={ref => {
            inputRef(ref ? ref.inputElement : null);
          }}
          mask={['(', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          showMask
        />) :

        (<NumberFormat
          {...other}
          onValueChange={values => {
            setValue(values.value)
          }}
          thousandSeparator
          prefix="$"
          suffix="#"

        />)
    );
  }

  return (
    <TextField
               title={name}
               placeholder={placeHolder}
               variant={styleType}
               type={isPassword ? 'password' : 'text'}
               label={title}
               helperText={errorOrDescriptionText}
               onChange={handleChange}
               value={inputValue}
               disabled={disabled}
               error={isInErrorMode}
               InputProps={{
                 endAdornment: endIcon.length > 0 ?
                   (<InputAdornment position="end">

                     <IconButton
                       edge="end"
                       aria-label="Toggle password visibility"
                       onClick={onEndIconClick}
                     >
                       <Icon>{endIcon}</Icon>
                     </IconButton>
                   </InputAdornment>) : endText.length > 0 ? (
                     <InputAdornment position="end">{endText}</InputAdornment>) : null
                 ,
                 startAdornment: startIcon.length > 0 ? (

                   <InputAdornment position="start">

                     <IconButton
                       edge="start"
                       aria-label="Toggle password visibility"
                       onClick={onStartIconClick}
                     >
                       <Icon>{startIcon}</Icon>
                     </IconButton>
                   </InputAdornment>) : startText.length > 0 ? (
                   <InputAdornment position="end">{startText}</InputAdornment>) : null,
               }}

    />
  )

}


/*
<TextField
  label={title}
  value={value}
  onChange={handleChange}
  margin="normal"
/>*/
