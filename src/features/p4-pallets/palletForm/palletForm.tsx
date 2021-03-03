import React from 'react';
import './palletForm.css';
import {Form, InputNumber} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../root/r2-bll/store';
import {PalletType, setPalletParameters} from '../p4-reducer';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_THREE} from '../../../root/routes/routes';


export const PalletForm: React.FC<{ pallet: PalletType }> = React.memo(({pallet}) => {
    const palletParam = useSelector<AppRootStateType, PalletType | null>(state => state.pageFour.palletParam);
    const dispatch = useDispatch();
    //модель для отрисовки формы, value либо стандарт,
    // либо если уже был ранее выбран паллет возвращаются значения из стейта "palletParam"
    const palletModel = [
        {id: 1, name: 'length', label: 'Длина (мм):', value: pallet.length, disabled: true},
        {id: 2, name: 'width', label: 'Ширина (мм):', value: pallet.width, disabled: true},
        {id: 3, name: 'height', label: 'Высота (мм):', value: pallet.height, disabled: true},
        {
            id: 4,
            name: 'carryingCapacity',
            label: 'Грузоподъемность (кг):',
            value: palletParam ? palletParam.carryingCapacity : pallet.carryingCapacity,
        },
        {
            id: 5,
            name: 'maxLoadingHeight',
            label: 'Максимальная высота загрузки (мм):',
            value: palletParam ? palletParam.maxLoadingHeight : pallet.maxLoadingHeight
        },
        {
            id: 6,
            name: 'separatorSheetHeight',
            label: 'Высота разделительного листа (мм):',
            value: palletParam ? palletParam.separatorSheetHeight : pallet.separatorSheetHeight
        }
    ] as FormModelType[];

    const validateMessages = {
        required: 'Required',
        types: {number: 'Is not a number!'},
        number: {range: '${min} - ${max}'}
    };
    const onFinish = (values: PalletParamFormType) => {
        console.log('finish form')
        dispatch(setPalletParameters(values));
        //Сделать проверку: если запрос успешно отработал, пришел ответ( в данном случае объект palletParam)
        // и засетался в стейт, переход на p6
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
export type PalletParamFormType = {
    carryingCapacity: number
    height: number
    length: number
    maxLoadingHeight: number
    width: number
    separatorSheetHeight: number
}
