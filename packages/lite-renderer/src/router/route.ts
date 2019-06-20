import * as React from 'react';
import IDataController from "flmc-data-layer/src/Base/IDataController";

export interface DataControllerBuilder {
    (path: String, params: object[]): IDataController
}

export interface Route {
    path: String,
    builder: DataControllerBuilder,
    category: RouteCategory,
    name: String,
    indicator?: React.ReactElement,
    hidden: boolean,
}

export interface RouteCategory {
    name: String,
    indicator?: React.ReactElement,
    hidden: boolean,
}

export const RootRouteCategory: RouteCategory = {
    name: "root",
    hidden: false,
};
