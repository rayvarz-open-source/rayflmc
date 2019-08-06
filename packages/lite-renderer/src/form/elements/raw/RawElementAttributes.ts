import { CSSProperties } from "react";

type Props = {
    style: CSSProperties
}

// TODO: add docs and example
/** @ElementDoc
 * @example
 * 
 */
// Element: Raw
/**
 * @[{"bidirectional":false,"required":true,"typeguard":"isReactElementBuilder","default":"(_) => null"}]
 * container children
 */
export type ReactElementBuilder = (props: Props) => (React.ReactElement | null);
// End Element

// type guards

export const TypeGuards = {
    isReactElementBuilder: (value: any): value is ReactElementBuilder => typeof(value) === "function",
}
