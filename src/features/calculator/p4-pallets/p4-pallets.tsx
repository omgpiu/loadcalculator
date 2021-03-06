import React, {useCallback, useState} from 'react';
import {Spin} from 'antd';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../root/r2-bll/store';
import st from './p4.module.scss';
import './p4_antd.css';
import {PalletForm} from './palletForm/palletForm';
import {RequestStatusType} from '../../../root/r2-bll/appReducer';
import {PalletSelected} from './palletSelected/p4-selected';
import {palletsData} from '../../../common/staticData';


const Page4Pallets = React.memo(() => {

    const reduxTypePallet = useSelector<AppRootStateType,string>(s=> s.payment.palletParam.typePallet)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const palletsModel = palletsData

    const [localPalletType, setLocalPalletType]= useState(reduxTypePallet || 'FIN')
    const choicePalletType = useCallback((value: string)=> {
        setLocalPalletType(value)
    },[setLocalPalletType])
    // находим паллет по типу выбранному через селект => в массиве 1 нужный объект
    const selectedPallet = palletsModel.filter(el => el.typePallet === localPalletType)
    return (
        // лоадер в момент "запроса"
        <Spin spinning={status === 'loading'} delay={0}>
            <div className={st.pallets}>
                <h3 className={st.pallets_head}>Паллеты</h3>
                <p> Параметры паллетов: </p>
                <span className={st.pallets_descr}>
                    Укажите габариты используемых паллетов и ограничения на расположение груза на паллетах.
            </span>
                {
                    selectedPallet.map(el => {
                        return (
                            <div key={el.id} className={st.pallets_inner}>
                                <PalletSelected choicePalletType={choicePalletType} pallet={el}/>
                                <PalletForm pallet={el}/>
                            </div>)
                    })
                }
            </div>
        </Spin>
    )
});

export default Page4Pallets


