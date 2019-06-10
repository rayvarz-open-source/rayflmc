import { BehaviorSubject } from "rxjs";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import * as e from 'lite-renderer'

export default class SampleForm extends e.FormController {

    name = new BehaviorSubject("");
    family = new BehaviorSubject("");

    elements = [
        e.Label("Name"),
        e.TextInput(this.name),
        e.Label("Family"),
        e.TextInput(this.family),
        e.Label(null)
            .text(combineLatest(this.name, this.family).pipe(map((([name, family]) => `My name is ${name} and my family name is ${family}`)))),
        e.Button("Clear")
            .onTap(() => { this.name.next(""); this.family.next("") })
    ]

}
