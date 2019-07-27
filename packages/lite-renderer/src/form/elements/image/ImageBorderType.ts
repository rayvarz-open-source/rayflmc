export enum ImageBorderType {
  Avatar = "avatar",
  Round = "round",
  None = "none",
}

export function isImageBorderType(value: any): value is ImageBorderType {
  return value === "avatar" ||
    value === "round" ||
    value === "none";
}