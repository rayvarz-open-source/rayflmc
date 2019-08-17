import {
  Button,
  Container,
  ContainerDirection,
  FormController,
  Space,
  TextDirection,
  TextInput,
  TextInputStyleType,
  TextInputValidations
} from "lite-renderer";
import { BehaviorSubject } from "rxjs";

export default class TextInputForm extends FormController {
  value = new BehaviorSubject("");
  variant = new BehaviorSubject(TextInputStyleType.Outlined);

  elements = [
    Container([
      Button("Variant : Outlined").onClick(() => this.variant.next(TextInputStyleType.Outlined)),
      Button("Variant : Filled").onClick(() => this.variant.next(TextInputStyleType.Filled)),
      Button("Variant : Standard").onClick(() => this.variant.next(TextInputStyleType.Standard))
    ])
      .direction(ContainerDirection.Row)
      .flex([1, 1, 1]),
    TextInput("static value")
      .variant(this.variant)
      .label("static"),
    TextInput(this.value.asObservable())
      .variant(this.variant)
      .label("static that is connected to a observable"),
    TextInput(this.value)
      .variant(this.variant)
      .inputType("text")
      .label("test"),
    TextInput(this.value)
      .variant(this.variant)
      .label("placeholder")
      .inputType("number")
      .placeholder("this is an example palceholder with a label"),
    TextInput(this.value)
      .variant(this.variant)
      .inputType("email")
      .placeholder("this is an example palceholder without a label"),
    TextInput(this.value)
      .variant(this.variant)
      .disabled(true)
      .label("disabled text input"),
    TextInput(this.value)
      .variant(this.variant)
      .label("Helper Text")
      .helperText("This is a helper text"),
    TextInput(this.value)
      .variant(this.variant)
      .label("Helper Text")
      .helperText("This is a helper text in error mode")
      .isInError(true),
    TextInput(this.value)
      .variant(this.variant)
      .label("Start Text")
      .startText("#"),
    TextInput(this.value)
      .variant(this.variant)
      .label("End Text")
      .endText("%"),
    TextInput(this.value)
      .variant(this.variant)
      .label("End and Start Text")
      .endText("#")
      .startText("$"),
    TextInput(this.value)
      .variant(this.variant)
      .label("Start Icon")
      .startIcon("check_circle"),
    TextInput(this.value)
      .variant(this.variant)
      .label("End Icon")
      .endIcon("check_circle"),
    TextInput(this.value)
      .variant(this.variant)
      .label("End and Start Icon")
      .endIcon("check_circle")
      .startIcon("check_circle"),
    TextInput(this.value)
      .variant(this.variant)
      .label("Password mode"),
    TextInput(this.value)
      .variant(this.variant)
      .label("MultiLine")
      .multiline(true),
    TextInput(this.value)
      .variant(this.variant)
      .label("MultiLine with 4 rows")
      .multiline(true)
      .rows(4),
    TextInput(this.value)
      .variant(this.variant)
      .label("MultiLine with 4 rowsMax")
      .multiline(true)
      .rowsMax(4),
    TextInput(this.value)
      .variant(this.variant)
      .label("Direction RTL")
      .direction(TextDirection.Rtl),
    Space().height(35),
    TextInput(this.value)
      .variant(this.variant)
      .label("Select Options")
      .direction(TextDirection.Rtl)
      .selectOptions(["Options 1", "Option 2"]),
    Space().height(35),
    TextInput(this.value)
      .variant(this.variant)
      .label("Icon Clicks")
      .endIcon("check_circle")
      .onEndIconClick(() => alert("end icon clicked"))
      .startIcon("check_circle")
      .onStartIconClick(() => alert("start icon clicked")),
    TextInput(this.value)
      .variant(this.variant)
      .label("With validation ( must contain 'a' )")
      .validations([TextInputValidations.contains("a")]),
    TextInput(this.value)
      .variant(this.variant)
      .label("With validation ( noEmpty )")
      .validations([TextInputValidations.notEmpty()]),
    Button("Validate").onClick(() => this.validate())
  ];
}
