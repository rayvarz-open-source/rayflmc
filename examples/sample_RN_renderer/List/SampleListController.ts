import { BehaviorSubject } from "rxjs";
import { ListDataSource } from "../flmc/DataSource/DataSource";
import { SampleModel, MockServer } from "./MockServer";
import { IPagable, PagableMixin } from "../flmc/DataSource/Pagable";
import { ISearchable, SearchableMixin } from "../flmc/DataSource/Searchable";
import ListController, { RawListController } from "../flmc/ListController/ListController";

export class SampleDataSource extends ListDataSource<SampleModel> implements IPagable, ISearchable {
    searchText = new BehaviorSubject<string | null>("");

    setSearchText(text: string | null): void {
        this.values.next([]);
        this.currentPage.next(0);
        this.searchText.next(text);
        this.refreshCurrentPage();
    }
    currentPage = new BehaviorSubject<number>(0);

    setCurrentPage(pageNumber: number): void { }

    nextPage(): void {
        this.currentPage.next(this.currentPage.value + 1);
        this.refreshCurrentPage();
    }
    previousPage(): void { }

    refreshCurrentPage(): void {
        this.loading.next(true);
        new MockServer().getData(this.currentPage.value, this.searchText.value == null ? "" : this.searchText.value, (values: SampleModel[]) => {
            this.values.next([...this.values.value, ...values]);
            this.loading.next(false);
        })
    }


}

class SampleListControllerRaw extends RawListController<SampleModel, SampleDataSource> {

}

export const SampleListController = SearchableMixin(PagableMixin(SampleListControllerRaw));
