import { BehaviorSubject } from "rxjs";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import * as e from 'lite-renderer'

export default class SampleForm extends e.FormController {

    name = new BehaviorSubject("");
    family = new BehaviorSubject("");

    elements = [
        // e.Label("text1").textSize(e.TextSize.H2),
        // e.Label("Name").gutterBottom(true),
        // e.Label("Name").textStyle(e.StyleColor.Primary),
        // e.Label("Name").noWrap(true),
        // e.Label("Name").textAlign(e.TextAlignment.Right),
        // e.Label("Name").displayType(e.DisplayType.Inline),
        // e.Label("Family").displayType(e.DisplayType.Inline),
        // e.TextInput(this.name).title("name").styleType(e.TextInputStyleType.Outlined).errorOrDescriptionText("test for desc"),
        // e.TextInput(this.name).title("name")
        //   .styleType(e.TextInputStyleType.Filled)
        //   .placeHolder("place holder test")
        //   .errorOrDescriptionText("test for desc")
        //   .endIcon("person")
        //   .onEndIconClick(()=>{console.log("test")}),
        // e.TextInput(this.name).title("name").isError(true).errorOrDescriptionText("test for desc").startIcon("star").onStartIconClick(()=>{alert("show")}),
        // e.TextInput(this.name).title("name").errorOrDescriptionText("test for desc").isDisable(false).endText("kg").isPassword(true),
        // e.Label("Family"),
        // e.TextInput(this.family),
        // e.Label(null)
        //     .text(combineLatest(this.name, this.family).pipe(map((([name, family]) => `My name is ${name} and my family name is ${family}`)))),
        e.Grid()
      //   e.Button("text")
      //     .styleType(e.StyleType.Text)
      //       .onTap(() => { this.name.next(""); this.family.next("") }),
      // e.Button("text primary")
      //   .styleType(e.StyleType.Text)
      //   .styleColor(e.StyleColor.Primary)
      //   .onTap(() => { this.name.next(""); this.family.next("") }),
      // e.Button("outline")
      //   .styleType(e.StyleType.Outlined)
      //   .fullWidth(true)
      //   .onTap(() => { this.name.next(""); this.family.next("") }),
      // e.Button("outline secondary")
      //   .styleType(e.StyleType.Outlined)
      //   .styleColor(e.StyleColor.Secondary)
      //   .onTap(() => { this.name.next(""); this.family.next("") }),
      // e.Button("contained")
      //   .styleType(e.StyleType.Contained)
      //
      //   .onTap(() => { alert ("test") }),
      // e.Button("contained primary")
      //   .styleType(e.StyleType.Contained)
      //   .loading(true)
      //   .disabled(false)
      //   .styleColor(e.StyleColor.Primary)
      //   .icon("person")
      //   .size(e.Size.Small)
      //   .iconAlign(e.Alignment.Right)
      //   .onTap(() => { alert ("test") }),
      // e.Button("contained")
      //   .onTap(() => { this.name.next(""); this.family.next("") }),
    ]

}
