import {Button, Col, Row, Upload} from 'antd';
import React from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getLoadPlace} from './pageOne-selector';
import {setLoadPlace} from './pageOne-reducer';

export type placeToLoadType = 'Грузовик' | 'Контейнер'

export const PageOne: React.FC = () => {
    const TRUCK = 'Грузовик';
    const CONTAINER = 'Контейнер';


    const dispatch = useDispatch();
    const loadPlace = useSelector(getLoadPlace);
//Выбор загружаемого пространства

    
    const onClickTruckHandler = () => {
        dispatch(setLoadPlace({loadPlace: TRUCK}));
    };
    const onClickContainerkHandler = () => {
        dispatch(setLoadPlace({loadPlace: CONTAINER}));
    };

    return (
        <div className={st.pageOneMain}>

            <p>Выбор загружаемого пространства</p>


            <Row justify="center">
                <Col className={st.pageOneMain_Block}>
                    <img src={truck} alt=""/>
                    <div>
                        <Button value="a" onClick={onClickTruckHandler}
                                type={loadPlace === TRUCK ? 'primary' : 'default'}
                        >Грузовик</Button>
                    </div>
                    <div>
                        <Upload>
                            <Button block icon={<UploadOutlined/>}>Загрузка Документа</Button>
                        </Upload>
                    </div>
                </Col>
                <Col className={st.pageOneMain_Block}>
                    <img src={container} alt=""/>
                    <div>
                        <Button value="a" onClick={onClickContainerkHandler}
                                type={loadPlace === CONTAINER ? 'primary' : 'default'}
                        >Контейнер</Button>
                    </div>
                    <div>
                        <div>
                            <Button type="default" block>Далее</Button>
                        </div>
                    </div>

                </Col>

            </Row>


        </div>


    );
};





