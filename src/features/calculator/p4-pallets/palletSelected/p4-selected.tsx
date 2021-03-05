import React, {useCallback} from 'react';
import {Select} from 'antd';
import st from '../p4.module.scss';
import {PalletType} from '../../../../common/types';

export const PalletSelected: React.FC<PropsType> = React.memo(({pallet, choicePalletType}) => {

    const {Option} = Select;

    const handleChange = useCallback((value: string) =>{
        choicePalletType(value);
    },[choicePalletType])

    return (
        <div style={{paddingTop: '25px'}}>
            <img src={pallet.img} alt='palletImg' className={st.pallets_img}> </img>
            <Select defaultValue={pallet.typePallet} style={{width: 190}} onChange={handleChange}>
                <Option value='FIN'>FIN</Option>
                <Option value='EUR'>EUR</Option>
                <Option value='E-BOX'>E-BOX</Option>
                <Option value='CARGO_SMALL'>CARGO_SMALL</Option>
                <Option value='CARGO_BASE'>CARGO_BASE</Option>
            </Select>
        </div>
    );
});

type PropsType = {
    choicePalletType: (value: string) => void
    pallet: PalletType
}