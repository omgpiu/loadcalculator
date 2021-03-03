import {Button, Col, Row, Upload} from 'antd';
import React from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getLoadPlace, getUploadStatus} from '../p1_2-bll/pageOne-selector';
import {CONTAINER, determineLoadPlace, setLoadPlace, TRUCK, uploadCargoForm} from '../p1_2-bll/pageOne-reducer';
import {UploadRequestOption as RcCustomRequestOptions} from 'rc-upload/lib/interface';
import {UploadChangeParam} from 'antd/lib/upload';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../../authorization/a-2-bll/auth-selectors';
import {LOGIN, PAGE_TWO} from '../../../root/routes/routes';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import WithAuthRedirect from '../../../common/helpers/withAuthRedirect';

const PageOne: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch();
    const load = useSelector(getLoadPlace);
    const isUploaded = useSelector(getUploadStatus);
//Выбор загружаемого пространства
    const onClickTruckHandler = () => {
        dispatch(setLoadPlace({loadPlace: TRUCK}));
        // dispatch(determineLoadPlace(TRUCK));
    };
    const onClickContainerHandler = () => {
        dispatch(setLoadPlace({loadPlace: CONTAINER}));
        // dispatch(determineLoadPlace(CONTAINER));
    };

    const uploadChangeHandler = (value: RcCustomRequestOptions) => {
        dispatch(uploadCargoForm(value.file));
    };

    const loadPlaceOnClickHandler = () => {
        dispatch(determineLoadPlace());
    };
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
                    <img src={truck} alt="" onClick={onClickTruckHandler}/>
                    <div>
                        <Button onClick={onClickTruckHandler}
                                type={load === TRUCK ? 'primary' : 'default'}
                        >Грузовик</Button>
                    </div>
                    <div style={{marginTop: '9px'}}>
                        <Upload customRequest={uploadChangeHandler}   {...prop}>
                            <Button block icon={<UploadOutlined/>}>Загрузка Документа</Button>
                        </Upload>
                    </div>
                </Col>
                <Col className={st.pageOneMain_Block}>
                    <img src={container} alt="" onClick={onClickContainerHandler}/>
                    <div>
                        <Button onClick={onClickContainerHandler}
                                type={load === CONTAINER ? 'primary' : 'default'}
                        >Контейнер</Button>
                    </div>
                    <ButtonBlock type={'default'} nextPageLink={PAGE_TWO} parentClickHandler={loadPlaceOnClickHandler}/>
                </Col>
            </Row>
        </div>
    );
};

export default WithAuthRedirect(PageOne)


