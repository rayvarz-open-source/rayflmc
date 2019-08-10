import * as React from "react";

import { Route } from "../services/router/route";
import { isInjectorReciever } from "../injector/InjectorReciever";
import { InjectorContext } from "../injector/InjectorContext";
import { FLMCFormController } from "../FLMCFormController";
import useInjector from "../custom-hooks/useInjector";

type Props = {
  currentRoute: Route | null;
  routes: Route[];
  controller: FLMCFormController | null;
  formKey: string;
};

type SkeletonBuilder = (props: Props) => React.ReactElement;

export type Skeletons = { [skeletonName: string]: SkeletonBuilder };

export function RouteToFormView(props: Props & { skeletons: Skeletons }) {
  // setup injector and it's dependecies
  useInjector(props.controller);

  // perform life cycle methods
  // TODO: make sure it only fires one time
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
