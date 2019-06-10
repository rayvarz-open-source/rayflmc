import IElement from "flmc-data-layer/src/FormController/IElement";
import { ElementType } from "./ElementType";
import * as React from 'react'

import ButtonView from './button/ButtonView';
import { ButtonElement } from "./button/ButtonElement";
import LabelView from "./label/LabelView";
import { LabelElement } from "./label/LabelElement";
import ContainerView from "./container/ContainerView";
import { ContainerElement } from "./container/ContainerElement";
import TextInputView from "./input/text/TextInputView";
import { TextInputElement } from "./input/text/TextInputElement";

type Props = {
    element: IElement
}

export function MapToView({ element }: Props) {
    switch (element.type) {
        case (ElementType.BUTTON): return <ButtonView element={element as ButtonElement} />;
        case (ElementType.LABEL): return <LabelView element={element as LabelElement} />;
        case (ElementType.CONTAINER): return <ContainerView element={element as ContainerElement} />;
        case (ElementType.INPUT_TEXT): return <TextInputView element={element as TextInputElement} />;
    }
    throw Error(`can't map ${element.type} to a view`)
}
