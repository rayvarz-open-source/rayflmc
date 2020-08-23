import * as React from "react";
import useFunctionAsState from "../../../custom-hooks/function-state";
import { Visibility } from "../base/BaseElement";
import { RawElement } from "./RawElement";
import { ReactElementBuilder } from "./RawElementAttributes";

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
  const [nativeProps, setNativeProps] = React.useState(
    () => element.nativePropsContainer.value
  );

  React.useEffect(() => {
    let reactElementBuilderSub = element.reactElementBuilderContainer.subscribe(
      {
        next: v => setReactElementBuilder(v)
      }
    );
    let visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });
    const nativePropsSub = element.nativePropsContainer.subscribe({
      next: v => setNativeProps(v)
    });

    return () => {
      reactElementBuilderSub.unsubscribe();
      visibilitySub.unsubscribe();
      nativePropsSub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  return reactElementBuilder({
    style: {
      ...element.getVisibilityStyle(visibility),
      ...element.getWeightStyle(weight),
      ...(nativeProps.style ? nativeProps.style : {})
    }
  });
}
