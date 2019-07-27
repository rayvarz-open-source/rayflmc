import { ChipModel } from "./ChipModel";
import { ChipSelectionType } from "../../..";
import { isChipSelectionType } from "./ChipSelectionType";

/** @ElementDoc
 * @example
 * // usage:
 * let controller = new BehaviorSubject<ChipModel[]>([new ChipModel({title: "test", id: 1})]);
 * Chip(controller);
 * 
 */
// Element: Chip
/**
 * @[{"bidirectional":true,"required": true,"typeguard":"isValue","default": "undefined"}]
 * container that holds chips.
 * 
 */
export type Value = ChipModel[] | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isSelectionType","default": "ChipSelectionType.Show"}]
 * selection type // TODO: add docs
 * 
 */
export type SelectionType = ChipSelectionType;
// End Element

// type guards

export const TypeGuards = {
    isValue: (value: any): value is Value => value != null, // TODO: implement typeguard
    isSelectionType: (value: any): value is SelectionType => isChipSelectionType(value),
}