import { BehaviorSubject } from 'rxjs';
import { IEncodable } from '../Base/IModel';
export interface DataSource {
    dispose(): void;
    loading: BehaviorSubject<boolean>;
}
export declare class SingleValueDataSource<T extends IEncodable> implements DataSource {
    dispose(): void;
    value: BehaviorSubject<T | null>;
    loading: BehaviorSubject<boolean>;
}
export declare class ListDataSource<T extends IEncodable> implements DataSource {
    dispose(): void;
    values: BehaviorSubject<T[]>;
    loading: BehaviorSubject<boolean>;
}
