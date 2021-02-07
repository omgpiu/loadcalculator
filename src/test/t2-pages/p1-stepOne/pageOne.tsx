import {Button, Col, Row, Upload} from 'antd';
import React, {useCallback} from 'react';
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

type PropsType = {
    nextPage: () => void
}

export const PageOne: React.FC<PropsType> = React.memo(({nextPage}) => {
    const TRUCK = 'Грузовик';
    const CONTAINER = 'Контейнер';
    const dispatch = useDispatch();


    const load = useSelector(getLoadPlace);
//Выбор загружаемого пространства

    const nextPageHandler = useCallback(() => {
        nextPage();
    }, [nextPage]);

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
                                type={load === CONTAINER ? 'primary' : 'default'}
                        >Контейнер</Button>
                    </div>
                    <div>
                        <div>
                            <Link to={PAGE_TWO} onClick={nextPageHandler}>
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
});
// export default WithCurrentPage(PageOne);




