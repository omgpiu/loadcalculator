import {Button, Col, Row} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';
import {getPackagingImage} from './pageTwo-selector';
import {PAGE_ONE} from '../../routes/routes';
import {Link} from 'react-router-dom';
import st from './pageTwo.module.css';
import {CaretLeftOutlined} from '@ant-design/icons';

export const PageTwo: React.FC = () => {
    const packingImg = useSelector(getPackagingImage);

    return (
        <div className={st.pageTwoMain}>
            <p>Укажите тип упаковки груза</p>

            <Row justify='center'>
                {
                    packingImg.map((img, index) => {
                        return <Col className={st.pageTwoMain_Block}>
                            <img src={img} alt="" key={index} width={'100px'} height={'100px'}/>
                            <div>
                                <Button>Грузовик</Button>
                            </div>

                        </Col>;
                    })
                }</Row>

            <div style={{margin: '10px'}}>
                <Link to={PAGE_ONE}> <Button type={'default'} icon={<CaretLeftOutlined/>}>Назад</Button></Link>
            </div>


        </div>


    );
};





