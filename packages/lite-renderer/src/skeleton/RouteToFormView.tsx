import * as React from "react";

import { Route } from "../router/route";
import { isInjectorReciever } from "../injector/InjectorReciever";
import { InjectorContext } from "../injector/InjectorContext";
import { FLMCFormController } from "../FLMCFormController";

type Props = {
  currentRoute: Route | null;
  routes: Route[];
  controller: FLMCFormController | null;
  formKey: string;
};

type SkeletonBuilder = (props: Props) => React.ReactElement;

export type Skeletons = { [skeletonName: string]: SkeletonBuilder };

export function RouteToFormView(props: Props & { skeletons: Skeletons }) {
  // inject, injector to InjectorRecievers
  const injectorContainer = React.useContext(InjectorContext);
  if (injectorContainer != null && props.controller != null && isInjectorReciever(props.controller)) {
    props.controller.injector = injectorContainer.injector;
    props.controller.inject();
  }

  // perform life cycle methods
  if (props.controller != null) {
    props.controller.ready();
  }

  let skeletonBuilder: null | SkeletonBuilder = null;

  for (let builderName in props.skeletons) {
    let skeletonName = props.controller == null ? "default" : (props.controller as any).skeleton || "default";
    if (skeletonName == builderName) {
      skeletonBuilder = props.skeletons[builderName];
      break;
    }
  }

  if (skeletonBuilder == null)
    throw new Error(
      `cannot find suitable skeleton builder for ${(props.controller as any).skeleton ||
        "default"} avaiable skeletons are : ${Object.keys(props.skeletons)}`
    );

  return skeletonBuilder(props);
}
