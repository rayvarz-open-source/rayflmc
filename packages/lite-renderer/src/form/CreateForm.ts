import * as React from 'react';
import FormController from "flmc-data-layer/src/FormController/FormController";
import Container from "./elements/container/ContainerElement";
import ContainerView from "./elements/container/ContainerView";

export default function createForm(controller: FormController): React.ReactElement {
    let container = Container(controller.elements);
    return ContainerView({ element: container });
}
