export enum ButtonColor {
  Default = "default",
  Inherit = "inherit",
  Primary = "primary",
  Secondary = "secondary"
}

export function isButtonColor(value: any): value is ButtonColor {
  return (
    value === "default" ||
    value === "inherit" ||
    value === "primary" ||
    value === "secondary"
  );
}
