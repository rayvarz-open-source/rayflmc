export type GridRowActionDefinitions = {
  isEditable?: (rowData: any) => boolean;
  isDeletable?: (rowData: any) => boolean;
  onRowAdd?: (newData: any) => Promise<void>;
  onRowUpdate?: (newData: any, oldData?: any) => Promise<void>;
  onRowDelete?: (oldData: any) => Promise<void>;
};
