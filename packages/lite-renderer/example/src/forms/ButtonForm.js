import { BehaviorSubject } from "rxjs";
import {
  Button,
  ButtonColor,
  FormController,
  Container,
  ContainerDirection,
  Label,
  ButtonVariant
} from "lite-renderer";

export default class ButtonForm extends FormController {
  constructor(props) {
    super();
    console.log(props);
  }

  inject(injector) {
    super.inject(injector);
    let service = injector.inject("TestService");
    console.log(service.value);
  }

  ready() {
    if (this.snackService == null) return;
    this.snackService.error("Error");
    this.snackService.info("Info");
    this.snackService.warning("Warning");
    this.snackService.success("Success");
    this.snackService.show("Show");
  }

  loading = new BehaviorSubject(true);
  disabled = new BehaviorSubject(true);
  variant = new BehaviorSubject(ButtonVariant.Contained);

  handleModals() {
    this.modalService.enqueue(Label("modal 1"));
    this.modalService.enqueue(Label("modal 2"));
    this.modalService.enqueue(Label("modal 3"));
    this.modalService.enqueue(
      Button("Close").onClick(() => this.modalService.closeCurrent()),
      { visibleHeaders: false }
    );
  }

  elements = [
    Label("Colors"),
    Container([
      Button("ButtonColor.Default")
        .colors(ButtonColor.Default)
        .variant(this.variant)
        .onClick(() => this.handleModals()),
      Button("ButtonColor.Inherit")
        .colors(ButtonColor.Inherit)
        .variant(this.variant),
      Button("ButtonColor.Primary")
        .colors(ButtonColor.Primary)
        .variant(this.variant),
      Button("ButtonColor.Secondary")
        .colors(ButtonColor.Secondary)
        .variant(this.variant)
    ])
      .direction(ContainerDirection.Row)
      .flex([1, 1, 1, 1]),

    Label("Loading"),
    Container([
      Button("Toggle loading").onClick(() =>
        this.loading.next(!this.loading.value)
      ),
      Button("ButtonColor.Default")
        .colors(ButtonColor.Default)
        .onClick(() => alert("ButtonColor.Default"))
        .variant(this.variant)
        .loading(this.loading),
      Button("ButtonColor.Inherit")
        .colors(ButtonColor.Inherit)
        .onClick(() => alert("ButtonColor.Inherit"))
        .variant(this.variant)
        .loading(this.loading),
      Button("ButtonColor.Primary")
        .colors(ButtonColor.Primary)
        .onClick(() => alert("ButtonColor.Primary"))
        .variant(this.variant)
        .loading(this.loading),
      Button("ButtonColor.Secondary")
        .colors(ButtonColor.Secondary)
        .onClick(() => alert("ButtonColor.Secondary"))
        .variant(this.variant)
        .loading(this.loading)
    ])
      .direction(ContainerDirection.Row)
      .flex([1, 1, 1, 1, 1]),
    Label("Disabled"),
    Container([
      Button("Toggle Disabled").onClick(() =>
        this.disabled.next(!this.disabled.value)
      ),
      Button("ButtonColor.Default")
        .colors(ButtonColor.Default)
        .onClick(() => alert("ButtonColor.Default"))
        .variant(this.variant)
        .disabled(this.disabled),
      Button("ButtonColor.Inherit")
        .colors(ButtonColor.Inherit)
        .onClick(() => alert("ButtonColor.Inherit"))
        .variant(this.variant)
        .disabled(this.disabled),
      Button("ButtonColor.Primary")
        .colors(ButtonColor.Primary)
        .onClick(() => alert("ButtonColor.Primary"))
        .variant(this.variant)
        .disabled(this.disabled),
      Button("ButtonColor.Secondary")
        .colors(ButtonColor.Secondary)
        .onClick(() => alert("ButtonColor.Secondary"))
        .variant(this.variant)
        .disabled(this.disabled)
    ])
      .direction(ContainerDirection.Row)
      .flex([1, 1, 1, 1, 1]),
    Label("Variant text"),
    Container([
      Button("Variant : Text").onClick(() =>
        this.variant.next(ButtonVariant.Text)
      ),
      Button("Variant : Contained").onClick(() =>
        this.variant.next(ButtonVariant.Contained)
      ),
      Button("Variant : Outlined").onClick(() =>
        this.variant.next(ButtonVariant.Outlined)
      )
    ])
      .direction(ContainerDirection.Row)
      .flex([1, 1, 1])
  ];
}
