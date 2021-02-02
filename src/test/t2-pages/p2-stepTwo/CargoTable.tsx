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
    const columns: ColumnsType[] = [{
        dataIndex: 'amount',
        title: 'Amount',
        key: 'amount'

    },
        {
            dataIndex: 'color',
            title: 'Color',
            key: 'color'

        }, {
            dataIndex: 'height',
            title: 'Height',
            key: 'height'

        }, {
            dataIndex: 'length',
            title: 'Length',
            key: 'length'

        }, {
            dataIndex: 'weight',
            title: 'Weight',
            key: 'weight'

        }, {
            dataIndex: 'width',
            title: 'width',
            key: 'width'

        },];
    const data: DataType[] =
        [{
            amount: 10,
            color: 'blue',
            height: 12,
            key: '1',
            length: 13,
            title: 'Pallet',
            weight: 14,
            width: 15
        },]


    ;
    return (<>
            <Table columns={columns} dataSource={data}/>
        </>

    );
};
