import FormController from "../flmc/FormController/FormController";
import Label from "../flmc/FormController/Elements/LabelElement";
import TextInput from "../flmc/FormController/Elements/TextInputElement";
import { BehaviorSubject } from "rxjs";
import { string } from "prop-types";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import Button from "../flmc/FormController/Elements/ButtonElement";

export default class SampleForm extends FormController {

    name = new BehaviorSubject<string>("");
    family = new BehaviorSubject<string>("");

    elements = [
        Label("Name"),
        TextInput(this.name),
        Label("Family"),
        TextInput(this.family),
        Label(null)
            .text(combineLatest(this.name, this.family).pipe(map((([name, family]) => `My name is ${name} and my family name is ${family}`)))),
        Button("Clear")
            .onTap(() => { this.name.next(""); this.family.next("") })
    ]

}