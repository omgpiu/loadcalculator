import React, {useState} from 'react';
import {Button, Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {TransportType} from '../../../../main/m3-dal/api-service';
import st from './selectChioce.module.scss';
import {AppRootStateType} from '../../../../main/m2-bll/store';
import ButtonBlock from '../../../t5-common/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_SEVEN} from '../../../routes/routes';
import {Tr_ModeActions} from '../p6-reducer';
import {v1} from 'uuid';

export const SelectChoice: React.FC<PropsType> = ({transports}) => {
    const dispatch = useDispatch();
    const [selectTransportId, setSelectTransportId] = useState<null | string>(null)
    const selectChoice = useSelector<AppRootStateType, TransportType[]>(s => s.pageSix.selectChoice)
    const {Option} = Select;

    const selectHandleChange = (value: string) => {
        setSelectTransportId(value)
    }
    const addClickHandler = () => {
        selectTransportId && dispatch(Tr_ModeActions.addSelectTransportAC({transportId: selectTransportId}))
    }
    const deleteClickHandler = () => {
        selectTransportId && dispatch(Tr_ModeActions.deleteSelectTransportAC({transportId: selectTransportId}))
    }

    const choiceRow = (selectChoice: TransportType[]) => {
        if (selectChoice.length > 0) {
            return selectChoice.map(el => (<div key={el.id} className={st.selectChoice_inner}>
                    <Button danger onClick={deleteClickHandler}>Удалить</Button>
                    <div className={st.selectChoice_description}>
                        <p>{el.car_name}</p>
                        <p>${el.car_char}</p>
                        <p>{el.car_m} тн</p>
                    </div>
                    <img className={st.selectChoice_img} src={el.img} alt="transport img"/>
                </div>
            ))
        }
    }
    const selectButton = (transports: TransportType[]) => {
        return <div>
            <Select placeholder='Выберете тип транспорта'
                    style={{width: 240, marginRight: 20}}
                    onChange={selectHandleChange}>
                {
                    transports.map(el => <Option key={v1()} value={el.id}>
                        {`${el.car_name} ${el.car_char}`}
                    </Option>)
                }
            </Select>
            <Button type='default' onClick={addClickHandler}>Добавить</Button>
        </div>
    }
    return (
        <div className={st.selectChoice}>
            {selectButton(transports)}
            {choiceRow(selectChoice)}
            <ButtonBlock prevPageLink={PAGE_FIVE} nextPageLink={PAGE_SEVEN} disabled={!selectTransportId}/>
        </div>
    )
}

type PropsType = {
    transports: TransportType[]
}

// p6  решить проблему с отрисовкой в режиме речного выбора Т/С
// (при добавлении/ удалении двух одинаковый Т/С)
// получается 2 обьекта - один и тот же обьект