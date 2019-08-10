export type ServiceResolver = (seviceName: string) => any | null;

export class Injector {
  private serviceResolver: ServiceResolver;

  constructor(resolver: ServiceResolver) {
    this.serviceResolver = resolver;
  }

  inject<T>(serviceName: string): T | null {
    let service = this.serviceResolver(serviceName);
    if (service != null) return service as T;
    return null;
  }
}
