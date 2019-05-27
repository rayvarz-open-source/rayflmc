import { IEncodable, IDecodable, isDecodable } from './IModel';

type Constructor<T = {}> = new (...args: any[]) => T;

export function EncodableModelMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base implements IEncodable {
    public encode(data: any): void {
      let dataObject: object = data;
      if (typeof data == 'string') dataObject = JSON.parse(data);

      Object.assign(this, dataObject);

      // TODO: add support for null properties
      // TODO: add support for list properties
      // TODO: add support for nested model properties
    }
  };
}

export function DecodableModelMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base implements IDecodable {
    public decode(): object {
      const output: { [k: string]: any } = {};
      for (const prop in this) {
        const propValue = this[prop];
        switch (typeof propValue) {
          case 'boolean':
          case 'number':
          case 'string':
          case 'bigint':
            output[prop] = propValue;
            break;
          case 'undefined':
            output[prop] = null;
            break;
          case 'object': // TODO: support lists
            if (propValue == null) {
              output[prop] = null;
            } else if (isDecodable(propValue)) {
              output[prop] = propValue.decode();
            }
            break;
          default:
            break;
        }
      }

      return output;
    }
  };
}
