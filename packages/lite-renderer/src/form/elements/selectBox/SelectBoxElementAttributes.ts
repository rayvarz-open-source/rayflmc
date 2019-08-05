import { SelectBoxLabelPlacement, isSelectBoxLabelPlacement } from "./SelectBoxLabelPlacement";
import { SelectBoxVariant, isSelectBoxVariant } from "./SelectBoxVariant";

/** @ElementDoc
 * @example
 * // usage:
 * let value = new BehaviorSubject<int | null>(1);
 * SelectBox(controller, 2); // 2 == checkedValue
 * 
 * // if controller value == 2, select box state will be selected
 * 
 */
// Element: SelectBox
/**
 * @[{"bidirectional":true,"required":true,"default":"null"}]
 * current value
 * 
 */
export type Value<T> = T | null;
/**
 * @[{"bidirectional":false,"required":true,"default":"undefined"}]
 * if value equal to this value, select box will be checked
 * 
 */
export type SelectedValue<T> = T | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isLabel","default":"undefined"}]
 * text to describe this select box
 * enter undefined for no label
 * 
 */
export type Label = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isLabelPlacement","default":"SelectBoxLabelPlacement.End"}]
 * position of label relative to SelectBox
 * 
 */
export type LabelPlacement = SelectBoxLabelPlacement;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isVariant","default":"SelectBoxVariant.CheckBox"}]
 * shape of SelectBox
 * 
 */
export type Variant = SelectBoxVariant;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDisabled","default": "false"}]
 * 
 * TODO: add docs
 */
export type Disabled = boolean;
// End Element

// type guards

export const TypeGuards = {
    isLabel: (value: any): value is Label => typeof (value) === "string" || typeof (value) === "undefined",
    isLabelPlacement: (value: any): value is LabelPlacement => isSelectBoxLabelPlacement(value),
    isVariant: (value: any): value is Variant => isSelectBoxVariant(value),
    isDisabled: (value: any): value is Disabled => typeof (value) == 'boolean',
}