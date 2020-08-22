import { BehaviorSubject, isObservable, Observable } from "rxjs";
import { isSubject } from "../../../flmc-data-layer";
import IElement, {
  ValidationResult
} from "../../../flmc-data-layer/FormController/IElement";
import { BaseElement } from "../base/BaseElement";
import { ElementType } from "../ElementType";
import {
  ActionDefinitions,
  ColumnDefinitions,
  ComponentsOverride,
  Datasource,
  GridOptions,
  LocalizationDefinition,
  OnRowClick,
  OnSelectedChange,
  RefreshEvent,
  RowActionDefinitions,
  Title,
  TypeGuards
} from "./GridElementAttributes";

export class GridElement<T extends object = any> extends BaseElement
  implements IElement {
  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.Grid;
  }

  columnDefinitionsContainer = new BehaviorSubject<ColumnDefinitions<T>>([]);

  /** iternal function for handling raw ColumnDefinitions<T> types*/
  private columnDefinitionsR(value: ColumnDefinitions<T>): GridElement {
    this.columnDefinitionsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<ColumnDefinitions<T>> types*/
  private columnDefinitionsO(
    value: Observable<ColumnDefinitions<T>>
  ): GridElement {
    value.subscribe({ next: v => this.columnDefinitionsContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * TODO: add docs
   */
  columnDefinitions(
    value: Observable<ColumnDefinitions<T>> | ColumnDefinitions<T>
  ): GridElement {
    if (TypeGuards.isColumnDefinitions(value))
      return this.columnDefinitionsR(value);
    else if (isObservable(value)) return this.columnDefinitionsO(value);
    throw new Error(`invalid type ${typeof value} for ColumnDefinitions<T>`);
  }

  actionDefinitionsContainer = new BehaviorSubject<ActionDefinitions<T>>([]);

  /** iternal function for handling raw ActionDefinitions<T> types*/
  private actionDefinitionsR(value: ActionDefinitions<T>): GridElement {
    this.actionDefinitionsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<ActionDefinitions<T>> types*/
  private actionDefinitionsO(
    value: Observable<ActionDefinitions<T>>
  ): GridElement {
    value.subscribe({ next: v => this.actionDefinitionsContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * TODO: add docs
   */
  actionDefinitions(
    value: Observable<ActionDefinitions<T>> | ActionDefinitions<T>
  ): GridElement {
    if (TypeGuards.isActionDefinitions(value))
      return this.actionDefinitionsR(value);
    else if (isObservable(value)) return this.actionDefinitionsO(value);
    throw new Error(`invalid type ${typeof value} for ActionDefinitions<T>`);
  }

  componentsOverrideContainer = new BehaviorSubject<ComponentsOverride>({});

  /** iternal function for handling raw ComponentsOverride types*/
  private componentsOverrideR(value: ComponentsOverride): GridElement {
    this.componentsOverrideContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<ComponentsOverride> types*/
  private componentsOverrideO(
    value: Observable<ComponentsOverride>
  ): GridElement {
    value.subscribe({ next: v => this.componentsOverrideContainer.next(v) });
    return this;
  }

  /**
   * default value: {}
   *
   * TODO: add docs
   */
  componentsOverride(
    value: Observable<ComponentsOverride> | ComponentsOverride
  ): GridElement {
    if (isObservable(value)) this.componentsOverrideO(value);
    else this.componentsOverrideR(value);
    return this;
  }

  datasourceContainer = new BehaviorSubject<Datasource<T>>([]);

  /** iternal function for handling raw Datasource<T> types*/
  private datasourceR(value: Datasource<T>): GridElement {
    this.datasourceContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Datasource<T>> types*/
  private datasourceO(value: Observable<Datasource<T>>): GridElement {
    value.subscribe({ next: v => this.datasourceContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * TODO: add docs
   */
  datasource(value: Observable<Datasource<T>> | Datasource<T>): GridElement {
    if (TypeGuards.isDatasource(value)) return this.datasourceR(value);
    else if (isObservable(value)) return this.datasourceO(value);
    throw new Error(`invalid type ${typeof value} for Datasource<T>`);
  }

  rowActionDefinitionsContainer = new BehaviorSubject<RowActionDefinitions>({});

  /** iternal function for handling raw RowActionDefinitions types*/
  private rowActionDefinitionsR(value: RowActionDefinitions): GridElement {
    this.rowActionDefinitionsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<RowActionDefinitions> types*/
  private rowActionDefinitionsO(
    value: Observable<RowActionDefinitions>
  ): GridElement {
    value.subscribe({ next: v => this.rowActionDefinitionsContainer.next(v) });
    return this;
  }

  /**
   * default value: {}
   *
   * TODO: add docs
   */
  rowActionDefinitions(
    value: Observable<RowActionDefinitions> | RowActionDefinitions
  ): GridElement {
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

  titleContainer = new BehaviorSubject<Title>("");

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
    throw new Error(`invalid type ${typeof value} for Title`);
  }

  localizationDefinitionContainer = new BehaviorSubject<LocalizationDefinition>(
    undefined
  );

  /** iternal function for handling raw LocalizationDefinition types*/
  private localizationDefinitionR(value: LocalizationDefinition): GridElement {
    this.localizationDefinitionContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<LocalizationDefinition> types*/
  private localizationDefinitionO(
    value: Observable<LocalizationDefinition>
  ): GridElement {
    value.subscribe({
      next: v => this.localizationDefinitionContainer.next(v)
    });
    return this;
  }

  /**
   * default value: undefined
   *
   * TODO: add docs
   */
  localizationDefinition(
    value: Observable<LocalizationDefinition> | LocalizationDefinition
  ): GridElement {
    if (isObservable(value)) this.localizationDefinitionO(value);
    else this.localizationDefinitionR(value);
    return this;
  }

  refreshEventContainer = new BehaviorSubject<RefreshEvent>(null);

  /** iternal function for handling BehaviorSubject<RefreshEvent> types used for bidirectional bindings*/
  private refreshEventB(value: BehaviorSubject<RefreshEvent>): GridElement {
    this.refreshEventContainer = value;
    return this;
  }

  /** iternal function for handling raw RefreshEvent types*/
  private refreshEventR(value: RefreshEvent): GridElement {
    this.refreshEventContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<RefreshEvent> types*/
  private refreshEventO(value: Observable<RefreshEvent>): GridElement {
    value.subscribe({ next: v => this.refreshEventContainer.next(v) });
    return this;
  }

  /**
   * default value: null
   *
   * TODO: add docs
   */
  refreshEvent(
    value:
      | BehaviorSubject<RefreshEvent>
      | Observable<RefreshEvent>
      | RefreshEvent
  ): GridElement {
    if (isSubject(value)) return this.refreshEventB(value);
    else if (isObservable(value)) return this.refreshEventO(value);
    return this.refreshEventR(value);
  }

  onSelectedChangeContainer = new BehaviorSubject<OnSelectedChange<T>>(
    undefined
  );

  /** iternal function for handling raw OnSelectedChange<T> types*/
  private onSelectedChangeR(value: OnSelectedChange<T>): GridElement {
    this.onSelectedChangeContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<OnSelectedChange<T>> types*/
  private onSelectedChangeO(
    value: Observable<OnSelectedChange<T>>
  ): GridElement {
    value.subscribe({ next: v => this.onSelectedChangeContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * TODO: add docs
   */
  onSelectedChange(
    value: Observable<OnSelectedChange<T>> | OnSelectedChange<T>
  ): GridElement {
    if (TypeGuards.isOnSelectedChange(value))
      return this.onSelectedChangeR(value);
    else if (isObservable(value)) return this.onSelectedChangeO(value);
    throw new Error(`invalid type ${typeof value} for OnSelectedChange<T>`);
  }

  onRowClickContainer = new BehaviorSubject<OnRowClick<T>>(undefined);

  /** iternal function for handling raw OnRowClick<T> types*/
  private onRowClickR(value: OnRowClick<T>): GridElement {
    this.onRowClickContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<OnRowClick<T>> types*/
  private onRowClickO(value: Observable<OnRowClick<T>>): GridElement {
    value.subscribe({ next: v => this.onRowClickContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * TODO: add docs
   */
  onRowClick(value: Observable<OnRowClick<T>> | OnRowClick<T>): GridElement {
    if (TypeGuards.isOnRowClick(value)) return this.onRowClickR(value);
    else if (isObservable(value)) return this.onRowClickO(value);
    throw new Error(`invalid type ${typeof value} for OnRowClick<T>`);
  }
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  tableRef?: any;
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
  return new GridElement();
};

export default Grid;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
