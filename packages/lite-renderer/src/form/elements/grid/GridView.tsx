import * as React from 'react';
import IElement from 'flmc-data-layer/src/FormController/IElement';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { GridElement, ColumnDefinitions } from './GridElement';

type Props = {
    element: GridElement
};

export default function GridView({ element }: Props) {

    const [columnDefinition, setColumnDefinition] = React.useState<ColumnDefinitions>([]);

    React.useEffect(() => {

        let colDefSub = element.columnDefinitionContainer.subscribe({
            next: v => {
                console.log(v);
                setColumnDefinition(v);
            }
        });

        return () => {
            colDefSub.unsubscribe();
        }
    })
    console.log(columnDefinition);
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '600px',
                width: '100%'
            }}
        >
            {/*<AgGridReact*/}
            {/*    reactNext={true}*/}
            {/*    columnDefs={[{headerName: "Test"}]}*/}
            {/*    rowData={[]}>*/}
            {/*</AgGridReact>*/}
        </div>
    )

}
