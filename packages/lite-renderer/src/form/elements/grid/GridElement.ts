
import IElement, { ValidationResult } from '../../../flmc-data-layer/FormController/IElement';
import { ElementType } from '../ElementType';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';
import { BaseElement } from "../base/BaseElement";
import { TypeGuards, ColumnDefinitions, ActionDefinitions, ComponentsOverride, Datasource, RowActionDefinitions, GridOptions, Title } from './GridElementAttributes';

export class GridElement extends BaseElement implements IElement {

    validate(): ValidationResult {
        return new ValidationResult(true);
    }

    dispose(): void { }

    //region auto generated code
    /*******************************************/
    /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
    /*******************************************/

    get type(): string {
        return ElementType.Grid;
    }

    columnDefinitionsContainer = new BehaviorSubject<ColumnDefinitions>([]);

    /** iternal function for handling raw ColumnDefinitions types*/
    private columnDefinitionsR(value: ColumnDefinitions): GridElement {
        this.columnDefinitionsContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<ColumnDefinitions> types*/
    private columnDefinitionsO(value: Observable<ColumnDefinitions>): GridElement {
        value.subscribe({ next: v => this.columnDefinitionsContainer.next(v) });
        return this;
    }

    /**
     * default value: []
     * 
     * TODO: add docs
     */
    columnDefinitions(value: Observable<ColumnDefinitions> | ColumnDefinitions): GridElement {
        if (TypeGuards.isColumnDefinitions(value)) return this.columnDefinitionsR(value);
        else if (isObservable(value)) return this.columnDefinitionsO(value);
        throw new Error(`invalid type ${typeof (value)} for ColumnDefinitions`)
    }


    actionDefinitionsContainer = new BehaviorSubject<ActionDefinitions>([]);

    /** iternal function for handling raw ActionDefinitions types*/
    private actionDefinitionsR(value: ActionDefinitions): GridElement {
        this.actionDefinitionsContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<ActionDefinitions> types*/
    private actionDefinitionsO(value: Observable<ActionDefinitions>): GridElement {
        value.subscribe({ next: v => this.actionDefinitionsContainer.next(v) });
        return this;
    }

    /**
     * default value: []
     * 
     * TODO: add docs
     */
    actionDefinitions(value: Observable<ActionDefinitions> | ActionDefinitions): GridElement {
        if (TypeGuards.isActionDefinitions(value)) return this.actionDefinitionsR(value);
        else if (isObservable(value)) return this.actionDefinitionsO(value);
        throw new Error(`invalid type ${typeof (value)} for ActionDefinitions`)
    }


    componentsOverrideContainer = new BehaviorSubject<ComponentsOverride>({});

    /** iternal function for handling raw ComponentsOverride types*/
    private componentsOverrideR(value: ComponentsOverride): GridElement {
        this.componentsOverrideContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<ComponentsOverride> types*/
    private componentsOverrideO(value: Observable<ComponentsOverride>): GridElement {
        value.subscribe({ next: v => this.componentsOverrideContainer.next(v) });
        return this;
    }

    /**
     * default value: {}
     * 
     * TODO: add docs
     */
    componentsOverride(value: Observable<ComponentsOverride> | ComponentsOverride): GridElement {
        if (isObservable(value)) this.componentsOverrideO(value);
        else this.componentsOverrideR(value);
        return this;
    }


    datasourceContainer = new BehaviorSubject<Datasource>([]);

    /** iternal function for handling raw Datasource types*/
    private datasourceR(value: Datasource): GridElement {
        this.datasourceContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<Datasource> types*/
    private datasourceO(value: Observable<Datasource>): GridElement {
        value.subscribe({ next: v => this.datasourceContainer.next(v) });
        return this;
    }

    /**
     * default value: []
     * 
     * TODO: add docs
     */
    datasource(value: Observable<Datasource> | Datasource): GridElement {
        if (TypeGuards.isDatasource(value)) return this.datasourceR(value);
        else if (isObservable(value)) return this.datasourceO(value);
        throw new Error(`invalid type ${typeof (value)} for Datasource`)
    }


    rowActionDefinitionsContainer = new BehaviorSubject<RowActionDefinitions>({});

    /** iternal function for handling raw RowActionDefinitions types*/
    private rowActionDefinitionsR(value: RowActionDefinitions): GridElement {
        this.rowActionDefinitionsContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<RowActionDefinitions> types*/
    private rowActionDefinitionsO(value: Observable<RowActionDefinitions>): GridElement {
        value.subscribe({ next: v => this.rowActionDefinitionsContainer.next(v) });
        return this;
    }

    /**
     * default value: {}
     * 
     * TODO: add docs
     */
    rowActionDefinitions(value: Observable<RowActionDefinitions> | RowActionDefinitions): GridElement {
        if (isObservable(value)) this.rowActionDefinitionsO(value);
        else this.rowActionDefinitionsR(value);
        return this;
    }


    gridOptionsContainer = new BehaviorSubject<GridOptions>({});

    /** iternal function for handling raw GridOptions types*/
    private gridOptionsR(value: GridOptions): GridElement {
        this.gridOptionsContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<GridOptions> types*/
    private gridOptionsO(value: Observable<GridOptions>): GridElement {
        value.subscribe({ next: v => this.gridOptionsContainer.next(v) });
        return this;
    }

    /**
     * default value: {}
     * 
     * TODO: add docs
     */
    gridOptions(value: Observable<GridOptions> | GridOptions): GridElement {
        if (isObservable(value)) this.gridOptionsO(value);
        else this.gridOptionsR(value);
        return this;
    }


    titleContainer = new BehaviorSubject<Title>('');

    /** iternal function for handling raw Title types*/
    private titleR(value: Title): GridElement {
        this.titleContainer.next(value);
        return this;
    }

    /** iternal function for handling Observable<Title> types*/
    private titleO(value: Observable<Title>): GridElement {
        value.subscribe({ next: v => this.titleContainer.next(v) });
        return this;
    }

    /**
     * default value: ''
     * 
     * TODO: add docs
     */
    title(value: Observable<Title> | Title): GridElement {
        if (TypeGuards.isTitle(value)) return this.titleR(value);
        else if (isObservable(value)) return this.titleO(value);
        throw new Error(`invalid type ${typeof (value)} for Title`)
    }

    /*******************************************/
    /* END OF GENERATED CODE                   */
    /*******************************************/
    //endregion
}


/*******************************************/
/* GENERATED CODE, DO NOT MODIFY BY HAND!! */
/*******************************************/

/** 
 * @example
 * // usage: TODO: add docs
 * 
 * 
 */
const Grid = (): GridElement => {
    return new GridElement()
        ;
};

export default Grid;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/

