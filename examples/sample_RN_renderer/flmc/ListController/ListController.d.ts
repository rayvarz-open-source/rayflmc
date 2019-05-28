import IDataController from '../Base/IDataController';
import { ListDataSource } from '../DataSource/DataSource';
import { IEncodable } from '../Base/IModel';
export declare class RawListController<T extends IEncodable, DS extends ListDataSource<T>> implements IDataController {
    datasource: DS;
    constructor(datasource: DS);
    beforeDispose(): void;
    afterDispose(): void;
    init(): void;
    readonly type: string;
}
declare const ListController: {
    new (...args: any[]): {
        isSearchable(): boolean;
        clearSearchText(): void;
        setSearchText(text: string): void;
        getSearchText(): import("rxjs").Observable<string>;
    };
} & {
    new (...args: any[]): {
        isPagable(): boolean;
        refreshPage(): void;
        setPage(pageNumber: number): void;
        nextPage(): void;
        previousPage(): void;
        getCurrentPageNumber(): import("rxjs").Observable<number>;
    };
} & typeof RawListController;
export default ListController;
