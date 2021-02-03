import React, {useEffect} from 'react';
import {Spin} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../main/m2-bll/store';
import {getPalletsTC, P5_State} from './p5-reducer';
import st from './p5.module.scss';
import './p5_antd.css';
import {PalletForm} from './palletForm/palletForm';
import {PalletSelected} from './palletSelected/p5-selected';
import {RequestStatusType} from '../../../main/m2-bll/appReducer';


export const Page5Pallets = React.memo(() => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const {pallets, palletType} = useSelector<AppRootStateType, P5_State>(state => state.pageFive)
    const dispatch = useDispatch();
    useEffect(() => {
        if (pallets.length === 0) {
            dispatch(getPalletsTC())
        }
    }, [dispatch])


    const selectedPallet = pallets.filter(el => el.typePallet === palletType)
    return (
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
                                <PalletSelected palletImg={el.img}/>
                                <PalletForm pallet={el}/>
                            </div>)
                    })
                }
            </div>
        </Spin>
    )
});

