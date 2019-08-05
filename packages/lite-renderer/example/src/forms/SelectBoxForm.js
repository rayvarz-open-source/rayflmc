import { BehaviorSubject } from "rxjs";
import { Button, ButtonColor, FormController, Container, ContainerDirection, Label,SelectBoxLabelPlacement, ButtonVariant, SelectBox, SelectBoxVariant } from 'lite-renderer'

export default class SelectBoxForm extends FormController {
    valueVariants = new BehaviorSubject(null);
    variant = new BehaviorSubject(SelectBoxVariant.CheckBox);

    elements = [
        Label("Variants: "),
        Container([
            Button("Variant : CheckBox").onClick(() => this.variant.next(SelectBoxVariant.CheckBox)),
            Button("Variant : Radio").onClick(() => this.variant.next(SelectBoxVariant.Radio)),
            Button("Variant : Switch").onClick(() => this.variant.next(SelectBoxVariant.Switch)),
            Button("Variant : Like").onClick(() => this.variant.next(SelectBoxVariant.Like)),
        ])
            .direction(ContainerDirection.Row)
            .flex([1, 1, 1, 1]),
        Container([
            SelectBox(this.valueVariants, 1).variant(this.variant),
            SelectBox(this.valueVariants, 2).variant(this.variant),
            SelectBox(this.valueVariants, 3).variant(this.variant),
            SelectBox(this.valueVariants, 3).variant(this.variant).disabled(true),
        ])
            .direction(ContainerDirection.Row)
            .flex([1, 1, 1, 1]),
        SelectBox(this.valueVariants, 4).variant(this.variant).label("Default Label"),
        SelectBox(this.valueVariants, 4).variant(this.variant)
            .labelPlacement(SelectBoxLabelPlacement.Top)
            .label("SelectBoxLabelPlacement.Top"),
        SelectBox(this.valueVariants, 4).variant(this.variant)
            .labelPlacement(SelectBoxLabelPlacement.End)
            .label("SelectBoxLabelPlacement.End"),
        SelectBox(this.valueVariants, 4).variant(this.variant)
            .labelPlacement(SelectBoxLabelPlacement.Start)
            .label("SelectBoxLabelPlacement.Start"),
        SelectBox(this.valueVariants, 4).variant(this.variant)
            .labelPlacement(SelectBoxLabelPlacement.Bottom)
            .label("SelectBoxLabelPlacement.Bottom"),
    ]

}
