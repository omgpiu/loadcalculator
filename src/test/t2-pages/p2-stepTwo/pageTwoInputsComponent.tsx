import {InputNumber} from 'antd';
import React from 'react';
import {PackagingItemType, ParamType} from './pageTwo-reducer';

type PropsType = {
    onChangeHandler: (id: number, param: ParamType, paramQuantity: number) => void
    item: PackagingItemType
}
export const PageTwoInputsComponent: React.FC<PropsType> = ({
                                                                item,
                                                                onChangeHandler
                                                            }) => {
    const onChange = (id: number, param: ParamType, paramQuantity: number) => {
        onChangeHandler(id, param, paramQuantity);
    };

    return (
        <div>
            <div>
                {item.length && <InputNumber type="number" min={1} value={item.length} onChange={(e) => {
                    onChange(item.id, 'length', e as number);
                }}/>}
            </div>
            <div>
                {item.width && <InputNumber min={1} type="number" value={item.width} onChange={(e) => {
                    onChangeHandler(item.id, 'width', e as number);
                }}/>}
            </div>
            <div>
                {item.height && <InputNumber min={1} type="number" value={item.height} onChange={(e) => {
                    onChangeHandler(item.id, 'height', e as number);
                }}/>}
            </div>


            <div>
                {item.diameter &&
                <InputNumber min={1} type="number" value={item.diameter} onChange={(e) => {
                    onChangeHandler(item.id, 'diameter', e as number);
                }}/>}
            </div>

            <div>
                {item.volume &&
                <InputNumber min={1} type="number" value={item.volume} onChange={(e) => {
                    onChangeHandler(item.id, 'volume', e as number);
                }}/>}
            </div>
            <div>
                {item.weight &&
                <InputNumber min={1} type="number" value={item.weight} onChange={(e) => {
                    onChangeHandler(item.id, 'weight', e as number);
                }}/>}
            </div>


        </div>
    );
};
