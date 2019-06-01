import { BehaviorSubject, Observable } from 'rxjs';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface IPagable {
  currentPage: BehaviorSubject<number>;

  setCurrentPage(pageNumber: number): void;

  nextPage(): void;

  previousPage(): void;

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
