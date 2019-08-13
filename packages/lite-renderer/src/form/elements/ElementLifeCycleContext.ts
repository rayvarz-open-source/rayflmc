import * as React from "react";
import { MapperProps } from "./ElementToViewMapper";

type ElementLifeCycleType = {
  idCounter: number;
};

export const ElementLifeCycleContext = React.createContext<ElementLifeCycleType>({
  idCounter: 0
});

export const useIdentifyElement = (): [string, VoidFunction] => {
  const state = React.useContext(ElementLifeCycleContext);

  return [`element_m2v_flmc_${state.idCounter}`, () => (state.idCounter += 1)];
};
