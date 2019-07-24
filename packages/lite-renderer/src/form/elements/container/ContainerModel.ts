import IElement from "../../../flmc-data-layer/FormController/IElement";

export class ContainerModel {
  constructor(element:IElement, weight?: number) {
    this.element = element;
    this.weight = weight==null?0:weight;
  }
  element: IElement;
  weight: number;
}
