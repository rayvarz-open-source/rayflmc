import * as React from "react";
import IDataController from "../flmc-data-layer/Base/IDataController";

export interface DataControllerBuilder {
  (path: string, params: any): IDataController;
}

export interface Route {
  path: string;
  builder: DataControllerBuilder;
  category: RouteCategory;
  name: string;
  indicator?: React.ReactElement;
  hidden: boolean;
}

export interface RouteCategory {
  name: string;
  indicator?: React.ReactElement;
  hidden: boolean;
}

export const RootRouteCategory: RouteCategory = {
  name: "root",
  hidden: false
};
