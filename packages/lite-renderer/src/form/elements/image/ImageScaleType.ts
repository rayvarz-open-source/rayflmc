export enum ImageScaleType {
  Contain = "contain",
  Cover = "cover",
  Fill = "fill",
  ScaleDown = "scale-down"
}

export function isImageScaleType(value: any): value is ImageScaleType {
  return (
    value === "contain" ||
    value === "cover" ||
    value === "fill" ||
    value === "scale-down"
  );
}
