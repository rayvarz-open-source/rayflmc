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
import { InlineFormElement } from "./inline-form/InlineFormElement";
import InlineFormView from "./inline-form/InlineFormView";
import { useIdentifyElement } from "./ElementLifeCycleContext";

export type MapperProps = {
  element: IElement;
  weight: number;
  key: string;
};

export function MapToView({ element, weight }: MapperProps) {
  let view: React.ReactElement | null = null;
  const [key, updateKey] = useIdentifyElement();

  const customMappers = React.useContext(CustomElementContext);

  for (let mapper of customMappers) {
    view = mapper({ element, weight, key });
    if (view != null) {
      updateKey();
      return view;
    }
  }

  switch (element.type) {
    case ElementType.Button:
      view = <ButtonView element={element as ButtonElement} weight={weight} key={key} />;
      break;
    case ElementType.Modal:
      return <ModalView element={element as ModalElement} weight={weight} key={key} />;
    case ElementType.SelectBox:
      view = <SelectView element={element as SelectBoxElement<any>} weight={weight} key={key} />;
      break;
    case ElementType.Label:
      view = <LabelView element={element as LabelElement} weight={weight} key={key} />;
      break;
    case ElementType.Container:
      view = <ContainerView element={element as ContainerElement} weight={weight} key={key} />;
      break;
    case ElementType.Tab:
      view = <TabView element={element as TabElement} weight={weight} key={key} />;
      break;
    case ElementType.Chip:
      view = <ChipView element={element as ChipElement} weight={weight} key={key} />;
      break;
    case ElementType.TextInput:
      view = <TextInputView element={element as TextInputElement} weight={weight} key={key} />;
      break;
    case ElementType.Grid:
      view = <GridView element={element as GridElement} weight={weight} key={key} />;
      break;
    case ElementType.Image:
      view = <ImageView element={element as ImageElement} weight={weight} key={key} />;
      break;
    case ElementType.Space:
      view = <SpaceView element={element as SpaceElement} weight={weight} key={key} />;
      break;
    case ElementType.Raw:
      view = <RawView element={element as RawElement} weight={weight} key={key} />;
      break;
    case ElementType.InlineForm:
      view = <InlineFormView element={element as InlineFormElement} weight={weight} key={key} />;
      break;
  }

  if (view == null) throw Error(`can't map ${element.type} to a view`);

  updateKey();
  return view;
}
