import React from 'react';
import {Button, Col, Row} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import st from './pageTwo.module.css';
import {getPackagingCargo, getPackagingItems} from './pageTwo-selector';
import {ParamType, setPackagingCargo, setPackagingParams} from './pageTwo-reducer';
import {Link} from 'react-router-dom';
import {PAGE_ONE, PAGE_THREE} from '../../routes/routes';
import {CargoTable} from './CargoTable';
import '../../../main/m1-ui/App.css';
import {PageTwoInputsComponent} from './pageTwoInputsComponent';

export const PageTwo: React.FC = () => {
    const dispatch = useDispatch();
    const packagingItems = useSelector(getPackagingItems);
    const packagingCargo = useSelector(getPackagingCargo);

    const onClickHandler = (id: string) => {
        dispatch(setPackagingCargo({id}));
    };

    const onChangeHandler = (id: string, param: ParamType, paramQuantity: number) => {
        dispatch(setPackagingParams({id, param, paramQuantity}));
    };


    return <div className={st.pageTwoMain}>
        <p>Укажите тип упаковки груза</p>

        <Row justify='center'>
            {
                packagingItems.map(item => {
                    return <Col className={st.pageTwoMain_col} key={item.id}>
                        <img src={item.img} alt={item.title} width={'100px'} height={'100px'}/>
                        <div>
                            <PageTwoInputsComponent item={item} onChangeHandler={onChangeHandler}/>
                        </div>
                        <div>
                            <Button onClick={() => {
                                onClickHandler(item.id);

                            }}>{item.title}</Button>
                        </div>
                    </Col>;
                })
            }</Row>


        <CargoTable/>
        <div style={{margin: '10px'}}>
            <Link to={PAGE_ONE}> <Button type={'default'}>Назад</Button></Link>
        </div>
        <div style={{margin: '10px'}}>
            <Link to={PAGE_THREE}> <Button type={'default'}>Далее</Button></Link>
        </div>


    </div>;
};





