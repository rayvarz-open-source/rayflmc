export enum SelectBoxVariant {
  CheckBox = "CheckBox",
  Radio = "Radio",
  Switch = "Switch",
  Like = "Like"
}

export function isSelectBoxVariant(value: any): value is SelectBoxVariant {
  return value == "CheckBox" || value == "Radio" || value == "Switch" || value == "like";
}
