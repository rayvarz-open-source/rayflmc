import IElement, { isElement } from "../../../flmc-data-layer/FormController/IElement";
// TODO: add docs and example
/** @ElementDoc
 * @example
 * 
 */
// Element: Modal
/**
 * @[{"bidirectional":false,"required":true,"typeguard":"isChild","default":"undefined"}]
 * container children
 */
export type Child = IElement | undefined;
/**
 * @[{"bidirectional":true,"required":false,"typeguard":"isOpen","default":"false"}]
 * 
 */
export type Open = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isVisibileHeader","default":"true"}]
 * 
 */
export type VisibileHeader = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isVisibileHeaderCloseButton","default":"true"}]
 * 
 */
export type VisibileHeaderCloseButton = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isTitle","default":"undefined"}]
 * 
 */
export type Title = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isNoPadding","default":"false"}]
 * 
 */
export type NoPadding = boolean;
// End Element

// type guards

export const TypeGuards = {
    isChild: (value: any): value is Child => isElement(value),
    isOpen: (value: any): value is Open => typeof (value) == "boolean",
    isVisibileHeader: (value: any): value is VisibileHeader => typeof (value) == "boolean",
    isVisibileHeaderCloseButton: (value: any): value is VisibileHeaderCloseButton => typeof (value) == "boolean",
    isTitle: (value: any): value is Title => typeof (value) == "string" || typeof (value) == "undefined",
    isNoPadding: (value: any): value is NoPadding => typeof (value) == "boolean",
}
