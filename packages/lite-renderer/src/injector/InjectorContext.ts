import * as React from "react";
import { InjectorContainer } from "./InjectorContainer";

export const InjectorContext = React.createContext<InjectorContainer | undefined>(undefined);
