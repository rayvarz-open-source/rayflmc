export interface IModel {
}
export declare class Model implements IModel {
}
export interface IEncodable {
    encode(data: any): void;
}
export interface IDecodable {
    decode(): object;
}
export interface ICodable extends IDecodable, IEncodable {
}
export declare const EncodableModel: {
    new (...args: any[]): {
        encode(data: any): void;
    };
} & typeof Model;
export declare const DecodableModel: {
    new (...args: any[]): {
        decode(): object;
    };
} & typeof Model;
export declare const CodableModel: {
    new (...args: any[]): {
        encode(data: any): void;
    };
} & {
    new (...args: any[]): {
        decode(): object;
    };
} & typeof Model;
export declare function isEncodable(value: any): value is IEncodable;
export declare function isDecodable(value: any): value is IDecodable;
export declare function isCodable(value: any): value is ICodable;
