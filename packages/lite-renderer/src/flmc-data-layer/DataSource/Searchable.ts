import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * adds search capability to a datasource ( mainly used in [ListDataSource] and [ListController])
 */
export interface ISearchable {
  /**
   * holds current search value
   * if null it means there is no text filter
   * if empty string it means there is text filter with an empty string
   */
  searchText: BehaviorSubject<string | null>;

  /**
   * change search value and fetch data from server
   *
   * TODO: seprate fetch data part
   *
   * @param text search value
   */
  setSearchText(text: string | null): void;
}

export function isSearchable(value: any): value is ISearchable {
  return value.searchText != null && value.setSearchText != null;
}

/**
 * convenience methods for a list controller with searchable datasource
 *
 * usage :
 *
 * ```js
 * class DataSource : ListDataSource<Model>, ISearchable {
 *    // implementation
 * }
 *
 * class SampleListControllerRaw : ListController<Model, DataSource> {}
 *
 * export const SearchableMixin(SampleListControllerRaw);
 *
 * ```
 *
 * @param Base ListController
 */
export function SearchableMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isSearchable(): boolean {
      return isSearchable((this as any).datasource);
    }

    clearSearchText(): void {
      (this as any).datasource.setSearchText(null);
    }

    setSearchText(text: string): void {
      (this as any).datasource.setSearchText(text);
    }

    getSearchText(): Observable<string> {
      return (this as any).datasource.searchText.pipe(
        map(v => (v == null ? "" : v))
      );
    }
  };
}
