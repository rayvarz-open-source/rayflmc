export enum SelectBoxLabelPlacement {
  End = "end",
  Start = "start",
  Top = "top",
  Bottom = "bottom"
}

export function isSelectBoxLabelPlacement(value: any): value is SelectBoxLabelPlacement {
  return value == "end" || value == "start" || value == "top" || value == "bottom";
}
