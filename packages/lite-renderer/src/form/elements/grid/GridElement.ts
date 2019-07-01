import IElement, { ValidationResult } from 'flmc-data-layer/src/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { Column, Action, Components, Query, QueryResult, Options } from 'material-table'

type ColumnDefinitions = Column[];
type ActionDefinitions = (Action | ((rowData: any) => Action))[];
type ComponentsOverride = Components;
type Datasource = any[] | ((query: Query) => Promise<QueryResult>);
type RowActionDefinitions = {
    isEditable?: (rowData: any) => boolean;
    isDeletable?: (rowData: any) => boolean;
    onRowAdd?: (newData: any) => Promise<void>;
    onRowUpdate?: (newData: any, oldData?: any) => Promise<void>;
    onRowDelete?: (oldData: any) => Promise<void>;
};
type GridOptions = Options;

export class GridElement implements IElement {
    dispose(): void { }

    get type(): string {
        return ElementType.GRID;
    }

    validate(): ValidationResult {
        // no need to validate Grid Element for now
        throw new ValidationResult(true, "");
    }

    // columnDefinitionContainer = new BehaviorSubject<ColumnDefinitions>([]);

    // private columnDefinitionR(definitions: ColumnDefinitions): GridElement {
    //     this.columnDefinitionContainer.next(definitions);
    //     return this;
    // }

    // private columnDefinitionO(definitions: Observable<IElement[]>): GridElement {
    //     definitions.subscribe({
    //         next: v => this.columnDefinitionContainer.next(v),
    //     });
    //     return this;
    // }

    // columnDefinition(definitions: Observable<IElement[]> | ColumnDefinitions): GridElement {
    //     if (isObservable(definitions)) this.columnDefinitionO(definitions);
    //     else this.columnDefinitionR(definitions);
    //     return this;
    // }

    dataSource() {
        // TODO: implmenet
        throw new Error("Not implemented");
    }

}

const Grid = (): GridElement => {
    let element = new GridElement();
    return element;
};

export default Grid;
