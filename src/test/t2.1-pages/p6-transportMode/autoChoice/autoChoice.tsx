import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../main/m2-bll/store';
import {TransportType} from '../../../../main/m3-dal/api-service';
import {RequestStatusType} from '../../../../main/m2-bll/appReducer';
import {Alert, Radio, RadioChangeEvent, Spin} from 'antd';
import {PAGE_FIVE, PAGE_SEVEN} from '../../../routes/routes';
import st from './autoChoice.module.scss'
import {ButtonBlock} from '../../../t5-common/buttonBlock/buttonBlock';

export const AutoChoice: React.FC = () => {
    const [error, setError] = useState<undefined | number>(undefined)
    const [radioValue, setMode] = React.useState(null);
    const autoChoiceFiltered = useSelector<AppRootStateType, TransportType[]>(s => s.pageSix.autoChoiceFiltered)
    const status = useSelector<AppRootStateType, RequestStatusType>(s => s.app.status)
    const onChangeHand = (e: RadioChangeEvent) => {
        setMode(e.target.value)
        setError(undefined)
    }
    const handleClick = () => {
        return radioValue
            ? alert('Обработка выбора Т/С SelectCurrentTransportTC()+ переход страницы ')
            : setError(1)//если не выбрано ни одно поле ( radio ) сетаем ошибку и выводим алерт
    }
    return (
        <div>
            <Spin spinning={status === 'loading'} delay={0}>
                <h4 className={st.autoChoice_title}>Подходящий тип автомобиля: </h4>
                {
                    autoChoiceFiltered.map(el => <div key={el.id} className={st.autoChoice_inner}>
                            <div> {el.car_name}
                                <div>{el.car_char} </div>
                            </div>
                            <Radio.Group onChange={onChangeHand} value={radioValue}>
                                <Radio value={el.id}><img src={el.img} alt="transport img"/></Radio>
                            </Radio.Group>
                        </div>
                    )
                }
                <ButtonBlock type={'default'} prevPageLink={PAGE_FIVE}
                             nextPageLink={PAGE_SEVEN} parentClickHandler={handleClick}/>
                {(error) && <Alert message='Не выбрано ни одного поля !' type="error"/>}
            </Spin>
        </div>
    )
}
