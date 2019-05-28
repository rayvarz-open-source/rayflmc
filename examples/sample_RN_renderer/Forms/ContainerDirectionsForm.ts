import FormController from "../flmc/FormController/FormController";
import Container, { Direction } from "../flmc/FormController/Elements/ContainerElement";
import Button from "../flmc/FormController/Elements/ButtonElement";
import Label from "../flmc/FormController/Elements/LabelElement";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

export default class DirectionsForm extends FormController {

    direction = new BehaviorSubject<boolean>(false);

    elements = [
        Container([
            Button("BTN1"),
            Label("LBL1"),
        ]).direction(this.direction.pipe(map(v => v ? Direction.Row : Direction.Column))),
        Label("=================================="),
        Container([
            Button("BTN2"),
            Label("LBL2"),
        ]).direction(this.direction.pipe(map(v => v ? Direction.Column : Direction.Row))),
        Button("Toggle Direction").onTap(() => this.direction.next(!this.direction.value))
    ]

}
