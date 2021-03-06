import {Button, Col, Row, Upload} from 'antd';
import React, {useState} from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../../assets/images/container.png';
import truck from '../../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {UploadRequestOption as RcCustomRequestOptions} from 'rc-upload/lib/interface';
import {UploadChangeParam} from 'antd/lib/upload';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../../../authorization/a-2-bll/auth-selectors';
import {LOGIN, PAGE_TWO} from '../../../../root/routes/routesCalc';
import ButtonBlock from '../../../../common/helpers/buttonBlock/buttonBlock';
import {getLoadPlace, getUploadStatus} from '../../payment/p2-bll/payment-selectors';
import {CONTAINER, setLoadPlace, TRUCK,} from '../../payment/p2-bll/payment-reducer';
import {determineLoadPlace, uploadCargoForm} from '../../payment/p2-bll/payment-thunk';


const PageOne: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch();
    const load = useSelector(getLoadPlace);
    const isUploaded = useSelector(getUploadStatus);
    const [disBtn, unDisBtn] = useState<boolean>(true)
//Выбор загружаемого пространства
    const onClickTransportHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const value = e.currentTarget.dataset.name as 'Грузовик' | 'Контейнер'
        dispatch(setLoadPlace({loadPlace: value}));
        unDisBtn(false)
        // dispatch(determineLoadPlace(TRUCK));
    };

    const uploadChangeHandler = (value: RcCustomRequestOptions) => {
        dispatch(uploadCargoForm(value.file));
    };

    const loadPlaceOnClickHandler = () => {
        dispatch(determineLoadPlace());
    };

    const prop = {
        onChange(info: UploadChangeParam) {
            info.file.status = isUploaded;
        }
    };
    if (!isAuth) {
        return <Redirect to={LOGIN}/>;
    }
    return (
        <div className={st.pageOneMain}>
            <p>Выбор загружаемого пространства</p>
            <Row justify="center">
                <Col className={st.pageOneMain_Block}>
                    <img src={truck} alt="" onClick={onClickTransportHandler}/>
                    <div>
                        <Button onClick={onClickTransportHandler}
                                type={load === TRUCK ? 'primary' : 'default'} data-name={TRUCK}
                        >Грузовик</Button>
                    </div>
                    <div style={{marginTop: '9px'}}>
                        <Upload customRequest={uploadChangeHandler}   {...prop}>
                            <Button block icon={<UploadOutlined/>}>Загрузка Документа</Button>
                        </Upload>
                    </div>
                </Col>
                <Col className={st.pageOneMain_Block}>
                    <img src={container} alt="" onClick={onClickTransportHandler}/>
                    <div>
                        <Button onClick={onClickTransportHandler}
                                type={load === CONTAINER ? 'primary' : 'default'} data-name={CONTAINER}
                        >Контейнер</Button>
                    </div>
                    <ButtonBlock type={'default'} disabled={disBtn} nextPageLink={PAGE_TWO} parentClickHandler={loadPlaceOnClickHandler}/>
                </Col>
            </Row>
        </div>
    );
};

export default PageOne


