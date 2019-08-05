export enum ContainerDirection {
  Column = "column",
  ColumnReverse = "column-reverse",
  Row = "row",
  RowReverse = "row-reverse"
}

export function isContainerDirection(value: any): value is ContainerDirection {
  return (
    value === "column" ||
    value === "column-reverse" ||
    value === "row" ||
    value === "row-reverse"
  );
}
