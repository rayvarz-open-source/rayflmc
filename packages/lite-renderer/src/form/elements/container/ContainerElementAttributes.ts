import IElement, { areElements } from "../../../flmc-data-layer/FormController/IElement";
import { ContainerDecoration, isContainerDecoration } from "./ContainerDecoration";
import { ContainerDirection, isContainerDirection } from "./ContainerDirection";
import { ContainerAlignItems, ContainerJustifyContent } from "./ContainerItemAlign";
import { ContainerWrap, isContainerWrap } from "./ContainerWrap";

/** @ElementDoc
 * @example
 * // usage:
 * Container([
 *  Label('I\'m a label'),
 *  Button('Submit'),
 * ]);
 * 
 */
// Element: Container
/**
 * @[{"bidirectional":false,"required":true,"typeguard":"isChildren","default":"[]"}]
 * container children
 */
export type Children = IElement[];
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDirection","default":"ContainerDirection.Column"}]
 * children direction
 * 
 * valid options: ContainerDirection.*
 * 
 */
export type Direction = ContainerDirection;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isFlex","default":"[]"}]
 * array of numbers representing flex number of each child
 * 
 * must be same size as children
 * @example
 * 
 * Container([Label('test'), TextInput(controller)])
 *  .flex([3, 1]) // Label will be 3 times bigger than TextInput
 * 
 * 
 * 
 */
export type Flex = number[];
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isWrap","default":"ContainerWrap.NoWrap"}]
 * 
 */
export type Wrap = ContainerWrap;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDecoration","default":"ContainerDecoration.None"}]
 * 
 */
export type Decoration = ContainerDecoration;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type JustifyContent = ContainerJustifyContent | undefined;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 * 
 */
export type AlignItems = ContainerAlignItems | undefined;
// End Element

// type guards

export const TypeGuards = {
    isChildren: (value: any): value is Children => areElements(value),
    isDirection: (value: any): value is Direction => isContainerDirection(value),
    isWrap: (value: any): value is Wrap => isContainerWrap(value),
    isDecoration: (value: any): value is Decoration => isContainerDecoration(value),
    isFlex: (value: any): value is Flex => Array.isArray(value) && (value as any).map((i: any) => typeof (i) == 'number').reduce((p: boolean, c: boolean) => p && c),
}
