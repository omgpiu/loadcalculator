import {Button, Col, Input, Row} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';
import st from './pageTwo.module.css';
import {getPackagingItems} from './pageTwo-selector';
import {PAGE_ONE, PAGE_THREE} from '../../routes/routes';
import {Link} from 'react-router-dom';

export const PageTwo: React.FC = () => {
    const packingItems = useSelector(getPackagingItems);


    return (
        <div className={st.pageTwoMain}>
            <p>Укажите тип упаковки груза</p>

            <Row justify='center'>
                {
                    packingItems.map(item => {
                        return <Col  key={item.id}>
                            <img src={item.img} alt={item.title} width={'100px'} height={'100px'}/>
                            <div>
                                <p>{item.length && <Input value={item.length}/>}</p>
                                <p>{item.width && <Input value={item.width}/>}</p>
                                <p>{item.height && <Input value={item.height}/>}</p>
                                <p>{item.diameter && <Input value={item.diameter}/>}</p>
                                <p>{item.volume && <Input value={item.volume}/>}</p>
                                <p>{item.weight && <Input value={item.weight}/>}</p>
                            </div>
                            <div>
                                <Button>{item.title}</Button>
                            </div>
                        </Col>;
                    })
                }</Row>

            <div style={{margin: '10px'}}>
                <Link to={PAGE_ONE}> <Button type={'default'}>Назад</Button></Link>
            </div>
            <div style={{margin: '10px'}}>
                <Link to={PAGE_THREE}> <Button type={'default'}>Далее</Button></Link>
            </div>


        </div>


    );
};





