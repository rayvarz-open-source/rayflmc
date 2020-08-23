import { DataControllerTypes } from "..";
import IDataController from "../Base/IDataController";
import { IEncodable } from "../Base/IModel";
import { ListDataSource } from "../DataSource/DataSource";
import { PagableMixin } from "../DataSource/Pagable";
import { SearchableMixin } from "../DataSource/Searchable";

/**
 * used for handling lists data
 *
 * TODO: finalize interface
 */
export class RawListController<
  T extends IEncodable,
  DS extends ListDataSource<any>
> implements IDataController {
  constructor(public datasource: DS) {}
  onPause() {}
  onResume() {}
  beforeDispose(): void {
    this.datasource.dispose();
  }

  afterDispose(): void {}

  init(): void {}

  get type(): string {
    return DataControllerTypes.ListController;
  }
}

const ListController = SearchableMixin(PagableMixin(RawListController));

export default ListController;
