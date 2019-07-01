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



    columnDefinitionsContainer = new BehaviorSubject<ColumnDefinitions>([]);

    private columnDefinitionsR(value: ColumnDefinitions): GridElement {
        this.columnDefinitionsContainer.next(value);
        return this;
    }

    private columnDefinitionsO(value: Observable<ColumnDefinitions>): GridElement {
        value.subscribe({
            next: v => this.columnDefinitionsContainer.next(v),
        });
        return this;
    }

    columnDefinitions(value: Observable<ColumnDefinitions> | ColumnDefinitions): GridElement {
        if (isObservable(value)) this.columnDefinitionsO(value);
        else this.columnDefinitionsR(value);
        return this;
    }


    actionDefinitionsContainer = new BehaviorSubject<ActionDefinitions>([]);

    private actionDefinitionsR(value: ActionDefinitions): GridElement {
        this.actionDefinitionsContainer.next(value);
        return this;
    }

    private actionDefinitionsO(value: Observable<ActionDefinitions>): GridElement {
        value.subscribe({
            next: v => this.actionDefinitionsContainer.next(v),
        });
        return this;
    }

    actionDefinitions(value: Observable<ActionDefinitions> | ActionDefinitions): GridElement {
        if (isObservable(value)) this.actionDefinitionsO(value);
        else this.actionDefinitionsR(value);
        return this;
    }


    componentsOverrideContainer = new BehaviorSubject<ComponentsOverride>({});

    private componentsOverrideR(value: ComponentsOverride): GridElement {
        this.componentsOverrideContainer.next(value);
        return this;
    }

    private componentsOverrideO(value: Observable<ComponentsOverride>): GridElement {
        value.subscribe({
            next: v => this.componentsOverrideContainer.next(v),
        });
        return this;
    }

    componentsOverride(value: Observable<ComponentsOverride> | ComponentsOverride): GridElement {
        if (isObservable(value)) this.componentsOverrideO(value);
        else this.componentsOverrideR(value);
        return this;
    }


    datasourceContainer = new BehaviorSubject<Datasource>([]);

    private datasourceR(value: Datasource): GridElement {
        this.datasourceContainer.next(value);
        return this;
    }

    private datasourceO(value: Observable<Datasource>): GridElement {
        value.subscribe({
            next: v => this.datasourceContainer.next(v),
        });
        return this;
    }

    datasource(value: Observable<Datasource> | Datasource): GridElement {
        if (isObservable(value)) this.datasourceO(value);
        else this.datasourceR(value);
        return this;
    }


    rowActionDefinitionsContainer = new BehaviorSubject<RowActionDefinitions>([]);

    private rowActionDefinitionsR(value: RowActionDefinitions): GridElement {
        this.rowActionDefinitionsContainer.next(value);
        return this;
    }

    private rowActionDefinitionsO(value: Observable<RowActionDefinitions>): GridElement {
        value.subscribe({
            next: v => this.rowActionDefinitionsContainer.next(v),
        });
        return this;
    }

    rowActionDefinitions(value: Observable<RowActionDefinitions> | RowActionDefinitions): GridElement {
        if (isObservable(value)) this.rowActionDefinitionsO(value);
        else this.rowActionDefinitionsR(value);
        return this;
    }


    gridOptionsContainer = new BehaviorSubject<GridOptions>([]);

    private gridOptionsR(value: GridOptions): GridElement {
        this.gridOptionsContainer.next(value);
        return this;
    }

    private gridOptionsO(value: Observable<GridOptions>): GridElement {
        value.subscribe({
            next: v => this.gridOptionsContainer.next(v),
        });
        return this;
    }

    gridOptions(value: Observable<GridOptions> | GridOptions): GridElement {
        if (isObservable(value)) this.gridOptionsO(value);
        else this.gridOptionsR(value);
        return this;
    }


}

const Grid = (): GridElement => {
    let element = new GridElement();
    return element;
};

export default Grid;
