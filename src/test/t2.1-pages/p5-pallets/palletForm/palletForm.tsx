import React from 'react';
import {PalletType, setPalletParameters} from '../p5-reducer';
import './palletForm.css';
import {Form, InputNumber} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import {PAGE_SIX, PAGE_THREE} from '../../../routes/routes';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../main/m2-bll/store';
import {ReusableNavButton} from '../../../ReusebleNavigationButtons/BtnReus';

export const PalletForm: React.FC<{ pallet: PalletType }> = React.memo(({pallet}) => {
    const palletParam = useSelector<AppRootStateType, PalletType | null>(state => state.pageFive.palletParam);
    const history = useHistory();
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
        dispatch(setPalletParameters(values));
        //Сделать проверку: если запрос успешно отработал, пришел ответ( в данном случае объект palletParam)
        // и засетался в стейт, переход на p6
        history.push(PAGE_SIX);
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
                <div className='palletForm_btn'>
                    <Link to={PAGE_THREE}>
                        <ReusableNavButton step={'backward'}/>
                    </Link>
                    <ReusableNavButton step='forward' htmlType="submit"/>
                    {/*<Button type="default" htmlType="submit">Продолжить</Button>*/}
                </div>
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
