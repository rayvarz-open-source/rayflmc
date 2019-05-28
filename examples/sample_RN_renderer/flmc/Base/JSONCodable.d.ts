declare type Constructor<T = {}> = new (...args: any[]) => T;
export declare function EncodableModelMixin<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        encode(data: any): void;
    };
} & TBase;
export declare function DecodableModelMixin<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        decode(): object;
    };
} & TBase;
export {};
