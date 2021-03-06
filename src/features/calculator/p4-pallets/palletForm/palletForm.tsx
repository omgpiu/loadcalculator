import React from 'react';
import './palletForm.css';
import {Form, InputNumber} from 'antd';
import {useDispatch} from 'react-redux';
import ButtonBlock from '../../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_THREE} from '../../../../root/routes/routesCalc';
import {PalletType} from '../../../../common/types';
import {setPalletParametersTC} from '../../payment/p2-bll/payment-thunk';


export const PalletForm: React.FC<{ pallet: PalletType }> = React.memo(({pallet}) => {

    const dispatch = useDispatch();
    //модель для отрисовки формы
    const palletModel = [
        {id: 1, name: 'length', label: 'Длина (мм):', value: pallet.length, disabled: true},
        {id: 2, name: 'width', label: 'Ширина (мм):', value: pallet.width, disabled: true},
        {id: 3, name: 'height', label: 'Высота (мм):', value: pallet.height, disabled: true},
        {
            id: 4,
            name: 'carryingCapacity',
            label: 'Грузоподъемность (кг):',
            value: pallet.carryingCapacity,
            disabled: true
        },
        {
            id: 5,
            name: 'maxLoadingHeight',
            label: 'Максимальная высота загрузки (мм):',
            value: pallet.maxLoadingHeight,
            disabled: true
        },
        {
            id: 6,
            name: 'separatorSheetHeight',
            label: 'Высота разделительного листа (мм):',
            value: pallet.separatorSheetHeight,
            disabled: true
        }
    ] as FormModelType[];

    const validateMessages = {
        required: 'Required',
        types: {number: 'Is not a number!'},
        number: {range: '${min} - ${max}'}
    };
    const onFinish = () => {
        console.log('finish form choice pallet')
        dispatch(setPalletParametersTC(pallet));
    };

    return (
        <div className='palletForm'>
            <Form name="palletsInfo" onFinish={onFinish} validateMessages={validateMessages}>
                {
                    palletModel.map((el) => {
                        return <div key={el.id}>
                            <Form.Item name={el.name} label={el.label}
                                       rules={[{type: 'number', min: 1, max: 3000}, {required: true}]}
                                       initialValue={el.value}>
                                <InputNumber disabled={el.disabled}/>
                            </Form.Item>
                        </div>;
                    })
                }
                <ButtonBlock type={'default'} nextPageLink={PAGE_FIVE}
                             prevPageLink={PAGE_THREE}
                             parentClickHandler={onFinish}/>
            </Form>
        </div>
    );
});
type FormModelType = {
    id: number
    label: string
    name: string
    value: number
    disabled?: boolean
}
