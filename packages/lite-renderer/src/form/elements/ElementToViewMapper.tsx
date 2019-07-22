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
import TextInputView from "./input/text/TextInputView";
import { TextInputElement } from "./input/text/TextInputElement";
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
    element: IElement
}

export function MapToView({ element }: Props) {
    switch (element.type) {
        case (ElementType.BUTTON): return <ButtonView element={element as ButtonElement} />;
        case (ElementType.MODAL): return <ModalView element={element as ModalElement} />;
        case (ElementType.SELECT_BOX): return <SelectView element={element as SelectBoxElement} />;
        case (ElementType.DATE_PICKER): return <DatePickerView element={element as DatePickerElement} />;
        case (ElementType.TIME_PICKER): return <TimePickerView element={element as TimePickerElement} />;
        case (ElementType.SELECT_BOX_GROUP): return <SelectGroupView element={element as SelectGroupElement} />;
        case (ElementType.LABEL): return <LabelView element={element as LabelElement} />;
        case (ElementType.CONTAINER): return <ContainerView element={element as ContainerElement} />;
        case (ElementType.TAB): return <TabView element={element as TabElement} />;
        case (ElementType.CHIP): return <ChipView element={element as ChipElement} />;
        case (ElementType.INPUT_TEXT): return <TextInputView element={element as TextInputElement} />;
        case (ElementType.GRID): return <GridView element={element as GridElement}/>
        case (ElementType.IMAGE): return <ImageView element={element as ImageElement}/>
    }
    throw Error(`can't map ${element.type} to a view`)
}
