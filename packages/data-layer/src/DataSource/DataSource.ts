import { BehaviorSubject } from 'rxjs';
import { IEncodable } from '../Base/IModel';

export interface DataSource {
  dispose(): void;
  loading: BehaviorSubject<boolean>;
}

export class SingleValueDataSource<T extends IEncodable> implements DataSource {
  dispose(): void {}

  value = new BehaviorSubject<T | null>(null);
  loading = new BehaviorSubject<boolean>(false);
}

export class ListDataSource<T extends IEncodable> implements DataSource {
  dispose(): void {}

  values = new BehaviorSubject<T[]>([]);

  loading = new BehaviorSubject<boolean>(false);

  static create<M extends IEncodable>() : ListDataSource<M> {
      return new ListDataSource<M>();
  }

}
