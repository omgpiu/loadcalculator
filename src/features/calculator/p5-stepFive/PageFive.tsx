import React from 'react';
import st from './PageFive.module.css';
import CargoPage from './CargoPage';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FOUR, PAGE_SIX, PAGE_THREE} from '../../../root/routes/routesCalc';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../root/r2-bll/store';
import {PayloadTypeForLoading} from '../../../common/types';
import WithAuthRedirect from '../../../common/helpers/hook_HOC/withAuthRedirect';
import {setPackagingCargoTC} from '../p10-calc-bll/payment-thunk';


const PageFive: React.FC = () => {

    const withPallet = useSelector<AppRootStateType, PayloadTypeForLoading>(s => s.payments.withPallet)
    const dispatch = useDispatch()
    const setRootClick = () => {
        return dispatch(setPackagingCargoTC())
    }


    return <div className={st.pageFiveMain}>

        <div className={st.notice}>
            <h1 className={st.noticeTitle}>Настройки размещения груза в контейнере</h1>

            <div className={st.noticeDesc}>
                <p>Выберите расположение груза, приемлемое для перевозки данного типа груза.</p> <br/>
                <p>Ограничение положения груза может отрицательно сказаться на эффективном
                    заполнении.</p>
            </div>
        </div>

        <CargoPage/>

        <ButtonBlock type={'default'} prevPageLink={withPallet === 'pallets' ? PAGE_FOUR : PAGE_THREE}
                     nextPageLink={PAGE_SIX} parentClickHandler={setRootClick}/>

    </div>;
};

export default WithAuthRedirect(PageFive)
