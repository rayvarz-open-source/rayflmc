import MaskedInput from "react-text-mask";
import * as React from "react";
import { Mask } from "./TextInputElementAttributes";

interface Props {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export function TextInputMask(mask: Mask) {
  return (props: Props) => {
    const { inputRef, ...other } = props;

    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={mask}
        placeholderChar={"\u2000"}
        showMask
      />
    );
  };
}
