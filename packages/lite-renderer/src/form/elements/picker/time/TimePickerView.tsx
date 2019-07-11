import { TimePickerElement } from './TimePickerElement';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import jMoment from "moment-jalaali";
import moment from "moment";
import JalaliUtils from "@date-io/jalaali";

import {
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
type Props = {
  element: TimePickerElement
}

export default function TimePickerView({ element }: Props) {
  const [selectedDate, handleDateChange] = React.useState(moment());
  const [text, setText] = React.useState(moment());
  const [time, setTime] = React.useState();
  const [displayType, setDisplayType] = React.useState();
  const [textSize, setTextSize] = React.useState();
  const [textStyle, setTextStyle] = React.useState();
  const [noWrap, setNoWrap] = React.useState();
  const [gutterBottom, setGutterBottom] = React.useState();
  jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

  React.useEffect(() => {
    let textSub = element.value.subscribe({
      next: (v) => setText(v)
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

    return () => {
      textSub.unsubscribe();
      timeSub.unsubscribe();
      textSizeSub.unsubscribe();
      displayTypeSub.unsubscribe();
      noWrap.unsubscribe();
      gutterBottomSub.unsubscribe();
    }

  })
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">

      <TimePicker
        okLabel="تأیید"
        cancelLabel="لغو"
        labelFunc={date => (date ? date.format("hh:mm") : "")}
        value={selectedDate}
        ampm={false}
        onChange={handleDateChange}
        onAccept={(date)=>{
          let myDate:Date=(date as any)._d;
          console.log(myDate.getHours()+":"+myDate.getMinutes());
          setTime(myDate.getHours()+":"+myDate.getMinutes())
          if (myDate == selectedDate) return;
          element.TimePickerTime.next(myDate.getHours()+":"+myDate.getMinutes());}}
      />

    </MuiPickersUtilsProvider>
    /*</MuiPickersUtilsProvider>
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <DatePicker 
        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
        value={selectedDate}
        okLabel={"salam"}
        onAccept={(date) => {
          let myDate:Date=(date as any)._d;
          console.log(myDate)
          setTime(myDate)
          if (myDate == selectedDate) return;
   element.datePickerTime.next(myDate.toString());
        }}
        onChange={handleDateChange}
        animateYearScrolling={true}
      />
    </MuiPickersUtilsProvider>*/
  )


}
