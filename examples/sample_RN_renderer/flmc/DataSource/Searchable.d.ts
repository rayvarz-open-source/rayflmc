import { BehaviorSubject, Observable } from 'rxjs';
declare type Constructor<T = {}> = new (...args: any[]) => T;
export interface ISearchable {
    searchText: BehaviorSubject<string | null>;
    setSearchText(text: string | null): void;
}
export declare function SearchableMixin<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        isSearchable(): boolean;
        clearSearchText(): void;
        setSearchText(text: string): void;
        getSearchText(): Observable<string>;
    };
} & TBase;
export {};
