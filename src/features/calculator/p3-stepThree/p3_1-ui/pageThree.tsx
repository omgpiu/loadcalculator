import React, {useState} from 'react';
import withOutPallets from '../../../../assets/images/pagethree/car_packing_meshok.jpg';
import withPallets from '../../../../assets/images/pagethree/car_pallet_packing_meshok.jpg';
import {Button, Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import st from './pageThree.module.css';
import ButtonBlock from '../../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_FOUR, PAGE_TWO} from '../../../../root/routes/routesCalc';
import {withPallet} from '../../p10-calc-bll/payment-selectors';
import {setIsWithPallet} from '../../p10-calc-bll/payment-thunk';
import {setPayloadType} from '../../p10-calc-bll/payment-reducer';
import {PayloadTypeForLoading} from '../../../../common/types';
import WithAuthRedirect from '../../../../common/helpers/hook_HOC/withAuthRedirect';


const PageThree: React.FC = () => {
    const dispatch = useDispatch();
    const isWithPallet = useSelector(withPallet);
    const [disBtn, unDisBtn] = useState<boolean>(true)
//сетаю флаг в сторе
    const onClickHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const value = e.currentTarget.dataset.name as PayloadTypeForLoading
        dispatch(setPayloadType({withPallet: value}));
        unDisBtn(false)
    };
//отправляем санку с паллетами или без  и груз на рассчет
    const palletsSendOnClickHandler = () => {
        // dispatch(setCountedCargoParamTC());
        dispatch(setIsWithPallet());
    };

    return (
        <div className={st.wrapper}>
            <Col>
                <img src={withOutPallets} alt="" onClick={onClickHandler} data-name={'no_pallets'}/>
                <p>Загрузка груза непосредственно в транспортное средство</p>
                <div>
                    <Button type={isWithPallet === 'no_pallets' ? 'primary' : 'default'}
                            onClick={onClickHandler} data-name={'no_pallets'}
                    >Без паллет</Button>
                </div>

            </Col>
            <Col>
                <img src={withPallets} alt="" onClick={onClickHandler} data-name={'pallets'}/>
                <p> Предварительное размещение груза на паллетах.

                </p>
                <div>
                    <Button onClick={onClickHandler} data-name={'pallets'}
                            type={isWithPallet === 'pallets' ? 'primary' : 'default'}
                    >С паллетами</Button>
                </div>
            </Col>
            <ButtonBlock type={'default'} prevPageLink={PAGE_TWO} disabled={disBtn}
                //пропуск 5 страницы если без паллеты+ noPalletsSendOnClickHandler на отправку payload на сервер
                         nextPageLink={isWithPallet === 'no_pallets' ? PAGE_FIVE : PAGE_FOUR}
                //пропуск 5 страницы если без паллеты+ noPalletsSendOnClickHandler на отправку payload на сервер
                         parentClickHandler={palletsSendOnClickHandler}/>
        </div>
    );
};


export default WithAuthRedirect(PageThree)


