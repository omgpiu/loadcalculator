import {Button, Col, Row, Upload} from 'antd';
import React, {useState} from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';


export const PageOne: React.FC = () => {
    const TRUCK = 'Грузовик';
    const CONTAINER = 'Контейнер';
    const [check, setCheck] = useState(TRUCK);


    return (
        <div className={st.pageOneMain}>
            
            <p>Выбор загружаемого пространства</p>


            <Row justify="center">
                <Col className={st.pageOneMain_Block}>
                    <img src={truck} alt=""/>
                    <div>
                        <Button value="a" onClick={() => {
                            setCheck(TRUCK);
                        }} type={check === TRUCK ? 'primary' : 'default'}
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
                        <Button value="a" onClick={() => {
                            setCheck(CONTAINER);
                        }} type={check === CONTAINER ? 'primary' : 'default'}
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





