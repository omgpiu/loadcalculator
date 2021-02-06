import {Table} from 'antd';
import React from 'react';


type ColumnsType = {
    title: string
    dataIndex: string
    key: string,


}
type DataType = {
    key: string
    title: string
    length: number
    width: number
    height: number
    weight: number
    amount: number
    color: string
}


type PropsType = {
    columns: ColumnsType[]
    data: DataType[]
}


export const CargoTable: React.FC = () => {


    const columns = [
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <button>Delete</button>,
        }, {
            dataIndex: 'title',
            title: 'Название ',
            key: 'title'

        }, {
            dataIndex: 'amount',
            title: 'Кол-во',
            key: 'amount'

        }, {
            dataIndex: 'height',
            title: 'Высота (мм)',
            key: 'height'

        },
        {
            dataIndex: 'color',
            title: 'Цвет',
            key: 'color'

        }, {
            dataIndex: 'length',
            title: 'Длина (мм)',
            key: 'length'

        }, {
            dataIndex: 'weight',
            title: 'Масса (кг)',
            key: 'weight'

        }, {
            dataIndex: 'width',
            title: 'Ширина мм',
            key: 'width'

        }, {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <Button >Delete</Button>,
        },
        {
            title: 'Цвет',
            dataIndex: 'color',
            key: 'color',
            render: () => <TableSelect/>,
        }
    ];
    const data: DataType[] =
        [{
            width: 15,
            amount: 10,
            color: 'blue',
            height: 12,
            key: '1',
            length: 13,
            title: 'Pallet',
            weight: 14,

        },]


    ;
    return (<>
            <Table columns={columns} dataSource={data} pagination={false}/>
        </>

    );
};
