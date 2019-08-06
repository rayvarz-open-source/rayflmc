import { RawElement } from "./RawElement";
import * as React from "react";
import { ReactElementBuilder } from "./RawElementAttributes";
import { Visibility } from "../base/BaseElement";
import useFunctionAsState from "../../../custom-hooks/function-state";

type Props = {
  element: RawElement;
  weight: number;
};

export default function RawView({ element, weight }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [reactElementBuilder, setReactElementBuilder] = useFunctionAsState<
    ReactElementBuilder
  >(_ => null);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  React.useEffect(() => {
    let reactElementBuilderSub = element.reactElementBuilderContainer.subscribe(
      { next: v => setReactElementBuilder(v) }
    );
    let visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });

    return () => {
      reactElementBuilderSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  return reactElementBuilder({
    style: {
      ...element.getVisibilityStyle(visibility),
      ...element.getWeightStyle(weight)
    }
  });
}
