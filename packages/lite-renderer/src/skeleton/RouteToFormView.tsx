import * as React from 'react';

import { Route } from "../router/route";
import { FormController } from "..";

type Props = {
    currentRoute: Route | null,
    routes: Route[],
    controller: FormController | null,
    formKey: string,
}

type SkeletonBuilder = (props: Props) => React.ReactElement;

export type Skeletons = { [skeletonName: string]: SkeletonBuilder }

export function RouteToFormView(props: Props & { skeletons: Skeletons }) {
    let skeletonBuilder: null | SkeletonBuilder = null;

    for (let builderName in props.skeletons) {
        let skeletonName = props.controller == null ? "default" : (props.controller as any).skeleton || "default";
        if (skeletonName == builderName) {
            skeletonBuilder = props.skeletons[builderName];
            break;
        }
    }

    if (skeletonBuilder == null)
        throw new Error(`cannot find suitable skeleton builder for ${(props.controller as any).skeleton || "default"} avaiable skeletons are : ${Object.keys(props.skeletons)}`)

    return skeletonBuilder(props);
}