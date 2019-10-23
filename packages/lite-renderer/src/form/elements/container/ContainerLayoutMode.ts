export enum ContainerLayoutMode {
    Responsive = "Responsive",
    Static = "Static",
  }
  
  export function isContainerLayoutMode(value: any): value is ContainerLayoutMode {
    return value === "Responsive" || value === "Static";
  }
  