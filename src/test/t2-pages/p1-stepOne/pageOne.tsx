import {Button, Col, Radio, Row, Upload} from 'antd';
import React, {useState} from 'react';
import st from './pageOne.module.css';

import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';


export const PageOne: React.FC = () => {
    const [check, setCheck] = useState('')

    function onChange(e: any) {
        console.log(`radio checked:${e.target.value}`);
        setCheck(e)

    }

    return (


        <div className={st.pageOneMain}>

            <Row justify="center">
                <Col className={st.pageOneMain_Block}>
                    <img src={truck} alt=""/>
                    <div>
                        <Radio.Button value="a" checked={check === 'a'} onChange={onChange}
                                      defaultChecked>Грузовик</Radio.Button>
                    </div>
                    <div>
                        <Upload>
                            <Button block>Загрузка Документа</Button>
                        </Upload>
                    </div>
                </Col>


                <Col className={st.pageOneMain_Block}>
                    <img src={container} alt=""/>
                    <div>
                        <Radio.Button value="b" checked={check === 'b'}   onChange={onChange}
                                      defaultChecked>Контейнер</Radio.Button>
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





