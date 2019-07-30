/** @ElementDoc
 * @example
 * // usage:
 * Space().width(10).height(10)
 * 
 */
// Element: Space
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isWidth","default":"0"}]
 * space width
 * 
 */
export type Width = number;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isHeight","default":"0"}]
 * space height
 * 
 */
export type Height = number;
// End Element

// type guards

export const TypeGuards = {
    isWidth: (value: any): value is Width => typeof (value) === "number",
    isHeight: (value: any): value is Height => typeof (value) === "number",
}