import React from 'react';
import {Button, Col, InputNumber, Row} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import st from './pageTwo.module.css';
import {getPackagingCargo, getPackagingItems} from './pageTwo-selector';
import {setPackagingCargo, setPackagingParams} from './pageTwo-reducer';
import {Link} from 'react-router-dom';
import {PAGE_ONE, PAGE_THREE} from '../../routes/routes';


export const PageTwo: React.FC = () => {
    const dispatch = useDispatch()
    const packagingItems = useSelector(getPackagingItems);
    const packagingCargo = useSelector(getPackagingCargo)

    const onClickHandler = (id: number) => {
        dispatch(setPackagingCargo({id}))
    }

    const onChangeHandler = (id: number, param: string, paramQuantity: number) => {
        dispatch(setPackagingParams({id, param, paramQuantity}))
    }

    return <div className={st.pageTwoMain}>
        <p>Укажите тип упаковки груза</p>

        <Row justify='center'>
            {
                packagingItems.map(item => {
                    return <Col className={st.pageTwoMain_col} key={item.id}>
                        <img src={item.img} alt={item.title} width={'100px'} height={'100px'}/>
                        <div>


                            <p>{item.length && <InputNumber type="number" min={1} onChange={(e) => {
                                onChangeHandler(item.id, 'length', e as number)
                            }}/>}
                            </p>
                            <p>{item.width && <InputNumber min={1} type="number" value={item.width} onChange={(e) => {
                                onChangeHandler(item.id, 'length', e as number)
                            }}/>}
                            </p>
                            <p>{item.height && <InputNumber min={1} type="number" value={item.height} onChange={(e) => {
                                onChangeHandler(item.id, 'length', e as number)
                            }}/>}
                            </p>
                            <p>
                                {item.diameter &&
                                <InputNumber min={1} type="number" value={item.diameter} onChange={(e) => {
                                    onChangeHandler(item.id, 'length', e as number)
                                }}/>}
                            </p>
                            <p>
                                {item.volume &&
                                <InputNumber min={1} type="number" value={item.volume} onChange={(e) => {
                                    onChangeHandler(item.id, 'length', e as number)
                                }}/>}
                            </p>
                            <p>
                                {item.weight &&
                                <InputNumber min={1} type="number" value={item.weight} onChange={(e) => {
                                    onChangeHandler(item.id, 'length', e as number)
                                }}/>}
                            </p>
                        </div>
                        <div>
                            <Button onClick={() => {
                                onClickHandler(item.id)
                            }}>{item.title}</Button>
                        </div>
                    </Col>;
                })
            }</Row>

        {packagingCargo[0] &&
        <Row justify='center'>
            {
                packagingCargo.map(item => {
                    return <Col key={item.id}>
                        {item.weight}
                    </Col>
                })
            }
        </Row>}


        <div style={{margin: '10px'}}>
            <Link to={PAGE_ONE}> <Button type={'default'}>Назад</Button></Link>
        </div>
        <div style={{margin: '10px'}}>
            <Link to={PAGE_THREE}> <Button type={'default'}>Далее</Button></Link>
        </div>


    </div>;
};





