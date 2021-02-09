import {Button, Col, Row, Upload} from 'antd';
import React from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getLoadPlace} from './pageOne-selector';
import {setLoadPlace} from './pageOne-reducer';
import {Link} from 'react-router-dom';
import {PAGE_ONE, PAGE_TWO} from '../../routes/routes';
import {ReusableNavButton} from '../../ReusebleNavigationButtons/BtnReus';
import {ButtonBlock} from '../../t5-common/buttonBlock/buttonBlock';

export type placeToLoadType = 'Грузовик' | 'Контейнер' | ''

type PropsType = {
    nextPage: () => void
}

export const PageOne: React.FC = () => {
    const TRUCK = 'Грузовик';
    const CONTAINER = 'Контейнер';
    const dispatch = useDispatch();
    const load = useSelector(getLoadPlace);
//Выбор загружаемого пространства


    const onClickTruckHandler = () => {
        dispatch(setLoadPlace({loadPlace: TRUCK}));
    };
    const onClickContainerHandler = () => {
        dispatch(setLoadPlace({loadPlace: CONTAINER}));
    };


    return (
        <div className={st.pageOneMain}>

            <p>Выбор загружаемого пространства</p>


            <Row justify="center">
                <Col className={st.pageOneMain_Block}>
                    <img src={truck} alt="" onClick={onClickTruckHandler}/>
                    <div>
                        <Button onClick={onClickTruckHandler}
                                type={load === TRUCK ? 'primary' : 'default'}
                        >Грузовик</Button>
                    </div>
                    <div style={{marginTop: '9px'}}>
                        <Upload>
                            <Button block icon={<UploadOutlined/>}>Загрузка Документа</Button>
                        </Upload>
                    </div>
                </Col>
                <Col className={st.pageOneMain_Block}>
                    <img src={container} alt="" onClick={onClickContainerHandler}/>
                    <div>
                        <Button onClick={onClickContainerHandler}
                                type={load === CONTAINER ? 'primary' : 'default'}
                        >Контейнер</Button>
                    </div>
                        <ButtonBlock nextPageLink={PAGE_TWO}/>
                </Col>

            </Row>


        </div>


    );
};




