export enum DisplayType {
  Block = "block",
  Initial = "initial",
  Inline = "inline"
}

export function isDisplayType(value: any): value is DisplayType {
  return value === "block" || value === "initial" || value === "inline";
}
