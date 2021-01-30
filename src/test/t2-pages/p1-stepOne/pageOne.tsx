import {Button, Col, Row, Upload} from 'antd';
import React from 'react';
import st from './pageOne.module.css';
import {CaretRightOutlined, UploadOutlined} from '@ant-design/icons';
import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getLoadPlace} from './pageOne-selector';
import {setLoadPlace} from './pageOne-reducer';
import {Link} from 'react-router-dom';
import {PAGE_TWO} from '../../routes/routes';

export type placeToLoadType = 'Грузовик' | 'Контейнер' | ''

export const PageOne: React.FC = () => {
    const TRUCK = 'Грузовик';
    const CONTAINER = 'Контейнер';


    const dispatch = useDispatch();
    const loadPlacem = useSelector(getLoadPlace);
//Выбор загружаемого пространства

    console.log(loadPlacem);
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
                                type={loadPlacem === TRUCK ? 'primary' : 'default'}
                        >Грузовик</Button>
                    </div>
                    <div>
                        <Upload>
                            <Button block icon={<UploadOutlined/>}>Загрузка Документа</Button>
                        </Upload>
                    </div>
                </Col>
                <Col className={st.pageOneMain_Block}>
                    <img src={container} alt="" onClick={onClickContainerHandler}/>
                    <div>
                        <Button onClick={onClickContainerHandler}
                                type={loadPlacem === CONTAINER ? 'primary' : 'default'}
                        >Контейнер</Button>
                    </div>
                    <div>
                        <div>
                            <Link to={PAGE_TWO}>
                                <Button type="default" block
                                        icon={<CaretRightOutlined/>}


                                >
                                    Далее</Button></Link>
                        </div>
                    </div>

                </Col>

            </Row>


        </div>


    );
};





