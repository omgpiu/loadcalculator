import React from 'react';
import {PAGE_FIVE, PAGE_TWO} from '../../routes/routes';
import withOutPallets from '../../../assets/images/pagethree/car_packing_meshok.jpg';
import withPallets from '../../../assets/images/pagethree/car_pallet_packing_meshok.jpg';
import {Button, Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {withPallet} from './pageThree-selector';
import {NO_PALLETS, PALLETS, setPayloadType} from './pageThree-reducer';
import st from './pageThree.module.css';
import {ButtonBlock} from '../../t5-common/buttonBlock/buttonBlock';


export const PageThree: React.FC = () => {
    const dispatch = useDispatch();
    const isWithPallet = useSelector(withPallet);
    const onClickPayloadPalletsHandler = () => {
        dispatch(setPayloadType({payloadTypeLoad: PALLETS}));
    };
    const onClickPayloadNoPalletsHandler = () => {
        dispatch(setPayloadType({payloadTypeLoad: NO_PALLETS}));
    };

    return (
        <div className={st.wrapper}>
            <Col>
                <img src={withOutPallets} alt="" onClick={onClickPayloadPalletsHandler}/>
                <p>Загрузка груза непосредственно в транспортное средство
                </p>
                <div>
                    <Button onClick={onClickPayloadPalletsHandler}
                            type={isWithPallet === PALLETS ? 'primary' : 'default'}
                    >Без паллет</Button>
                </div>

            </Col>
            <Col>
                <img src={withPallets} alt="" onClick={onClickPayloadNoPalletsHandler}/>
                <p> Предварительное размещение груза на паллетах.

                </p>
                <div>
                    <Button onClick={onClickPayloadNoPalletsHandler}
                            type={isWithPallet === NO_PALLETS ? 'primary' : 'default'}
                    >С паллетами</Button>
                </div>
            </Col>

            <ButtonBlock prevPageLink={PAGE_TWO} nextPageLink={PAGE_FIVE}/>

        </div>


    );
};





