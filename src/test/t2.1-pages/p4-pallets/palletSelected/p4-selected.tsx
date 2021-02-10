import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import st from '../p4.module.scss';
import {AppRootStateType} from '../../../../main/m2-bll/store';
import {palletActions, palletVariantType} from '../p4-reducer';

export const PalletSelected: React.FC<{ palletImg: string | undefined }> = React.memo(({palletImg}) => {
    const dispatch = useDispatch();
    const palletType = useSelector<AppRootStateType, palletVariantType>(state => state.pageFour.palletType);
    const {Option} = Select;

    function handleChange(value: palletVariantType) {
        dispatch(palletActions.filterPalletVariantAC({palletType: value}));
    }

    return (
        <div style={{paddingTop: '25px'}}>
            <img src={palletImg} alt='palletImg' className={st.pallets_img}></img>
            <Select defaultValue={palletType} style={{width: 190}} onChange={handleChange}>
                <Option value='FIN'>FIN</Option>
                <Option value='EUR'>EUR</Option>
                <Option value='E-BOX'>E-BOX</Option>
                <Option value='CARGO_SMALL'>CARGO_SMALL</Option>
                <Option value='CARGO_BASE'>CARGO_BASE</Option>
            </Select>
        </div>
    );
});
