import * as React from "react";
import { MapToView } from "../../form/elements/ElementToViewMapper";
import { ModalElement } from "../../form/elements/modal/ModalElement";

type Props = {
  modalElement: ModalElement;
};

export const ModalProvider: React.FunctionComponent<Props> = props => {
  return (
    <>
      {props.children}
      <MapToView weight={0} element={props.modalElement} />
    </>
  );
};
