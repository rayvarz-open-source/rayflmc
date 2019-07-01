import * as React from 'react';
import { GridElement } from './GridElement';
import MaterialTable, { } from 'material-table';

type Props = {
    element: GridElement
};

export default function GridView({ element }: Props) {

    const [title, setTitle] = React.useState();
    const [columnDefinitions, setColumnDefinitions] = React.useState();
    const [actionDefinitions, setActionDefinitions] = React.useState();
    const [componentsOverride, setComponentsOverride] = React.useState();
    const [datasource, setDatasource] = React.useState();
    const [rowActionDefinitions, setRowActionDefinitions] = React.useState();
    const [gridOptions, setGridOptions] = React.useState();

    React.useEffect(() => {

        let titleSub = element.titleContainer.subscribe({
            next: v => setTitle(v)
        });
        let columnDefinitionsSub = element.columnDefinitionsContainer.subscribe({
            next: v => setColumnDefinitions(v)
        });
        
        let actionDefinitionsSub = element.actionDefinitionsContainer.subscribe({
            next: v => setActionDefinitions(v)
        });

        let componentsOverrideSub = element.componentsOverrideContainer.subscribe({
            next: v => setComponentsOverride(v)
        });

        let datasourceSub = element.datasourceContainer.subscribe({
            next: v => setDatasource(v)
        });

        let rowActionDefinitionsSub = element.rowActionDefinitionsContainer.subscribe({
            next: v => setRowActionDefinitions(v)
        });

        let gridOptionsSub = element.gridOptionsContainer.subscribe({
            next: v => setGridOptions(v)
        });

        return () => {
            titleSub.unsubscribe();
            columnDefinitionsSub.unsubscribe();
            actionDefinitionsSub.unsubscribe();
            componentsOverrideSub.unsubscribe();
            datasourceSub.unsubscribe();
            rowActionDefinitionsSub.unsubscribe();
            gridOptionsSub.unsubscribe();
        }
    })

    return (
        <div style={{ width: '100%' }} >
            <MaterialTable
                title={title}
                columns={columnDefinitions}
                data={datasource}
                actions={actionDefinitions}
                components={componentsOverride}
                editable={rowActionDefinitions}
                options={gridOptions}
            />
        </div>
    )

}
