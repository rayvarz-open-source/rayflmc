import { DataControllerTypes } from '..';
import IDataController from '../Base/IDataController';
import { ListDataSource } from '../DataSource/DataSource';
import { IEncodable } from '../Base/IModel';
import { PagableMixin } from '../DataSource/Pagable';

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

const FormController = PagableMixin(RawListController);

export default FormController;
