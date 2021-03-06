import {CloseOutlined, DropboxOutlined} from '@ant-design/icons';
import {Table} from 'antd';
import React from 'react';
import {TableSelect} from '../../p3-stepThree/p3_1-ui/select';
import {useDispatch, useSelector} from 'react-redux';
import {getPackagingCargo} from '../p2.2-bll/pageTwo-selector';
import {ColumnsType} from 'antd/es/table';
import { deletePackagingCargo } from '../../p10-calc-bll/payment-reducer';
import {BagType, PackagingItemType} from '../../../../common/types';


interface Column {
    id: string
    img: string
    bagType: BagType
    width: number | null
    height: number | null
    length: number | null
    diameter: number | null
    weight: number
    amount: number
    cargoTitle: string | number
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
            render: (cargo: PackagingItemType) => <CloseOutlined style={{fontSize: '20px', color: 'red'}}
                                                                 onClick={() => onClickDeleteHandler(cargo.id)}/>
        }, {
            dataIndex: 'cargoTitle',
            title: 'Название ',
            key: 'cargoTitle'

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
                   scroll={{x: 900}}

            />
        </>
    );
};
