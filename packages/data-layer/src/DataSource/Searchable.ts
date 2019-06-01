import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface ISearchable {
  searchText: BehaviorSubject<string | null>;

  setSearchText(text: string | null): void;
}

export function isSearchable(value: any): value is ISearchable {
  return value.searchText != null && value.setSearchText != null;
}

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
      return (this as any).datasource.searchText.pipe(map(v => (v == null ? '' : v)));
    }
  };
}
