import { DataControllerTypes } from "..";
import IDataController from "../Base/IDataController";
import { ListDataSource } from "../DataSource/DataSource";
import { IEncodable } from "../Base/IModel";
import { PagableMixin } from "../DataSource/Pagable";
import { SearchableMixin } from "../DataSource/Searchable";

/**
 * used for handling lists data
 *
 * TODO: finalize interface
 */
export class RawListController<T extends IEncodable, DS extends ListDataSource<any>> implements IDataController {
  constructor(public datasource: DS) {}

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
