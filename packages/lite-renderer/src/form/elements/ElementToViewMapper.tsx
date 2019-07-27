import IElement from "../../flmc-data-layer/FormController/IElement";
import { ElementType } from "./ElementType";
import * as React from 'react'

import ButtonView from './button/ButtonView';
import SelectView from './selectBox/SelectBoxView';
import { ButtonElement } from "./button/ButtonElement";
import LabelView from "./label/LabelView";
import { LabelElement } from "./label/LabelElement";
import ContainerView from "./container/ContainerView";
import { ContainerElement } from "./container/ContainerElement";
import TextInputView from "./input/TextInputView";
import { TextInputElement } from "./input/TextInputElement";
import GridView from "./grid/GridView";
import { GridElement } from "./grid/GridElement";
import {SelectBoxElement} from "./selectBox/SelectBoxElement";
import {SelectGroupElement} from "./selectGroup/SelectGroupElement";
import {DatePickerElement} from "./picker/date/DatePickerElement";
import SelectGroupView from "./selectGroup/SelectGroupView";
import DatePickerView from "./picker/date/DatePickerView";
import TimePickerView from "./picker/time/TimePickerView";
import {TimePickerElement} from "./picker/time/TimePickerElement";
import {ModalElement} from "./modal/ModalElement";
import ModalView from "./modal/ModalView";
import TabView from "./tab/TabView";
import {TabElement} from "./tab/TabElement";
import ChipView from "./chip/ChipView";
import {ChipElement} from "./chip/ChipElement";
import ImageView from "./image/ImageView";
import {ImageElement} from "./image/ImageElement";

type Props = {
    element: IElement,
    weight: number
}

export function MapToView({ element,weight }: Props) {
    switch (element.type) {
        case (ElementType.Button): return <ButtonView element={element as ButtonElement} weight={weight}/>;
        case (ElementType.MODAL): return <ModalView element={element as ModalElement}  weight={weight}/>;
        case (ElementType.SELECT_BOX): return <SelectView element={element as SelectBoxElement} weight={weight}/>;
        case (ElementType.DATE_PICKER): return <DatePickerView element={element as DatePickerElement} weight={weight}/>;
        case (ElementType.TIME_PICKER): return <TimePickerView element={element as TimePickerElement} weight={weight}/>;
        case (ElementType.SELECT_BOX_GROUP): return <SelectGroupView element={element as SelectGroupElement} weight={weight}/>;
        case (ElementType.Label): return <LabelView element={element as LabelElement} weight={weight}/>;
        case (ElementType.CONTAINER): return <ContainerView element={element as ContainerElement} weight={weight}/>;
        case (ElementType.TAB): return <TabView element={element as TabElement} weight={weight}/>;
        case (ElementType.Chip): return <ChipView element={element as ChipElement} weight={weight}/>;
        case (ElementType.TextInput): return <TextInputView element={element as TextInputElement} weight={weight}/>;
        case (ElementType.GRID): return <GridView element={element as GridElement} weight={weight}/>;
        case (ElementType.IMAGE): return <ImageView element={element as ImageElement} weight={weight}/>;
    }
    throw Error(`can't map ${element.type} to a view`)
}
