import IElement from "../../flmc-data-layer/FormController/IElement";
import { ElementType } from "./ElementType";
import * as React from "react";

import ButtonView from "./button/ButtonView";
import SelectView from "./selectBox/SelectBoxView";
import { ButtonElement } from "./button/ButtonElement";
import LabelView from "./label/LabelView";
import { LabelElement } from "./label/LabelElement";
import ContainerView from "./container/ContainerView";
import { ContainerElement } from "./container/ContainerElement";
import TextInputView from "./input/TextInputView";
import { TextInputElement } from "./input/TextInputElement";
import GridView from "./grid/GridView";
import { GridElement } from "./grid/GridElement";
import { SelectBoxElement } from "./selectBox/SelectBoxElement";
import { ModalElement } from "./modal/ModalElement";
import ModalView from "./modal/ModalView";
import TabView from "./tab/TabView";
import { TabElement } from "./tab/TabElement";
import ChipView from "./chip/ChipView";
import { ChipElement } from "./chip/ChipElement";
import ImageView from "./image/ImageView";
import { ImageElement } from "./image/ImageElement";
import SpaceView from "./space/SpaceView";
import { SpaceElement } from "./space/SpaceElement";
import RawView from "./raw/RawView";
import { RawElement } from "./raw/RawElement";
import { CustomElementContext } from "./CustomElementsContext";

export type MapperProps = {
  element: IElement;
  weight: number;
};

export function MapToView({ element, weight }: MapperProps) {
  const customMappers = React.useContext(CustomElementContext);

  for (let mapper of customMappers) {
    let view = mapper({ element, weight });
    if (view != null) return view;
  }

  switch (element.type) {
    case ElementType.Button:
      return <ButtonView element={element as ButtonElement} weight={weight} />;
    case ElementType.Modal:
      return <ModalView element={element as ModalElement} weight={weight} />;
    case ElementType.SelectBox:
      return <SelectView element={element as SelectBoxElement<any>} weight={weight} />;
    case ElementType.Label:
      return <LabelView element={element as LabelElement} weight={weight} />;
    case ElementType.Container:
      return <ContainerView element={element as ContainerElement} weight={weight} />;
    case ElementType.Tab:
      return <TabView element={element as TabElement} weight={weight} />;
    case ElementType.Chip:
      return <ChipView element={element as ChipElement} weight={weight} />;
    case ElementType.TextInput:
      return <TextInputView element={element as TextInputElement} weight={weight} />;
    case ElementType.Grid:
      return <GridView element={element as GridElement} weight={weight} />;
    case ElementType.Image:
      return <ImageView element={element as ImageElement} weight={weight} />;
    case ElementType.Space:
      return <SpaceView element={element as SpaceElement} weight={weight} />;
    case ElementType.Raw:
      return <RawView element={element as RawElement} weight={weight} />;
  }
  throw Error(`can't map ${element.type} to a view`);
}
