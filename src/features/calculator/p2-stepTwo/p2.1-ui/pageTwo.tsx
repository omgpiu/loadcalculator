import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CargoTable} from './CargoTable';
import ButtonBlock from '../../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_ONE, PAGE_THREE} from '../../../../root/routes/routesCalc';
import {PackagingItemType} from '../../../../common/types';
import {v1} from 'uuid';
import {FormValueType, PackagingForm} from './pageTwoForm';
import {PackagingSelect} from './PackagingSelect';
import {Spin} from 'antd';
import {AppRootStateType} from '../../../../root/r2-bll/store';
import {RequestStatusType} from '../../../../root/r2-bll/appReducer';
import {packagingBags} from '../../../../common/staticData';
import {setPackagingCargo} from '../../payment/p2-bll/payment-reducer';
import {setCountedCargoParam} from '../../payment/p2-bll/payment-thunk';
import st from './pageTwo.module.scss';

const PageTwo: React.FC = () => {
    const dispatch = useDispatch()
    //для лоадера
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    // если в стейте есть инфор. берем для рендера данные из стейта( избежать потери при обновлении) иначе дефолт
    const packagingCargo = useSelector<AppRootStateType, PackagingItemType[]>(state => state.payment.packagingCargo)
    const [localBagType, setLocalBagType] = useState<string>(packagingCargo[0] ? packagingCargo[0].bagType : 'КОРОБКИ')
    // актуальный вид упаковки [ {} ]
    const currentBagType = packagingBags.filter(el => el.bagType === localBagType)

    const onHandleChange = useCallback((value: string) => {
        setLocalBagType(value)
    }, [])
    const onClickHandlerForm = useCallback((value: FormValueType) => {
        const packagingItem = {
            ...value,
            id: v1(),
            bagType: localBagType,
            inHeight: false,
            inLength: false,
            inWidth: false,
            isStack: false
        } as PackagingItemType
        dispatch(setPackagingCargo({packagingItem}));
    }, [localBagType, dispatch]);

    const setRootClick = () => {
        dispatch(setCountedCargoParam())
    }


    return <Spin spinning={status === 'loading'} delay={0}>
        <div>
            <div className={st.p2_wrapper}>
                <p>Укажите тип упаковки груза</p>
                {currentBagType.map(el => {
                        return <div key={el.id} className={st.p2_inner}>
                            <PackagingForm onClickHandlerForm={onClickHandlerForm} localBagType={localBagType}/>
                            <PackagingSelect bagType={el.bagType}
                                             img={el.img}
                                             onHandleChange={onHandleChange}/>
                        </div>
                    }
                )}
            </div>

            <CargoTable/>
            <ButtonBlock type={'default'} prevPageLink={PAGE_ONE}
                         nextPageLink={PAGE_THREE}
                         disabled={packagingCargo.length === 0}
                         parentClickHandler={setRootClick}/>
        </div>
    </Spin>
};

export default PageTwo


