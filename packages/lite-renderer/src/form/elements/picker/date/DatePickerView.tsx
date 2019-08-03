import {DatePickerElement} from './DatePickerElement';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import jMoment from "moment-jalaali";
import * as moment_ from 'moment';
import JalaliUtils from "@date-io/jalaali";
const moment = moment_;

import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {VisibilityType} from "../../../..";
import TextField from "@material-ui/core/TextField";
import { Visibility } from '../../base/BaseElement';

type Props = {
  element: DatePickerElement,
  weight:number
}

export default function DatePickerView({element,weight}: Props) {
  const [selectedDate, handleDateChange] = React.useState(moment());
  const [text, setText] = React.useState(moment());
  const [time, setTime] = React.useState();
  const [displayType, setDisplayType] = React.useState();
  const [textSize, setTextSize] = React.useState();
  const [textStyle, setTextStyle] = React.useState();
  const [noWrap, setNoWrap] = React.useState();
  const [gutterBottom, setGutterBottom] = React.useState();
  const [visibility, setVisibility] = React.useState<Visibility>(VisibilityType.Show);

  jMoment.loadPersian({dialect: "persian-modern", usePersianDigits: true});

  React.useEffect(() => {
    let textSub = element.value.subscribe({
      next: (v) => setText(v as any)
    });
    let timeSub = element.datePickerTime.subscribe({
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
    let visibilitySub = element.elementVisibilityContainer.subscribe({
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

    }

  })
  return (

    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <DatePicker
        style={
          {
            ...element.getVisibilityStyle(visibility),
            ...element.getWeightStyle(weight)
          }
        }        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
        value={time}
        okLabel="تأیید"
        cancelLabel="لغو"
        inputVariant={"filled"}
        onAccept={(date) => {
          let myDate: Date = (date as any)._d;
          
          element.datePickerTime.next(myDate);
        }}
        onChange={handleDateChange as any}
        animateYearScrolling={true}
      />
    </MuiPickersUtilsProvider>
  )


}
