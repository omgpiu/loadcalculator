import React from 'react';
import {Button, Form, Input, InputNumber} from 'antd';

export const PackagingForm: React.FC<PackagingPropsType> = React.memo((props) => {
    const {onClickHandlerForm, localBagType} = props
    let noStand_BagType = (localBagType === 'БОЧКИ' || (localBagType === 'ШИНЫ') || localBagType === 'ТРУБЫ')

    //модель для отрисовки формы
    const packagingModel = [
        {id: 2, name: 'width', label: 'Ширина (мм):', value: noStand_BagType ? '0' : 0},
        {id: 3, name: 'height', label: 'Высота (мм):', value: 0},
        {id: 4, name: 'length', label: 'Длина (мм):', value: noStand_BagType ? '0' : 0},
        {id: 5, name: 'diameter', label: 'Диаметр (мм):', value: noStand_BagType ? 0 : '0'},
        {id: 6, name: 'weight', label: 'Вес (кг):', value: 0},
        {id: 7, name: 'amount', label: 'Количество (шт):', value: 0},
    ] as FormModelType[];

    const validateMessages = {
        required: 'Required',
        types: {number: 'Is not a number!'},
        number: {range: '${min} - ${max}'}
    };
    const onFinish = (value: FormValueType) => {
        onClickHandlerForm(value)
    };

    return (
        <div className='packagingForm'>
            <Form name="packagingForm" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name='cargoTitle' label='Название груза:' rules={[{required: true}]}>
                    <Input style={{width:'90px'}}/>
                </Form.Item>
                {packagingModel.map((el) => {
                    return <div key={el.id}>
                        <Form.Item name={el.name} label={el.label}
                                   rules={[{type: 'number' || 'string', min: 0, max: 3000}, {required: true}]}
                        initialValue={el.value && +el.value}>
                            <InputNumber disabled={!!el.value}/>
                        </Form.Item>
                    </div>
                })}
                <Form.Item><Button type={'default'} htmlType="submit">Добавить</Button></Form.Item>
            </Form>
        </div>
    )
})
type PackagingPropsType = {
    onClickHandlerForm: (value: any) => void
    localBagType: string
}
type FormModelType = {
    id: number
    label: string
    name: string
    value: null | string | number
}
export type FormValueType = {
    amount: number
    cargoTitle: string
    diameter: number
    height: number
    length: number
    weight: number
    width: number
}