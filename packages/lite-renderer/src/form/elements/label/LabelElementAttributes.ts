import { LabelColors, isLabelColors } from "./LabelColor";
import { LabelVariant, isLabelVariant } from "./LabelVariant";
import { DisplayType, isDisplayType } from "../share/DisplayType";
import { TextAlignment } from "../../..";
import { isTextAlignment } from "../share/TextAlignment";

/** @ElementDoc
 * @example
 * // usage:
 * Label("This is a label");
 * 
 */
// Element: Label
/**
 * @[{"bidirectional":false,"required": true,"typeguard":"isValue","default": "''"}]
 * container that holds value of text input.
 * @example
 * // read a label value
 * 
 * controller = new BehaviorSubject<string>("label text");
 * Label(controller);
 * console.log(controller.value);
 * 
 * // set text label value
 * 
 * controller.next("new value")
 * 
 */
export type Value = string;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isNoWrap","default": "false"}]
 * If true, the text will not wrap, but instead will truncate with an ellipsis.
 * 
 * see https://material-ui.com/api/typography/ for more info
 */
export type NoWrap = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isGutterBottom","default": "false"}]
 * 	If true, the text will have a bottom margin.
 * 
 * see https://material-ui.com/api/typography/ for more info
 */
export type GutterBottom = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isColor","default": "'initial'"}]
 * The color of the component. It supports those theme colors that make sense for this component.
 * valid colors : LabelColors.* | 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
 * 
 * see https://material-ui.com/api/typography/ for more info
 */
export type Colors = LabelColors | 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isLabelVariant","default": "'inherit'"}]
 * Applies the theme typography styles.
 * valid variants : LabelVariant.* | 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit'
 * 
 * see https://material-ui.com/api/typography/ for more info
 */
export type Variant = LabelVariant | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit';
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDisplayType","default": "'initial'"}]
 * Controls the display type
 * valid variants :  DisplayType.* | 'block' | 'initial' | 'inline'
 * 
 * see https://material-ui.com/api/typography/ for more info
 */
export type Display = DisplayType | 'block' | 'initial' | 'inline';
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isAlign","default": "'inherit'"}]
 * Set the text-align on the component.
 * valid variants :  TextAlignment.* | 'inherit', 'left', 'center', 'right', 'justify'
 * 
 * see https://material-ui.com/api/typography/ for more info
 */
export type Align = TextAlignment | 'inherit' | 'left' | 'center' | 'right' | 'justify';
// End Element

// type guards

export const TypeGuards = {
    isValue: (value: any): value is Value => typeof (value) == "string",
    isNoWrap: (value: any): value is NoWrap => typeof (value) == "boolean",
    isGutterBottom: (value: any): value is GutterBottom => typeof (value) == "boolean",
    isColor: (value: any): value is Colors => isLabelColors(value),
    isLabelVariant: (value: any): value is LabelVariant => isLabelVariant(value),
    isDisplayType: (value: any): value is DisplayType => isDisplayType(value),
    isAlign: (value: any): value is Align => isTextAlignment(value),
}