import { TimePickerElement } from './TimePickerElement';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import jMoment from "moment-jalaali";
import moment from "moment";
import JalaliUtils from "@date-io/jalaali";

import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {VisibilityType} from "../../../..";
type Props = {
  element: TimePickerElement
}

export default function TimePickerView({ element }: Props) {
  const [selectedDate, handleDateChange] = React.useState(moment());
  const [text, setText] = React.useState(moment());
  const [labelText, setTitle] = React.useState<string>();
  const [placeHolder, setPlaceHolder] = React.useState<string>();
  const [okLabel, setOkLabel] = React.useState();
  const [cancelLabel, setCancelLabel] = React.useState();
  const [time, setTime] = React.useState();
  const [displayType, setDisplayType] = React.useState();
  const [textSize, setTextSize] = React.useState();
  const [textStyle, setTextStyle] = React.useState();
  const [noWrap, setNoWrap] = React.useState();
  const [gutterBottom, setGutterBottom] = React.useState();
  const [visibility, setVisibility] = React.useState('');
  //let labelText="test for label";
  jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

  React.useEffect(() => {
    let textSub = element.value.subscribe({
      next: (v) => setText(v)
    });
    let titleSub = element.timePickerTitle.subscribe(
    {
      next: (v) =>{
        setTitle(v)
      }
    });
    let placeHolderSub = element.timePickerPlaceHolder.subscribe({
      next: (v) => setPlaceHolder(v)
    });
    let okLabelSub = element.timePickerOkLabel.subscribe({
      next: (v) => setOkLabel(v)
    });
    let cancelLabelSub = element.timePickerCancelLabel.subscribe({
      next: (v) => setCancelLabel(v)
    });
    let timeSub = element.TimePickerTime.subscribe({
      next: (v) => setTime(v)
    });
    let textSizeSub = element.labelTextSize.subscribe({
      next: (v) => setTextSize(v)
    });
    let displayTypeSub = element.labelDisplayType.subscribe({
      next: (v) => setDisplayType(v)
    });
    let noWrap = element.labelIsNoWrap.subscribe({
      next: (v) => setNoWrap(v)
    });
    let gutterBottomSub = element.labelIsGutterBottom.subscribe({
      next: (v) => setGutterBottom(v)
    });
    let visibilitySub = element.elementVisibility.subscribe({
      next: (v) => setVisibility(v)
    });
    return () => {
      textSub.unsubscribe();
      timeSub.unsubscribe();
      textSizeSub.unsubscribe();
      displayTypeSub.unsubscribe();
      noWrap.unsubscribe();
      gutterBottomSub.unsubscribe();
      visibilitySub.unsubscribe();
      placeHolderSub.unsubscribe();
      okLabelSub.unsubscribe();
      cancelLabelSub.unsubscribe();
      titleSub.unsubscribe();
    }

  })
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <KeyboardTimePicker
        style={visibility == VisibilityType.Gone ? element.goneStyle : visibility == VisibilityType.Hidden ? element.hiddenStyle : element.showStyle}
        okLabel={okLabel}
        label={labelText}
        inputVariant={"outlined"}
        cancelLabel={cancelLabel}
        placeholder={placeHolder}
        labelFunc={date => (date ? date.format("hh:mm") : "")}
        value={selectedDate}
        ampm={false}
        clea
        onChange={handleDateChange}
        onAccept={(date)=>{
          let myDate:Date=(date as any)._d;
          console.log(myDate.getHours()+":"+myDate.getMinutes());
          setTime(myDate.getHours()+":"+myDate.getMinutes())
          if (myDate == selectedDate) return;
          element.TimePickerTime.next(myDate.getHours()+":"+myDate.getMinutes());}}
      />
    </MuiPickersUtilsProvider>
  )


}
