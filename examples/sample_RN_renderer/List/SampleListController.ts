import { ListDataSource } from "../flmc/DataSource/DataSource";
import { IPagable, PagableMixin } from "../flmc/DataSource/Pagable";
import { ISearchable, SearchableMixin } from "../flmc/DataSource/Searchable";
import { SampleModel, MockServer } from "./MockServer";
import { BehaviorSubject } from "rxjs";
import ListController, { RawListController } from "../flmc/ListController/ListController";

class SampleDataSource extends ListDataSource<SampleModel> implements IPagable, ISearchable {
    searchText = new BehaviorSubject<string | null>("");

    setSearchText(text: string | null): void {
        this.values.next([]);
        this.currentPage.next(0);
        this.searchText.next(text);
    }
    currentPage = new BehaviorSubject<number>(0);

    setCurrentPage(pageNumber: number): void { }

    nextPage(): void {
        this.currentPage.next(this.currentPage.value + 1);
        this.refreshCurrentPage();
    }
    previousPage(): void { }

    refreshCurrentPage(): void {
        new MockServer().getData(this.currentPage.value, this.searchText.value == null ? "" : this.searchText.value, (values: SampleModel[]) => {
            this.values.next([...this.values.value, ...values]);
        })
    }


}

class SampleListControllerRaw extends RawListController<SampleModel, SampleDataSource> {

}

const SampleListController = SearchableMixin(PagableMixin(SampleListControllerRaw));

export default SampleDataSource;