import * as React from "react";
import { MapperProps } from "./ElementToViewMapper";

export type CustomElementMapper = (props: MapperProps) => React.ReactElement | null;

export const CustomElementContext = React.createContext<CustomElementMapper[]>([]);
