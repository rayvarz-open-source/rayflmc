import React from "react";
import { BehaviorSubject } from "rxjs";
import { Modal, Button, Label, FormController, Container, Space, Skeleton, Raw } from "lite-renderer";

export default class ModalForm extends FormController {
  isSampleModalOpen = new BehaviorSubject(false);
  isSampleModalWithoutCloseButtonOpen = new BehaviorSubject(false);
  isSampleModalWithTitleOpen = new BehaviorSubject(false);
  isSampleModalWithoutHeaderOpen = new BehaviorSubject(false);
  isSampleModalWithSelfHandledCloseButtonOpen = new BehaviorSubject(false);
  modalWithNoPadding = new BehaviorSubject(false);
  noBackgroundOpen = new BehaviorSubject(false);
  modalWithBigVerticalChildOpen = new BehaviorSubject(false);
  modalWithBigHorizontalChildOpen = new BehaviorSubject(false);

  elements = [
    Button("Open Sample Modal").onClick(() => this.isSampleModalOpen.next(!this.isSampleModalOpen.value)),
    Space().height(10),
    Button("Open Sample Modal without close button").onClick(() =>
      this.isSampleModalWithoutCloseButtonOpen.next(!this.isSampleModalWithoutCloseButtonOpen.value)
    ),
    Space().height(10),
    Button("Open Sample Modal with title").onClick(() =>
      this.isSampleModalWithTitleOpen.next(!this.isSampleModalWithTitleOpen.value)
    ),
    Space().height(10),
    Button("Open Sample Modal without header").onClick(() =>
      this.isSampleModalWithoutHeaderOpen.next(!this.isSampleModalWithoutHeaderOpen.value)
    ),
    Space().height(10),
    Button("Open Sample Modal with self handled close button").onClick(() =>
      this.isSampleModalWithSelfHandledCloseButtonOpen.next(!this.isSampleModalWithSelfHandledCloseButtonOpen.value)
    ),
    Space().height(10),
    Button("Open Modal with no padding").onClick(() => this.modalWithNoPadding.next(!this.modalWithNoPadding.value)),
    Space().height(10),
    Button("Open Modal with no background").onClick(() => this.noBackgroundOpen.next(!this.noBackgroundOpen.value)),
    Space().height(10),
    Button("Open Modal with big horizontal child").onClick(() =>
      this.modalWithBigHorizontalChildOpen.next(!this.modalWithBigHorizontalChildOpen.value)
    ),
    Space().height(10),
    Button("Open Modal with big vertical child").onClick(() =>
      this.modalWithBigVerticalChildOpen.next(!this.modalWithBigVerticalChildOpen.value)
    ),

    Modal(Container([Label("This is a sample modal")])).open(this.isSampleModalOpen),
    Modal(Container([Label("This is a sample modal without close button")]))
      .visibleHeaderCloseButton(false)
      .open(this.isSampleModalWithoutCloseButtonOpen),

    Modal(Container([Label("This is a sample modal with title")]))
      .title("This is a title")
      .open(this.isSampleModalWithTitleOpen),

    Modal(Container([Label("This is a sample modal without header")]))
      .visibleHeader(false)
      .open(this.isSampleModalWithoutHeaderOpen),

    Modal(
      Container([
        Label("This is a sample modal with self handled close button"),
        Button("Close").onClick(() =>
          this.isSampleModalWithSelfHandledCloseButtonOpen.next(!this.isSampleModalWithSelfHandledCloseButtonOpen.value)
        )
      ])
    )
      .visibleHeader(false)
      .open(this.isSampleModalWithSelfHandledCloseButtonOpen),

    Modal(
      Container([Raw(_ => <div style={{ backgroundColor: "red", width: 200, height: 50 }} />), Label("other element")])
    )
      .noPadding(true)
      .visibleHeader(false)
      .open(this.modalWithNoPadding),
    Modal(Container([Label("other element")]))
      .noBackground(true)
      .visibleHeader(false)
      .open(this.noBackgroundOpen),

    Modal(
      Container([
        Raw(_ => <div style={{ backgroundColor: "red", width: 10000, height: 50 }} />),
        Label("other element")
      ])
    ).open(this.modalWithBigHorizontalChildOpen),

    Modal(
      Container([
        Raw(_ => <div style={{ backgroundColor: "red", width: 100, height: 20000 }} />),
        Label("other element")
      ])
    ).open(this.modalWithBigVerticalChildOpen)
  ];
}
