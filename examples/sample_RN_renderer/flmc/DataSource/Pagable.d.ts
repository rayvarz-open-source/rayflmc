import { BehaviorSubject, Observable } from 'rxjs';
declare type Constructor<T = {}> = new (...args: any[]) => T;
export interface IPagable {
    currentPage: BehaviorSubject<number>;
    setCurrentPage(pageNumber: number): void;
    nextPage(): void;
    previousPage(): void;
    refreshCurrentPage(): void;
}
export declare function PagableMixin<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        isPagable(): boolean;
        refreshPage(): void;
        setPage(pageNumber: number): void;
        nextPage(): void;
        previousPage(): void;
        getCurrentPageNumber(): Observable<number>;
    };
} & TBase;
export {};
