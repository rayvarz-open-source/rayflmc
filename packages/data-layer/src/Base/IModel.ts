export interface IModel {}

export interface IEncodable {
  encode(data: any): void;
}

export interface IDecodable {
  decode(): object;
}

export interface ICodable extends IDecodable, IEncodable {}

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
