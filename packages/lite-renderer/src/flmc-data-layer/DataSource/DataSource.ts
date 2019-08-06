import { BehaviorSubject } from "rxjs";
import { IEncodable } from "../Base/IModel";

/**
 * if a class implement this data interface, it can be used
 * for fetching data (server or local)
 *
 * TODO: rename DataSource to IDataSource
 */
export interface DataSource {
  dispose(): void;
  loading: BehaviorSubject<boolean>;
}

export function isDataSource(value: any): value is DataSource {
  return value.dispose != null && value.loading != null;
}

/**
 * type of datasource for fetching data in form of a single object
 *
 * e.g: fetching details in a form.
 */
export class SingleValueDataSource<T extends IEncodable> implements DataSource {
  dispose(): void {}

  value = new BehaviorSubject<T | null>(null);
  loading = new BehaviorSubject<boolean>(false);
}

export function isSingleValueDataSource(value: any): value is SingleValueDataSource<any> {
  return value.value != null;
}

/**
 * type of datasource for fetching data in form of list of objects
 *
 * used in ListController
 */
export class ListDataSource<T extends IEncodable> implements DataSource {
  dispose(): void {}

  values = new BehaviorSubject<T[]>([]);

  loading = new BehaviorSubject<boolean>(false);
}

export function isListDataSource(value: any): value is ListDataSource<any> {
  return value.values != null;
}
