export type PlatformRouteInfo = {
    path: string, params: object, title?: string, extras?: any
}

export type PlatformRouteId = number;

export const PLATFORM_ROUTE_LOCATOR_SERVICE = "LiteRenderer:Services:PlatformRouteLocatorService";

export interface IPlatformRouteLocatorService {
    
    removeOnPlatformRouteChangedListener(callbackId: number);

    addOnPlatformRouteChangedListener(callback: (PlatformRouteInfo) => void): number;
    
    getCurrentRouteInfo(): PlatformRouteInfo;

    pushRoute(info: PlatformRouteInfo);

    pushReplaceRoute(info: PlatformRouteInfo);

    pop();

}
