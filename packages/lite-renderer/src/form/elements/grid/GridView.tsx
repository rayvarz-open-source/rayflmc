import * as React from 'react';
import { GridElement } from './GridElement';
import MaterialTable, { } from 'material-table';

type Props = {
    element: GridElement
};

export default function GridView({ element }: Props) {

    React.useEffect(() => {

        return () => {

        }
    })

    return (
        <div style={{ width: '100%' }} >
            <MaterialTable
                title="Item List"
                columns={[]}
                data={[]}
            />
        </div>
    )

}
