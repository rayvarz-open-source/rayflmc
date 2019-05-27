import { BehaviorSubject, Observable } from 'rxjs';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface IPagable {
  currentPage: BehaviorSubject<number>;

  setCurrentPage(pageNumber: number): void;

  nextPage(): void;

  previousPage(): void;

  refreshCurrentPage(): void;
}

export function PagableMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isPagable(): boolean {
      return (
        (this as any).datasource.currentPage != null &&
        (this as any).datasource.setCurrentPage != null &&
        (this as any).datasource.nextPage != null &&
        (this as any).datasource.refreshCurrentPage != null &&
        (this as any).datasource.previousPage != null
      );
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
