import {InputNumber} from 'antd';
import React from 'react';
import {PackagingItemType} from './pageTwo-reducer';

type PropsType = {
    onChangeHandler: (id: number, param: string, paramQuantity: number) => void
    item: PackagingItemType
}
export const PageTwoInputsComponent: React.FC<PropsType> = ({
                                                                item,
                                                                onChangeHandler
                                                            }) => {
    const onChange = (id: number, param: string, paramQuantity: number) => {
        onChangeHandler(id, param, paramQuantity)
    }

    return (
        <div>
            <div>
                {item.length && <InputNumber type="number" min={1} onChange={(e) => {
                    onChange(item.id, 'length', e as number)
                }}/>}
            </div>
            <div>
                {item.width && <InputNumber min={1} type="number" value={item.width} onChange={(e) => {
                    onChangeHandler(item.id, 'length', e as number)
                }}/>}
            </div>
            <div>
                {item.height && <InputNumber min={1} type="number" value={item.height} onChange={(e) => {
                    onChangeHandler(item.id, 'length', e as number)
                }}/>}
            </div>


            <div>
                {item.diameter &&
                <InputNumber min={1} type="number" value={item.diameter} onChange={(e) => {
                    onChangeHandler(item.id, 'length', e as number)
                }}/>}
            </div>

            <div>
                {item.volume &&
                <InputNumber min={1} type="number" value={item.volume} onChange={(e) => {
                    onChangeHandler(item.id, 'length', e as number)
                }}/>}
            </div>
            <div>
                {item.weight &&
                <InputNumber min={1} type="number" value={item.weight} onChange={(e) => {
                    onChangeHandler(item.id, 'length', e as number)
                }}/>}
            </div>


        </div>
    )
}
