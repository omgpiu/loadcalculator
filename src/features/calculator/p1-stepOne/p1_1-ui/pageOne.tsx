import {Button, Col, Row, Upload} from 'antd';
import React, {useState} from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../../assets/images/container.png';
import truck from '../../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {UploadChangeParam} from 'antd/lib/upload';
import {LOGIN, PAGE_TWO} from '../../../../root/routes/routesCalc';
import ButtonBlock from '../../../../common/helpers/buttonBlock/buttonBlock';
import {getLoadPlace, getUploadStatus} from '../../p10-calc-bll/payment-selectors';
import {CONTAINER, setLoadPlace, TRUCK,} from '../../p10-calc-bll/payment-reducer';
import {determineLoadPlace} from '../../p10-calc-bll/payment-thunk';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../../../authorization/a-2-bll/auth-selectors';
import {getAppStatus} from '../../../../root/r2-bll/app-selector';


const PageOne: React.FC = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);
    const status = useSelector(getAppStatus);
    const load = useSelector(getLoadPlace);
    const isUploaded = useSelector(getUploadStatus);
    const [disBtn, unDisBtn] = useState<boolean>(true)
//Выбор загружаемого пространства
    const onClickTransportHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const value = e.currentTarget.dataset.name as 'Грузовик' | 'Контейнер'
        dispatch(setLoadPlace({loadPlace: value}));
        unDisBtn(false)
    };
    //todo
    // const uploadChangeHandler = (value: RcCustomRequestOptions) => {
    //     dispatch(uploadCargoForm(value.file));
    // };
    // для отрисовки загрузки файла и сообщения об успешности/или нет
    // const onChange = (info: UploadChangeParam) => {
    //     if (isUploaded !== 'uploading') {
    //         console.log(isUploaded + 'asdasd');
    //     }
    //     if (isUploaded === 'done') {
    //         message.info(isUploaded + 'file uploaded successfully', 2);
    //     } else if (isUploaded === 'error') {
    //         message.error(isUploaded + ` file upload failed.`, 2);
    //     }
    // };
    const loadPlaceOnClickHandler = () => {
        dispatch(determineLoadPlace());
    };
    const prop = {
        onChange(info: UploadChangeParam) {
            info.file.status = isUploaded;
        }
    };
    // HOC withAuthRedirect здесь не подойдет предположительно из-за циклической зависимости
    if (!isAuth && status !== 'loading') {
        return <Redirect to={LOGIN}/>
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
                        <Upload /*customRequest={uploadChangeHandler}*/  {...prop}>
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
                    <ButtonBlock type={'default'} disabled={disBtn} nextPageLink={PAGE_TWO}
                                 parentClickHandler={loadPlaceOnClickHandler}/>
                </Col>
            </Row>
        </div>
    );
};

export default PageOne


