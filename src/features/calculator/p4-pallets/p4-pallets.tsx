import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../root/r2-bll/store';
import st from './p4.module.scss';
import {PalletForm} from './palletForm/palletForm';
import {PalletSelected} from './palletSelected/p4-selected';
import {palletsData} from '../../../common/staticData';
import WithAuthRedirect from '../../../common/helpers/hook_HOC/withAuthRedirect';


const Page4Pallets = React.memo(() => {

    const reduxTypePallet = useSelector<AppRootStateType, string>(s => s.payments.palletParam.typePallet)
    const palletsModel = palletsData

    const [localPalletType, setLocalPalletType] = useState(reduxTypePallet || 'FIN')
    const choicePalletType = useCallback((value: string) => {
        setLocalPalletType(value)
    }, [setLocalPalletType])
    // находим паллет по типу выбранному через селект => в массиве 1 нужный объект
    const selectedPallet = palletsModel.filter(el => el.typePallet === localPalletType)
    return (
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
    )
});

export default WithAuthRedirect(Page4Pallets)


