import { InlineFormElement } from "./InlineFormElement";
import * as React from "react";
import { FormBuilder } from "./InlineFormElementAttributes";
import { Visibility } from "../base/BaseElement";
import useFunctionAsState from "../../../custom-hooks/function-state";
import { VisibilityType } from "../../..";
import FormView from "../../FormView";

type Props = {
  element: InlineFormElement;
  weight: number;
};

export default function InlineFormView({ element, weight }: Props) {
  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [formBuilder, setFormBuilder] = useFunctionAsState<FormBuilder>(() => null);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  React.useEffect(() => {
    let formBuilderSub = element.formBuilderContainer.subscribe({ next: v => setFormBuilder(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      formBuilderSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  if (visibility === VisibilityType.Gone) return;

  let controller = formBuilder();
  if (controller == null) return null;

  return (
    <div
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }}
    >
      <FormView controller={controller} />
    </div>
  );
}
