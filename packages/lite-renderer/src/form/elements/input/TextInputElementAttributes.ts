import { TextDirection } from "../share/TextDirection";
import { TextInputStyleType } from "./TextInputStyleType";
import { TextInputValidator } from "./TextInputValidators";

/** @ElementDoc
 * @example
 * // usage:
 * let controller = new BehaviorSubject<string>(""); // or BehaviorSubject<Value>
 * TextInput(controller);
 * 
 */
// Element: TextInput
/**
 * @[{"bidirectional":true,"required": true,"typeguard":"isValue","default": "''"}]
 * container that holds value of text input.
 * @example
 * // read a text input value
 * 
 * controller = new BehaviorSubject<string>("text input default value");
 * TextInput(controller);
 * console.log(controller.value);
 * 
 * // set text input value
 * 
 * controller.next("new value")
 * 
 */
export type Value = string;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isLabel","default": "undefined"}]
 * label of text input
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Label = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isPlaceholder","default": "undefined"}]
 * placeholder of text input
 * when value is empty it shows this value instead
 * @example
 * TextInput(controller)
 *   .placeholder("Please Enter Value...")
 * @
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Placeholder = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDisabled","default": "false"}]
 * control if user can input data or not
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Disabled = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isHelperText","default": "undefined"}]
 * the text under text field
 * if error attribute is enabled it change colors to error color else
 * it can act as description
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type HelperText = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isInError","default": "false"}]
 * If true, the text field will be displayed in an error state.
 * error message can be set in helperText
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type IsInError = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isStartText","default": "undefined"}]
 * text input prefix
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type StartText = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isEndText","default": "undefined"}]
 * text input suffix
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type EndText = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isStartIcon","default": "undefined"}]
 * name of text input prefix icon
 * all supported icon names : https://material.io/tools/icons
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type StartIcon = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isEndIcon","default": "undefined"}]
 * name of text input suffix icon
 * all supported icon names : https://material.io/tools/icons
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type EndIcon = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isVariant","default": "'standard'"}]
 * text input style
 * supported styles : 'standard' | 'filled' | 'outlined' | TextInputStyleType.Standard | TextInputStyleType.Outlined | TextInputStyleType.Filled
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Variant = 'standard' | 'filled' | 'outlined' | TextInputStyleType;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isInputType","default": "'text'"}]
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type InputType = "email" | "number" | "password" | "text" | "tel" | "url";
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isMultiline","default": "false"}]
 * enables multiline text input
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Multiline = boolean;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isRows","default": "0"}]
 * numbers of rows for multi line input (set 0 for default)
 * cannot be used with RowsMax attribute
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Rows = number;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isRowsMax","default": "0"}]
 * maxium number of lines for multi line input (set 0 for default)
 * cannot be used with Rows attribute
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type RowsMax = number;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDirection","default": "'default'"}]
 * text direction
 * valid inputs : TextDirection.rtl, TextDirection.ltr, "rtl", "ltr"
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type Direction = TextDirection | "rtl" | "ltr" | "default";
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * if undefined then it follows .direction attribute
 * 
 */
export type PlaceholderDirection = Direction | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isOnEndIconClick","default": "undefined"}]
 * fires when user clicks on EndIcon
 * must also set endIcon attribute
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type OnEndIconClick = VoidFunction | undefined;
export type OnInputClick = VoidFunction | undefined;
export type OnInputBlur = VoidFunction | undefined;
export type OnInputFocus = VoidFunction | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isOnStartIconClick","default": "undefined"}]
 * fires when user clicks on StartIcon
 * must also set startIcon attribute
 * 
 * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
 */
export type OnStartIconClick = VoidFunction | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isValidation","default":"[]"}]
 * validations
 * create a custom validation or use TextInputValidations.*
 * 
 * TODO: add docs
 */
export type Validations = TextInputValidator[];
/**
 * @[{"bidirectional":false,"required":false,"default":"false"}]
 * 
 * TODO: add docs
 */
export type NumberFormatter = boolean;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 * example: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
 */
export type Mask = ((string | RegExp)[]) | undefined;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type SelectOptions = string[] | undefined;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type MaxLength = number | undefined;
// End Element

// type guards

export const TypeGuards = {
    isValue: (value: any): value is Value => typeof(value) == "string",
    isLabel: (value: any): value is Label => value === undefined || typeof(value) == "string",
    isPlaceholder: (value: any): value is Placeholder => value === undefined || typeof(value) == "string",
    isHelperText: (value: any): value is HelperText => value === undefined || typeof(value) == "string",
    isDisabled: (value: any): value is Disabled => typeof(value) == "boolean",
    isInputType: (value: any): value is InputType => typeof(value) == "string",
    isMultiline: (value: any): value is Multiline => typeof(value) == "boolean",
    isInError: (value: any): value is IsInError => typeof(value) == "boolean",
    isStartText: (value: any): value is StartText => value === undefined || typeof(value) == "string",
    isEndText: (value: any): value is EndText => value === undefined || typeof(value) == "string",
    isStartIcon: (value: any): value is StartIcon => value === undefined || typeof(value) == "string",
    isEndIcon: (value: any): value is EndIcon => value === undefined || typeof(value) == "string",
    isVariant: (value: any): value is Variant => value === 'standard' || value === 'filled' || value === 'outlined',
    isRows: (value: any): value is Rows => typeof(value) == "number",
    isRowsMax: (value: any): value is RowsMax => typeof(value) == "number",
    isDirection: (value: any): value is Direction => value === "rtl" || value === "ltr" || value === "default",
    isOnEndIconClick: (value: any): value is OnEndIconClick => typeof(value) == "function",
    isOnInputClick: (value: any): value is OnInputClick => typeof(value) == "function",
    isOnInputBlur: (value: any): value is OnInputBlur => typeof(value) == "function",
    isOnInputFocus: (value: any): value is OnInputFocus => typeof(value) == "function",
    isOnStartIconClick: (value: any): value is OnStartIconClick => typeof(value) == "function",
    isValidation: (value: any): value is Validations => Array.isArray(value) && (value.length < 2 || value.map((i: any) => typeof (i) == "function").reduce((p: boolean, c: boolean) => p && c)),
}