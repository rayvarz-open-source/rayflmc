import { ImageScaleType, isImageScaleType } from "./ImageScaleType";
import { ImageBorderType } from "../../..";
import { isImageBorderType } from "./ImageBorderType";

/** @ElementDoc
 * @example
 * // usage:
 * let controller = new BehaviorSubject<string>("http://images.test/placeholder.png");
 * Image(controller);
 * 
 */
// Element: Image
/**
 * @[{"bidirectional":false,"required":true,"typeguard":"isAddress","default":"undefined"}]
 * address of image
 * 
 */
export type Address = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isAlt","default":"undefined"}]
 * same as <image alt=".."/>
 * 
 */
export type Alt = string | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isWidth","default":"60"}]
 * image width
 * 
 */
export type Width = number;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isHeight","default":"60"}]
 * image height
 * 
 */
export type Height = number;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isScale","default":"ImageScaleType.Contain"}]
 * scale type // TODO: add docs
 * 
 */
export type Scale = ImageScaleType;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isBorder","default":"ImageBorderType.None"}]
 * border type // TODO: add docs
 * 
 */
export type Border = ImageBorderType;
// End Element

// type guards

export const TypeGuards = {
    isAddress: (value: any): value is Address => typeof (value) === "string" || typeof (value) === "undefined",
    isAlt: (value: any): value is Alt => typeof (value) === "string" || typeof (value) === "undefined",
    isWidth: (value: any): value is Width => typeof (value) === "number",
    isHeight: (value: any): value is Height => typeof (value) === "number",
    isScale: (value: any): value is Scale => isImageScaleType(value),
    isBorder: (value: any): value is Border => isImageBorderType(value),
}