import * as React from "react";
import FormController from "../flmc-data-layer/FormController/FormController";
import { NativeProps } from "./elements/base/BaseElement";
import Container from "./elements/container/ContainerElement";
import ContainerView from "./elements/container/ContainerView";

type Props = {
  controller: FormController;
  nativeProps?: NativeProps;
};

export default function FormView({ controller, nativeProps }: Props) {
  let container = Container(controller.elements).nativeProps(
    nativeProps ? nativeProps : {}
  );
  return <ContainerView element={container} weight={0} />;
}
