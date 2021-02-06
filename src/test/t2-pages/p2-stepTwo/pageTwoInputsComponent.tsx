import {InputNumber} from 'antd';
import React from 'react';
import {PackagingItemType, ParamType} from './pageTwo-reducer';

type PropsType = {
    onChangeHandler: (id: string, param: ParamType, paramQuantity: number) => void
    item: PackagingItemType
}
export const PageTwoInputsComponent: React.FC<PropsType> = ({
                                                                item,
                                                                onChangeHandler
                                                            }) => {
    const onChange = (id: string, param: ParamType, paramQuantity: number) => {
        onChangeHandler(id, param, paramQuantity);
    };

    return (
        <div>
            <div>
                {item.length >= 0 ? <InputNumber type="number" min={1} value={item.length} onChange={(e) => {
                    onChange(item.id, 'length', e as number);
                }}/> : null}
            </div>
            <div>
                {item.width >= 0 ? <InputNumber min={1} type="number" value={item.width} onChange={(e) => {
                    onChangeHandler(item.id, 'width', e as number);
                }}/> : null}
            </div>
            <div>
                {item.height >= 0 ? <InputNumber min={1} type="number" value={item.height} onChange={(e) => {
                    onChangeHandler(item.id, 'height', e as number);
                }}/> : null}
            </div>


            <div>
                {item.diameter >= 0 ? <InputNumber min={1} type="number" value={item.diameter} onChange={(e) => {
                    onChangeHandler(item.id, 'diameter', e as number);
                }}/> : null}
            </div>

            <div>
                {item.volume >= 0 ?
                    <InputNumber min={1} type="number" value={item.volume} onChange={(e) => {
                        onChangeHandler(item.id, 'volume', e as number);
                    }}/> : null}
            </div>
            <div>
                {item.weight >= 0 ?
                    <InputNumber min={1} type="number" value={item.weight} onChange={(e) => {
                        onChangeHandler(item.id, 'weight', e as number);
                    }}/> : null}
            </div>


        </div>
    );
};