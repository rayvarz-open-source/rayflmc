export enum ButtonIconPlacement {
  Start = "Start",
  End = "End"
}

export function isButtonIconPlacement(value: any): value is ButtonIconPlacement {
  return value === "Start" || value === "End";
}
