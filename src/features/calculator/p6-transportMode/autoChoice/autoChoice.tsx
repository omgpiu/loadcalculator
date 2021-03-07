import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Radio, RadioChangeEvent, Spin} from 'antd';
import st from './autoChoice.module.scss'

import {getAutoChoiceFiltered, getStatus} from '../p6-selector';
import ButtonBlock from '../../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_SEVEN} from '../../../../root/routes/routesCalc';
import {setSelectedTransportTC} from '../../p10-calc-bll/payment-thunk';

export const AutoChoice: React.FC = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState<boolean>(true);
    const [radioValue, setMode] = React.useState(null);
    const autoChoiceFiltered = useSelector(getAutoChoiceFiltered)
    const status = useSelector(getStatus)


    const onChangeHand = (e: RadioChangeEvent) => {
        setMode(e.target.value)
        setError(false)
    }
    const onHandleClick = () => {
        dispatch(setSelectedTransportTC())
    }

    return (
        <div>
            <Spin spinning={status === 'loading'} delay={0}>
                <h4 className={st.autoChoice_title}>Подходящий тип транспорта: </h4>
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
                             nextPageLink={PAGE_SEVEN} disabled={error}
                             parentClickHandler={onHandleClick}/>
            </Spin>
        </div>
    )
}
