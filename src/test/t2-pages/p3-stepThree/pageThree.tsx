import React from 'react';
import {PAGE_FIVE, PAGE_FOUR, PAGE_TWO} from '../../routes/routes';
import withOutPallets from '../../../assets/images/pagethree/car_packing_meshok.jpg';
import withPallets from '../../../assets/images/pagethree/car_pallet_packing_meshok.jpg';
import {Button, Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {withPallet} from './pageThree-selector';
import {NO_PALLETS, PALLETS, setPayloadType} from './pageThree-reducer';
import st from './pageThree.module.css';
import ButtonBlock from '../../t5-common/buttonBlock/buttonBlock';
import {getPackagingCargo} from '../p2-stepTwo/pageTwo-selector';
import {setCountedCargoParam} from '../p2-stepTwo/pageTwo-reducer';


export const PageThree: React.FC = () => {
    const dispatch = useDispatch();
    const isWithPallet = useSelector(withPallet);
    const cargoToSend = useSelector(getPackagingCargo)
    const onClickPayloadPalletsHandler = () => {
        dispatch(setPayloadType({payloadTypeLoad: PALLETS}));
    };
    const onClickPayloadNoPalletsHandler = () => {
        dispatch(setPayloadType({payloadTypeLoad: NO_PALLETS}));
    };

    const noPalletsSendOnClickHandler = () => {
        dispatch(setCountedCargoParam(cargoToSend))
    }

    return (
        <div className={st.wrapper}>
            <Col>
                <img src={withOutPallets} alt="" onClick={onClickPayloadNoPalletsHandler}/>
                <p>Загрузка груза непосредственно в транспортное средство
                </p>
                <div>
                    <Button type={isWithPallet === NO_PALLETS ? 'primary' : 'default'}
                            onClick={onClickPayloadNoPalletsHandler}
                    >Без паллет</Button>
                </div>

            </Col>
            <Col>
                <img src={withPallets} alt="" onClick={onClickPayloadPalletsHandler}/>
                <p> Предварительное размещение груза на паллетах.

                </p>
                <div>
                    <Button onClick={onClickPayloadPalletsHandler}
                            type={isWithPallet === PALLETS ? 'primary' : 'default'}
                    >С паллетами</Button>
                </div>
            </Col>
            {/* hideP4= становится true  если выюран режим без паллетов*/}
            <ButtonBlock type={'default'} prevPageLink={PAGE_TWO}
                //скип 5 страницы если без паллет
                         nextPageLink={isWithPallet === NO_PALLETS ? PAGE_FIVE : PAGE_FOUR}
                //диспатчим санку сразу если без паллет
                         parentClickHandler={isWithPallet === NO_PALLETS ? noPalletsSendOnClickHandler : undefined}/>
        </div>
    );
};





