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
 * @[{"bidirectional":false,"required":false,"typeguard":"isVisibleHeader","default":"true"}]
 * 
 */
export type VisibleHeader = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isVisibleHeaderCloseButton","default":"true"}]
 * 
 */
export type VisibleHeaderCloseButton = boolean;
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
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isNoBackground","default":"false"}]
 * 
 */
export type NoBackground = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isNoBackdropClickClose","default":"true"}]
 * 
 */
export type NoBackdropClickClose = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isNoEscapeKeyDownClose","default":"true"}]
 * 
 */
export type NoEscapeKeyDownClose = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isLazyContent","default":"true"}]
 * 
 */
export type LazyContent = boolean;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type MinWidth = number | undefined;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type MinHeight = number | undefined;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type MaxWidth = number | undefined;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type MaxHeight = number | undefined;
// End Element

// type guards

export const TypeGuards = {
    isChild: (value: any): value is Child => isElement(value),
    isOpen: (value: any): value is Open => typeof (value) == "boolean",
    isVisibleHeader: (value: any): value is VisibleHeader => typeof (value) == "boolean",
    isVisibleHeaderCloseButton: (value: any): value is VisibleHeaderCloseButton => typeof (value) == "boolean",
    isTitle: (value: any): value is Title => typeof (value) == "string" || typeof (value) == "undefined",
    isNoPadding: (value: any): value is NoPadding => typeof (value) == "boolean",
    isNoBackground: (value: any): value is NoBackground => typeof (value) == "boolean",
    isNoBackdropClickClose: (value: any): value is NoBackdropClickClose => typeof (value) == "boolean",
    isNoEscapeKeyDownClose: (value: any): value is NoEscapeKeyDownClose => typeof (value) == "boolean",
    isLazyContent: (value: any): value is LazyContent => typeof (value) == "boolean",
}
