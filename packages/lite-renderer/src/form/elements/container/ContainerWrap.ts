export enum ContainerWrap {
  NoWrap = "nowrap",
  Wrap = "wrap",
  WrapReverse = "wrap-reverse"
}

export function isContainerWrap(value: any): value is ContainerWrap {
  return value === "nowrap" || value === "wrap" || value === "wrap-reverse";
}
