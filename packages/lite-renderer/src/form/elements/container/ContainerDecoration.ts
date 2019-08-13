export enum ContainerDecoration {
  None = "None",
  Paper = "Paper"
}

export function isContainerDecoration(value: any): value is ContainerDecoration {
  return value === "None" || value === "Paper";
}
