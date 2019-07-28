import { areElements } from "../../../flmc-data-layer";
import IElement from "../../../flmc-data-layer/FormController/IElement";

/** @ElementDoc
 * @example
 * // usage:
 * TODO: add docs
 * 
 */
// Element: Tab
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isTabs","default":"[]"}]
 * TODO: add docs
 */
export type TabElements = IElement[];
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isTabTitles","default":"[]"}]
 * TODO: add docs
 * 
 */
export type TabTitles = string[];
/**
 * @[{"bidirectional":true,"required":true,"typeguard":"isCurrentTab","default":"0"}]
 * TODO: add docs
 * 
 */
export type CurrentTab = number;
// End Element

// type guards

export const TypeGuards = {
    isTabs: (value: any): value is TabElements => areElements(value),
    isCurrentTab: (value: any): value is CurrentTab => typeof (value) == "number",
    isTabTitles: (value: any): value is TabTitles => value.forEach != null && (value as any).map((i: any) => typeof (i) == 'string').reduce((p: boolean, c: boolean) => p && c),
}