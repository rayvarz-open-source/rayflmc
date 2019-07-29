
import { GridElement } from './GridElement';
import * as React from 'react';
import { ColumnDefinitions, ActionDefinitions, ComponentsOverride, Datasource, RowActionDefinitions, GridOptions, Title, LocalizationDefinition } from './GridElementAttributes';
import { Visibility } from '../base/BaseElement';
import MaterialTable from 'material-table';
import useFunctionAsState from '../../../custom-hooks/function-state';

type Props = {
    element: GridElement,
    weight: number
}

export default function GridView({ element, weight }: Props) {

    //region generated
    /*******************************************/
    /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
    /*******************************************/
    const [columnDefinitions, setColumnDefinitions] = React.useState<ColumnDefinitions>([]);
    const [actionDefinitions, setActionDefinitions] = React.useState<ActionDefinitions>([]);
    const [componentsOverride, setComponentsOverride] = React.useState<ComponentsOverride>({});
    const [datasource, setDatasource] = useFunctionAsState<Datasource>([]);
    const [rowActionDefinitions, setRowActionDefinitions] = React.useState<RowActionDefinitions>({});
    const [gridOptions, setGridOptions] = React.useState<GridOptions>({});
    const [title, setTitle] = React.useState<Title>('');
    const [localizationDefinition, setLocalizationDefinition] = React.useState<LocalizationDefinition>(undefined);
    const [visibility, setVisibility] = React.useState<Visibility>('show');

    React.useEffect(() => {

        let columnDefinitionsSub = element.columnDefinitionsContainer.subscribe({ next: v => setColumnDefinitions(v) });
        let actionDefinitionsSub = element.actionDefinitionsContainer.subscribe({ next: v => setActionDefinitions(v) });
        let componentsOverrideSub = element.componentsOverrideContainer.subscribe({ next: v => setComponentsOverride(v) });
        let datasourceSub = element.datasourceContainer.subscribe({ next: v => setDatasource(v) });
        let rowActionDefinitionsSub = element.rowActionDefinitionsContainer.subscribe({ next: v => setRowActionDefinitions(v) });
        let gridOptionsSub = element.gridOptionsContainer.subscribe({ next: v => setGridOptions(v) });
        let titleSub = element.titleContainer.subscribe({ next: v => setTitle(v) });
        let localizationDefinitionSub = element.localizationDefinitionContainer.subscribe({ next: v => setLocalizationDefinition(v) });
        let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

        return () => {
            columnDefinitionsSub.unsubscribe();
            actionDefinitionsSub.unsubscribe();
            componentsOverrideSub.unsubscribe();
            datasourceSub.unsubscribe();
            rowActionDefinitionsSub.unsubscribe();
            gridOptionsSub.unsubscribe();
            titleSub.unsubscribe();
            localizationDefinitionSub.unsubscribe();
            visibilitySub.unsubscribe();
        };
    }, []);
    /*******************************************/
    /* END OF GENERATED CODE                   */
    /*******************************************/
    //endregion

    return (
        <div style={
            {
                ...element.getVisibilityStyle(visibility),
                ...element.getWeightStyle(weight)
            }
        } >
            <MaterialTable
                title={title}
                columns={columnDefinitions}
                data={datasource}
                actions={actionDefinitions}
                components={componentsOverride}
                editable={rowActionDefinitions}
                options={gridOptions}
                localization={localizationDefinition}
            />
        </div>
    );

}
