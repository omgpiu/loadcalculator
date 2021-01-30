import {Button, Col, Radio, Row, Upload} from 'antd';
import React from 'react';
import st from './pageOne.module.css';
import {ButtonPage} from '../../t5-common/c-1-btn/ButtonPage';
import {InputPage} from '../../t5-common/с-2-inp/InputPage';
import container from '../../../assets/images/container.jpg';
import truck from '../../../assets/images/truck.jpg';


export const PageOne: React.FC = () => {
    function onChange(e: any) {
        console.log(`radio checked:${e.target.value}`);
    }

    return (
        <div className={st.pageOneMain}>


            <Row justify="center">
                <Col>
                    <img src={truck} alt=""/>
                    <Col xs={6}>
                        <Radio.Button value="a">Truck</Radio.Button>
                    </Col>
                    <Col xs={6}>
                        <Upload>
                            <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                        </Upload>
                    </Col>
                </Col>

                <Col>
                    <img src={container} alt=""/>
                    <Col span={12}>
                        <Radio.Button value="b">Container</Radio.Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary">Primary Button</Button>
                    </Col>

                </Col>
            </Row>


        </div>


    );
};





