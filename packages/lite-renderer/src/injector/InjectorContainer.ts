import { isInjectorReciever } from "./InjectorReciever";
import { Injector } from "./Injector";

export type ServiceBuilder = () => any;

export type RegisterProps = {
  serviceName: string;
  builder: ServiceBuilder;
  isLazyBuilder?: boolean;
};

export enum ServiceTypes {
  Signleton
}

export type Service = {
  type: ServiceTypes;
};

export type SignletonService = Service & {
  instance: any | null;
  builder: ServiceBuilder;
};

export function isSingletonService(value: Service): value is SignletonService {
  return value.type === ServiceTypes.Signleton;
}

export class InjectorContainer {
  private storage: { [key: string]: Service };

  injector: Injector;

  constructor() {
    this.storage = {};
    this.injector = new Injector(serviceName => this.getService(serviceName));
  }

  addSingleton({ serviceName, builder, isLazyBuilder }: RegisterProps) {
    let instance = isLazyBuilder || false ? null : builder();
    if (instance != null && isInjectorReciever(instance)) instance.inject(this.injector);
    let service: SignletonService = {
      instance: instance,
      type: ServiceTypes.Signleton,
      builder
    };

    this.storage[serviceName] = service;
  }

  getService(serviceName: string): any | null {
    let service = this.storage[serviceName];

    if (!service) return null;

    if (isSingletonService(service)) {
      if (service.instance == null) service.instance = service.builder();
      if (isInjectorReciever(service)) service.inject(this.injector);

      return service.instance;
    }

    throw new Error(`Cannot handle service. type: ${service.type} name: ${serviceName}`);
  }
}
