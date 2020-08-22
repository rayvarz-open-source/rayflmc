import type { Action, Column, Components, Localization, Options, Query, QueryResult } from 'material-table';
import { GridRowActionDefinitions } from './GridRowActionDefinitions';
/** @ElementDoc
 * @example
 * // usage: TODO: add docs
 *
 *
 */
// Element: Grid
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isColumnDefinitions","default":"[]"}]
 */
export type ColumnDefinitions<T extends object> = Column<T>[];
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isActionDefinitions","default":"[]"}]
 */
export type ActionDefinitions<T extends object> = (Action<T> | ((rowData: T) => Action<T>))[];
/**
 * @[{"bidirectional":false,"required":false,"default":"{}"}]
 */
export type ComponentsOverride = Components;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isDatasource","default":"[]"}]
 */
export type Datasource<T extends object> = T[] | ((query: Query<T>) => Promise<QueryResult<T>>);
/**
 * @[{"bidirectional":false,"required":false,"default":"{}"}]
 */
export type RowActionDefinitions = GridRowActionDefinitions;
/**
 * @[{"bidirectional":false,"required":false,"default":"{}"}]
 */
export type GridOptions = Options;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isTitle","default":"''"}]
 */
export type Title = string;
/**
 * @[{"bidirectional":false,"required":false,"default":"undefined"}]
 */
export type LocalizationDefinition = Localization | undefined;
/**
 * @[{"bidirectional":true,"required":false,"default":"null"}]
 */
export type RefreshEvent = null;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isOnSelectedChange","default":"undefined"}]
 */
export type OnSelectedChange<T> = ((data: T[], rowData?: T) => void) | undefined;
/**
 * @[{"bidirectional":false,"required":false,"typeguard":"isOnRowClick","default":"undefined"}]
 */
export type OnRowClick<T> =
  | ((event?: React.MouseEvent, rowData?: T, toggleDetailPanel?: (panelIndex?: number) => void) => void)
  | undefined;
// End Element

// type guards

export const TypeGuards = {
  isColumnDefinitions: (value: any): value is ColumnDefinitions<any> => Array.isArray(value),
  isActionDefinitions: (value: any): value is ActionDefinitions<any> => Array.isArray(value),
  isDatasource: (value: any): value is Datasource<any> => Array.isArray(value) || typeof value == 'function',
  isTitle: (value: any): value is Title => typeof value == 'string',
  isOnSelectedChange: (value: any): value is OnSelectedChange<any> =>
    typeof value === 'function' || typeof value === 'undefined',
  isOnRowClick: (value: any): value is OnRowClick<any> => typeof value === 'function' || typeof value === 'undefined',
};
