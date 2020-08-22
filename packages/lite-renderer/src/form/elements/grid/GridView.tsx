import MaterialTable from "material-table";
import * as React from "react";
import useFunctionAsState from "../../../custom-hooks/function-state";
import { Visibility } from "../base/BaseElement";
import { GridElement } from "./GridElement";
import {
  ActionDefinitions,
  ColumnDefinitions,
  ComponentsOverride,
  Datasource,
  GridOptions,
  LocalizationDefinition,
  OnRowClick,
  OnSelectedChange,
  RowActionDefinitions,
  Title
} from "./GridElementAttributes";

type Props = {
  element: GridElement;
  weight: number;
};

export default function GridView<T extends object = any>({
  element,
  weight
}: Props) {
  const tableRef = React.useRef();

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [columnDefinitions, setColumnDefinitions] = React.useState<
    ColumnDefinitions<T>
  >(() => element.columnDefinitionsContainer.value);
  const [actionDefinitions, setActionDefinitions] = React.useState<
    ActionDefinitions<T>
  >(() => element.actionDefinitionsContainer.value);
  const [componentsOverride, setComponentsOverride] = React.useState<
    ComponentsOverride
  >(() => element.componentsOverrideContainer.value);
  const [datasource, setDatasource] = useFunctionAsState<Datasource<T>>(
    () => element.datasourceContainer.value
  );
  const [rowActionDefinitions, setRowActionDefinitions] = React.useState<
    RowActionDefinitions
  >(() => element.rowActionDefinitionsContainer.value);
  const [gridOptions, setGridOptions] = React.useState<GridOptions>(
    () => element.gridOptionsContainer.value
  );
  const [title, setTitle] = React.useState<Title>(
    () => element.titleContainer.value
  );
  const [localizationDefinition, setLocalizationDefinition] = React.useState<
    LocalizationDefinition
  >(() => element.localizationDefinitionContainer.value);
  const [onSelectedChange, setOnSelectedChange] = useFunctionAsState<
    OnSelectedChange<T>
  >(undefined);
  const [onRowClick, setOnRowClick] = useFunctionAsState<OnRowClick<T>>(
    undefined
  );
  const [visibility, setVisibility] = React.useState<Visibility>(
    () => element.elementVisibilityContainer.value
  );

  React.useEffect(() => {
    let columnDefinitionsSub = element.columnDefinitionsContainer.subscribe({
      next: v => setColumnDefinitions(v)
    });
    let actionDefinitionsSub = element.actionDefinitionsContainer.subscribe({
      next: v => setActionDefinitions(v)
    });
    let componentsOverrideSub = element.componentsOverrideContainer.subscribe({
      next: v => setComponentsOverride(v)
    });
    let datasourceSub = element.datasourceContainer.subscribe({
      next: v => setDatasource(v)
    });
    let rowActionDefinitionsSub = element.rowActionDefinitionsContainer.subscribe(
      {
        next: v => setRowActionDefinitions(v)
      }
    );
    let gridOptionsSub = element.gridOptionsContainer.subscribe({
      next: v => setGridOptions(v)
    });
    let titleSub = element.titleContainer.subscribe({ next: v => setTitle(v) });
    let localizationDefinitionSub = element.localizationDefinitionContainer.subscribe(
      {
        next: v => setLocalizationDefinition(v)
      }
    );
    let onRowClickSub = element.onRowClickContainer.subscribe({
      next: v => setOnRowClick(v)
    });
    let visibilitySub = element.elementVisibilityContainer.subscribe({
      next: v => setVisibility(v)
    });
    let onSelectedChangeSub = element.onSelectedChangeContainer.subscribe({
      next: v => setOnSelectedChange(v)
    });
    let refreshEventSub = element.refreshEventContainer.subscribe({
      next: _ => {
        if (Array.isArray(element.datasourceContainer.value)) return;
        tableRef.current != null && (tableRef.current as any).onQueryChange();
      }
    });

    return () => {
      columnDefinitionsSub.unsubscribe();
      actionDefinitionsSub.unsubscribe();
      componentsOverrideSub.unsubscribe();
      datasourceSub.unsubscribe();
      rowActionDefinitionsSub.unsubscribe();
      gridOptionsSub.unsubscribe();
      titleSub.unsubscribe();
      localizationDefinitionSub.unsubscribe();
      refreshEventSub.unsubscribe();
      onSelectedChangeSub.unsubscribe();
      onRowClickSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  if (element.tableRef == null) {
    element.tableRef = tableRef.current;
  }

  if (
    element.tableRef != null &&
    tableRef.current != null &&
    element.tableRef.dataManager !== (tableRef.current as any).dataManager
  ) {
    const current = tableRef.current as any;
    setTimeout(() => {
      current.dataManager = element.tableRef.dataManager;
      const state = element.tableRef.state;
      element.tableRef = tableRef.current; // update old table ref
      current.setState({ ...state }, () => {
        if (current.isRemoteData()) {
          current.onQueryChange(current.state.query);
        }
      });
    }, 0);
  }

  return (
    <div
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }}
    >
      <MaterialTable
        tableRef={tableRef}
        title={title}
        columns={columnDefinitions}
        data={datasource}
        actions={actionDefinitions}
        components={componentsOverride}
        editable={rowActionDefinitions}
        options={gridOptions}
        localization={localizationDefinition}
        onRowClick={onRowClick}
        onSelectionChange={onSelectedChange}
      />
    </div>
  );
}
