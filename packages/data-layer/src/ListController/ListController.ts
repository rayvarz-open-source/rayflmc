import { DataControllerTypes } from '..';
import IDataController from '../Base/IDataController';
import { ListDataSource } from '../DataSource/DataSource';
import { IEncodable } from '../Base/IModel';
import { PagableMixin } from '../DataSource/Pagable';
import { SearchableMixin } from '../DataSource/Searchable';

class RawListController<T extends IEncodable, DS extends ListDataSource<T>> implements IDataController {
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

const FormController = SearchableMixin(PagableMixin(RawListController));

export default FormController;
