import { DecodableModelMixin, EncodableModelMixin } from './JSONCodable';

export interface IModel {}

export class Model implements IModel {}

export interface IEncodable {
  encode(data: any): void;
}

export interface IDecodable {
  decode(): object;
}

export interface ICodable extends IDecodable, IEncodable {}

export const EncodableModel = EncodableModelMixin(Model);
export const DecodableModel = DecodableModelMixin(Model);
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
