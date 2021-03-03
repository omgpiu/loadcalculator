import React from 'react';
import {Button, Col, Row} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import st from './pageTwo.module.css';
import {getPackagingItems} from './pageTwo-selector';
import {PackagingItemType, ParamType, setPackagingCargo, setPackagingParams} from './pageTwo-reducer';
import {CargoTable} from './CargoTable';
import '../../root/r1-ui/App.css';
import {PageTwoInputsComponent} from './pageTwoInputsComponent';
import ButtonBlock from '../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_ONE, PAGE_THREE} from '../../root/routes/routes';
import WithAuthRedirect from '../../common/helpers/withAuthRedirect';



const PageTwo: React.FC = () => {
    const dispatch = useDispatch();
    const packagingItems = useSelector(getPackagingItems);

    const onClickHandler = (item: PackagingItemType) => {
        dispatch(setPackagingCargo(item));
    };

    const onChangeHandler = (id: string, param: ParamType, paramQuantity: number | string) => {
        dispatch(setPackagingParams({id, param, paramQuantity}));
    };



    return <div className={st.pageTwoMain}>
        <p>Укажите тип упаковки груза</p>

        <Row justify='center'>
            {
                packagingItems.map(item => {
                    return <Col className={st.pageTwoMain_col} key={item.id}>
                        <div className={st.pageTwoMain_wrapper}>
                            <img src={item.img} alt={item.title} width={'100px'} height={'100px'}/>
                            <div>
                                <PageTwoInputsComponent item={item} onChangeHandler={onChangeHandler}/>
                            </div>
                            <div>
                                <Button onClick={() => {
                                    onClickHandler(item);
                                }}>{item.title}</Button>
                            </div>
                        </div>
                    </Col>;
                })
            }</Row>
        <CargoTable/>
        <ButtonBlock type={'default'} prevPageLink={PAGE_ONE} nextPageLink={PAGE_THREE} />
    </div>;
};

export default WithAuthRedirect(PageTwo)



