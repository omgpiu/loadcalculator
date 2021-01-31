import React, {useEffect} from 'react';
import {Button, Col, Input, Row} from 'antd';
import {PAGE_ONE, PAGE_THREE} from '../../routes/routes';

import {useDispatch, useSelector} from 'react-redux';
import st from './pageTwo.module.css';
import {getPackagingCargo, getPackagingItems} from './pageTwo-selector';

import {setPackagingCargo, setPackagingParams} from './pageTwo-reducer';
import {Link} from 'react-router-dom';


export const PageTwo: React.FC = () => {
    const dispatch = useDispatch()
    const packingItems = useSelector(getPackagingItems);
    const packingCargo = useSelector(getPackagingCargo)
    console.log(packingCargo)
    const onClickHandler = (id: number) => {
        dispatch(setPackagingCargo({id}))
    }


    const onChangeHandler = (id: number, param: string, paramQuantity: number) => {
        dispatch(setPackagingParams({id, param, paramQuantity}))
    }
    useEffect(() => {

    }, [packingItems])

    return (
        <div className={st.pageTwoMain}>
            <p>Укажите тип упаковки груза</p>

            <Row justify='center'>
                {
                    packingItems.map(item => {
                        return <Col className={st.pageTwoMain_col} key={item.id}>
                            <img src={item.img} alt={item.title} width={'100px'} height={'100px'}/>
                            <div>
                                <p>{item.length && <Input value={item.length} type='number'
                                                          onChange={(e) => {
                                                              onChangeHandler(item.id, 'length', +e.currentTarget.value)
                                                          }}/>}</p>
                                <p>{item.width && <Input value={item.width} type='number'/>}</p>
                                <p>{item.height && <Input value={item.height} type='number'/>}</p>
                                <p>{item.diameter && <Input value={item.diameter} type='number'/>}</p>
                                <p>{item.volume && <Input value={item.volume} type='number'/>}</p>
                                <p>{item.weight && <Input value={item.weight} type='number'/>}</p>
                            </div>
                            <div>
                                <Button onClick={() => {
                                    onClickHandler(item.id)
                                }}>{item.title}</Button>
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





