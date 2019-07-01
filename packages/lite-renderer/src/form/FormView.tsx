import * as React from 'react';
import FormController from "../flmc-data-layer/FormController/FormController";
import Container from "./elements/container/ContainerElement";
import ContainerView from "./elements/container/ContainerView";

type Props = {
    controller: FormController
}

export default function FormView({ controller }: Props) {
    let container = Container(controller.elements);
    return <ContainerView element={container} />
}
