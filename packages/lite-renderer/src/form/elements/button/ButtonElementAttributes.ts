import { ButtonColor, isButtonColor } from "./ButtonColor";
import { ButtonVariant, isButtonVariant } from "./ButtonVariant";

/** @ElementDoc
 * @example
 * // usage:
 * Button("This is button's label");
 * 
 */
// Element: Button
/**
 * @[{"bidirectional":false,"required":true,"typeguard":"isText","default": "undefined"}]
 * label of button.
 * 
 * 
 */
export type Text = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isLoading","default": "false"}]
 * if true, button will be disabled and shows an loading indicator
 * 
 */
export type Loading = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDisabled","default": "false"}]
 * If true, the button will be disabled.
 * 
 * see https://material-ui.com/api/button/ for more info
 */
export type Disabled = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isColors","default": "'default'"}]
 * The color of the component. It supports those theme colors that make sense for this component.
 * 
 * valid colors : ButtonColor.* | 'default' | 'inherit' | 'primary' | 'secondary'
 * 
 * see https://material-ui.com/api/button/ for more info
 */
export type Colors = ButtonColor | 'default' | 'inherit' | 'primary' | 'secondary';
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isVariant","default": "'contained'"}]
 * 	The variant to use.
 * 
 * valid colors : ButtonVariant.* | 'text' | 'outlined' | 'contained'
 * 
 * see https://material-ui.com/api/button/ for more info
 */
export type Variant = ButtonVariant | 'text' | 'outlined' | 'contained';
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isIcon","default": "undefined"}]
 * name of button's icon
 * 
 * all supported icon names : https://material.io/tools/icons
 */
export type Icon = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isOnClick","default": "undefined"}]
 * fires when user clicks on button
 * 
 */
export type OnClick = VoidFunction | undefined;
// End Element

// type guards

export const TypeGuards = {
    isText: (value: any): value is Text => typeof (value) == "string" || typeof (value) == "undefined",
    isLoading: (value: any): value is Loading => typeof (value) == "boolean",
    isDisabled: (value: any): value is Disabled => typeof (value) == "boolean",
    isOnClick: (value: any): value is OnClick => typeof (value) == "function",
    isColors: (value: any): value is Colors => isButtonColor(value),
    isVariant: (value: any): value is Variant => isButtonVariant(value),
    isIcon: (value: any): value is Icon => typeof (value) == "string" || typeof (value) == "undefined",
}