import {CloseCircleTwoTone, DropboxOutlined} from '@ant-design/icons';
import {Table} from 'antd';
import React from 'react';
import {TableSelect} from '../p3-stepThree/select';
import {useDispatch, useSelector} from 'react-redux';
import {getPackagingCargo} from './pageTwo-selector';
import {deletePackagingCargo, PackagingItemType} from './pageTwo-reducer';
import {ColumnsType} from 'antd/es/table';


interface Column {
    id: string
    img: string
    title: string
    width: number | null
    height: number | null
    length: number | null
    diameter: number | null
    volume: number | null
    weight: number
    amount: number
}


export const CargoTable: React.FC = () => {
    const dispatch = useDispatch();
    const packagingCargo = useSelector(getPackagingCargo);
    const onClickDeleteHandler = (id: string) => {
        dispatch(deletePackagingCargo({id}));

    };
    const columns: ColumnsType<Column> = [
        {
            title: <DropboxOutlined style={{fontSize: '35px', color: '#CD853F'}}/>,
            dataIndex: '',
            key: 'x',
            render: (cargo: PackagingItemType) => <CloseCircleTwoTone twoToneColor="pink" style={{fontSize: '35px'}}
                                                                      onClick={() => onClickDeleteHandler(cargo.id)}/>

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
            dataIndex: 'width',
            title: 'Ширина (мм)',
            key: 'width'

        },
        {
            dataIndex: 'diameter',
            title: 'Диаметр (мм)',
            key: 'diameter'

        },

        {
            dataIndex: 'weight',
            title: 'Масса (кг)',
            key: 'weight'

        },
        {
            dataIndex: 'color',
            title: 'Цвет',
            key: 'color',
            render: () => <TableSelect/>,
        }
    ];

    return (<>
            <Table columns={columns} dataSource={packagingCargo} pagination={false}
                   rowKey="id"

            />
        </>

    );
};
