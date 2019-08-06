export enum TextAlignment {
  Left = "left",
  Center = "center",
  Right = "right",
  Justify = "justify",
  Inherit = "inherit"
}

export function isTextAlignment(value: any): value is TextAlignment {
  return value === "left" || value === "center" || value === "right" || value === "justify" || value === "inherit";
}
