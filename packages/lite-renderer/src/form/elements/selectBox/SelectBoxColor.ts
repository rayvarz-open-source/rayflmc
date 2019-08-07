export enum SelectBoxColors {
  Primary = "primary",
  Secondary = "secondary",
  Default = "default"
}

export function isSelectBoxColors(value: any): value is SelectBoxColors {
  return value == "primary" || value == "secondary" || value == "default";
}
