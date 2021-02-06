import {CloseCircleTwoTone, DropboxOutlined} from '@ant-design/icons';
import {Table} from 'antd';
import React from 'react';
import {TableSelect} from '../p3-stepThree/select';
import {useSelector} from 'react-redux';
import {getPackagingCargo} from './pageTwo-selector';


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
    const packagingCargo = useSelector(getPackagingCargo);


    const columns = [
        {
            title: <DropboxOutlined style={{fontSize: '35px', color: '#CD853F'}}/>,
            dataIndex: '',
            key: 'x',
            render: () => <CloseCircleTwoTone twoToneColor="red" style={{fontSize: '35px'}}
                                              onClick={() => alert('delete')}/>

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

        },
        {
            title: 'Цвет',
            dataIndex: 'color',
            key: 'color',
            render: () => <TableSelect/>,
        }
    ];

    return (<>
            <Table columns={columns} dataSource={packagingCargo} pagination={false}/>
        </>

    );
};
