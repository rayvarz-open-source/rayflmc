export enum ChipSelectionType {
  Delete = "delete",
  Select = "select",
  MultiSelect = "multiselect",
  Show = "show"
}

export function isChipSelectionType(value: any): value is ChipSelectionType {
  return value === "delete" || value === "select" || value === "multiselect" || value === "show";
}
