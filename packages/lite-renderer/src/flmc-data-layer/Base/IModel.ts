import { DecodableModelMixin, EncodableModelMixin } from './JSONCodable';

export interface IModel {}

export class Model implements IModel {}

/**
 * class that can be deserialized
 */
export interface IEncodable {
  /**
   * (should) map raw object properties ( json fields ) to appropriate property
   * of model.
   *
   * @param data raw object ( json data )
   */
  encode(data: any): void;
}

/**
 * class that can be serialized
 */
export interface IDecodable {
  /**
   * (should) convert object's properties to an object
   * (serialize object to raw object that can be converted to JSON using [JSON.stringify])
   */
  decode(): object;
}

/**
 * class that can be serialized and deserialized
 */
export interface ICodable extends IDecodable, IEncodable {}

/**
 * convenience encodable class with a default encode method
 */
export const EncodableModel = EncodableModelMixin(Model);
/**
 * convenience decodable class with a default decode method
 */
export const DecodableModel = DecodableModelMixin(Model);
/**
 * convenience encodable and decodable class with a default encode and decode method
 */
export const CodableModel = EncodableModelMixin(DecodableModelMixin(Model));

// type guards

export function isEncodable(value: any): value is IEncodable {
  return value.encode != null;
}
export function isDecodable(value: any): value is IDecodable {
  return value.decode != null;
}
export function isCodable(value: any): value is ICodable {
  return value.decode != null && value.encode != null;
}
