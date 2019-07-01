import { BehaviorSubject, Observable } from 'rxjs';

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * adds paganation capability to a datasource ( mainly used in [ListDataSource] and [ListController])
 */
export interface IPagable {
  /**
   * holds current page value
   */
  currentPage: BehaviorSubject<number>;

  /**
   * updates currentPage
   * DO NOT DIRECTILY FETCH DATA IN THIS FUNCTION ONLY [refreshCurrentPage()] SHOULD FETCH DATA FROM SERVER
   *
   * @param pageNumber
   */
  setCurrentPage(pageNumber: number): void;

  /**
   * set pageNumber to the next one ( if possible )
   */
  nextPage(): void;

  /**
   * set pageNumber to the previous one ( if possible )
   */
  previousPage(): void;

  /**
   * fetches current page data using [currentPage]'s value
   */
  refreshCurrentPage(): void;
}

export function isPagable(value: any): value is IPagable {
  return (
    value.currentPage != null &&
    value.setCurrentPage != null &&
    value.nextPage != null &&
    value.refreshCurrentPage != null &&
    value.previousPage != null
  );
}

/**
 * convenience methods for a list controller with pagable datasource
 *
 * usage :
 *
 * ```js
 * class DataSource : ListDataSource<Model>, Pagable {
 *    // implementation
 * }
 *
 * class SampleListControllerRaw : ListController<Model, DataSource> {}
 *
 * export const PagableMixin(SampleListControllerRaw);
 *
 * ```
 *
 * @param Base ListController
 */
export function PagableMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isPagable(): boolean {
      return isPagable((this as any).datasource);
    }

    refreshPage(): void {
      (this as any).datasource.refreshCurrentPage();
    }

    setPage(pageNumber: number): void {
      (this as any).datasource.setCurrentPage(pageNumber);
      this.refreshPage();
    }

    nextPage(): void {
      (this as any).datasource.nextPage();
      this.refreshPage();
    }

    previousPage(): void {
      (this as any).datasource.previousPage();
      this.refreshPage();
    }

    getCurrentPageNumber(): Observable<number> {
      return (this as any).datasource.currentPage;
    }
  };
}
