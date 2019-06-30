import * as React from 'react';
import IElement from 'flmc-data-layer/src/FormController/IElement';
import { GridElement, ColumnDefinitions } from './GridElement';
import MaterialTable, { Column } from 'material-table';
import { resolve } from 'styled-jsx/css';
import { Button, IconButton } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Barcode from './BarcodeView';

function createFakeData(): any[] {
    let result: any[] = [];
    for (let i = 0; i < 100; i++)
        result.push({
            id: i,
            title: `Title For Item #${i}`,
            subtitle: `Subtitle For Item #${i}`,
            barcode: 2111341414532,
            price: 13000,
            type: 'test',
            category: 'test',
            image: 'https://via.placeholder.com/150'
        });
    return result;
}

type Props = {
    element: GridElement
};

type StateRaw = {
    columns: Column[],
    data: any[],
}

class Editable extends React.Component<any, StateRaw> {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Id',
                    field: 'id',
                    removable: true,
                    editable: "never",
                },
                {
                    title: 'Image', field: 'image',
                    render: rowData => <img src={rowData.image} style={{ width: 40, borderRadius: '50%' }} />,
                    sorting: false,
                    // editable: "never",
                    editComponent: (props) => (
                        <div style={{ display: 'inline-block', alignContent: 'center' }}>
                            <IconButton color="primary" aria-label="Upload new image">
                                <CloudUploadIcon />
                            </IconButton>
                            {props.rowData.image && <img src={props.rowData.image} style={{ width: 40, height: 40, borderRadius: '50%', position: 'absolute' }} />}
                        </div>
                    )
                },
                { title: 'Title', field: 'title' },
                {
                    title: 'Subtitle', field: 'subtitle',

                },
                {
                    title: 'Barcode', field: 'barcode',
                    render: (rowData) => (<Barcode value={rowData.barcode} />)
                },
                { title: 'Price', field: 'price' },
                { title: 'Type', field: 'type' },
                { title: 'Category', field: 'category' },
                { title: 'Score', field: 'score' },
            ],
            data: createFakeData()
        }
    }

    render() {
        return (
            <MaterialTable
                title="Item List"
                columns={this.state.columns}
                data={this.state.data}
                options={{
                    actionsColumnIndex: -1
                }}
                editable={{
                    isDeletable: (rowData) => false,
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.data;
                                    data.push(newData);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                    onRowUpdate: (oldData, newData) => new Promise((resolve, reject) => resolve()),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    let data = this.state.data;
                                    const index = data.indexOf(oldData);
                                    data.splice(index, 1);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                }}
            />
        )
    }
}

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

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '600px',
                width: '100%'
            }}
        >
            <Editable />
        </div>
    )

}
