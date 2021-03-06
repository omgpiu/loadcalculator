import React, {useCallback} from 'react';
import st from './pageTwo.module.scss'
import {Select} from 'antd';
import {BagType} from '../../../../common/types';


export const PackagingSelect: React.FC<PackagingSelectType> = (props) => {
const {onHandleChange,bagType,img } = props
    const {Option} = Select;
    const handleChange = useCallback((value: string) => {
        onHandleChange(value);
    }, [onHandleChange])

    return (
        <div>
            <img src={img} alt='Img' className={st.p2_img}></img>
            <Select defaultValue={bagType} style={{width: 190}} onChange={handleChange}>
                <Option value='КОРОБКИ'>КОРОБКИ</Option>
                <Option value='БИГ БЭГИ'>БИГ БЭГИ</Option>
                <Option value='ПАЛЛЕТЫ'>ПАЛЛЕТЫ</Option>
                <Option value='ТРУБЫ'>ТРУБЫ</Option>
                <Option value='ШИНЫ'>ШИНЫ</Option>
                <Option value='БОЧКИ'>БОЧКИ</Option>
                <Option value='ЯЩИКИ'>ЯЩИКИ</Option>
            </Select>
        </div>
    )
}

type PackagingSelectType = {
    bagType: BagType
    onHandleChange:(value: string) => void
    img:string
}