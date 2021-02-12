import {Button, Col, message, Row, Upload} from 'antd';
import React from 'react';
import st from './pageOne.module.css';
import {UploadOutlined} from '@ant-design/icons';
import container from '../../../assets/images/container.png';
import truck from '../../../assets/images/truck.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getLoadPlace, getUploadStatus} from './pageOne-selector';
import {CONTAINER, determineLoadPlace, TRUCK, uploadCargoForm} from './pageOne-reducer';
import {PAGE_TWO} from '../../routes/routes';
import ButtonBlock from '../../t5-common/buttonBlock/buttonBlock';
import {UploadRequestOption as RcCustomRequestOptions} from 'rc-upload/lib/interface';
import {UploadChangeParam} from 'antd/lib/upload';

export const PageOne: React.FC = () => {

    const dispatch = useDispatch();
    const load = useSelector(getLoadPlace);
    const isUploaded = useSelector(getUploadStatus);
//Выбор загружаемого пространства
    const onClickTruckHandler = () => {
        dispatch(determineLoadPlace(TRUCK));
    };
    const onClickContainerHandler = () => {
        dispatch(determineLoadPlace(CONTAINER));
    };

    const uploadChangeHandler = (value: RcCustomRequestOptions) => {
        dispatch(uploadCargoForm(value.file));
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
            info.file.status = isUploaded
        }
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
                    <ButtonBlock type={'default'} nextPageLink={PAGE_TWO}/>
                </Col>
            </Row>
        </div>
    );
};




