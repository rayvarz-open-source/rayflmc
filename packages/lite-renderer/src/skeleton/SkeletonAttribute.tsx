export function Skeleton(skeletonName: string) {
    return function<T extends {new(...args:any[]):{}}>(constructor:T) {
        return class extends constructor {
            skeleton = skeletonName;
        }
    }
}
