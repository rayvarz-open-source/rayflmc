import * as React from 'react';
import IElement from 'flmc-data-layer/src/FormController/IElement';
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

        </div>
    )

}
