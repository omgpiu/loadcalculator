import {Input, InputNumber} from 'antd';
import React, {ChangeEvent} from 'react';
import {PackagingItemType, ParamType} from './pageTwo-reducer';
import st from './pageTwoInputsComponent.module.css';

type PropsType = {
    onChangeHandler: (id: string, param: ParamType, paramQuantity: number | string) => void
    item: PackagingItemType
}
//компонента для отрисовки импутов товара
export const PageTwoInputsComponent: React.FC<PropsType> = React.memo(({
                                                                item,
                                                                onChangeHandler
                                                            }) => {
    const onChange = (id: string, param: ParamType, paramQuantity: number | string) => {
        onChangeHandler(id, param, paramQuantity);
    };

    return (
        <div className={st.wrapper}>
            <div>

                <Input  value={item.cargoTitle}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           onChange(item.id, 'cargoTitle', e.currentTarget.value);
                       }}/>
            </div>
            <div >
                {!!item.length && 'Длинна'} {item.length && item.length !== 0 ?
                <InputNumber  type="number" min={1} value={item.length} onChange={(e) => {
                    onChange(item.id, 'length', e as number);
                }}/> : null}
            </div>
            <div>
                {!!item.width && 'Ширина'} {item.width && item.width !== 0 ?
                <InputNumber  min={1} type="number" value={item.width} onChange={(e) => {
                    onChangeHandler(item.id, 'width', e as number);
                }}/> : null}
            </div>
            <div>
                {!!item.height && 'Высота'} {item.height && item.height !== 0 ?
                <InputNumber min={1} type="number" value={item.height} onChange={(e) => {
                    onChangeHandler(item.id, 'height', e as number);
                }}/> : null}
            </div>


            <div>
                {!!item.diameter && 'Диаметр'} {item.diameter && item.diameter !== 0 ?
                <InputNumber min={1} type="number" value={item.diameter} onChange={(e) => {
                    onChangeHandler(item.id, 'diameter', e as number);
                }}/> : null}
            </div>
            {/*<div>*/}
            {/*    {item.volume > 0 ?*/}
            {/*        <InputNumber min={1} type="number" value={+item.volume} onChange={(e) => {*/}
            {/*            onChangeHandler(item.id, 'volume', e as number);*/}
            {/*        }}/> : null}*/}
            {/*</div>*/}
            <div>
                Вес {item.weight !== 0 ?
                <InputNumber min={1} type="number" value={item.weight} onChange={(e) => {
                    onChangeHandler(item.id, 'weight', e as number);
                }}/> : null}
            </div>
            <div>
                Количество <InputNumber min={1} type="number" value={item.amount} onChange={(e) => {
                onChangeHandler(item.id, 'amount', e as number);
            }}/>
            </div>


        </div>
    );
});
