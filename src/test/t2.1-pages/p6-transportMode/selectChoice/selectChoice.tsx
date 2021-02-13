import React, {useEffect, useState} from 'react';
import {Button, Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {TransportType} from '../../../../main/m3-dal/api-service';
import st from './selectChioce.module.scss';
import {AppRootStateType} from '../../../../main/m2-bll/store';
import ButtonBlock from '../../../t5-common/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_SEVEN} from '../../../routes/routes';
import {Tr_ModeActions} from '../p6-reducer';
import {v1} from 'uuid';
import {calcRemainingCargo, TotalCargoValueType} from '../../../t5-common/calculator/calculator';

export const SelectChoice: React.FC<PropsType> = ({transports, totalCargoValue}) => {
    const dispatch = useDispatch();
    const [selectTransportId, setSelectTransportId] = useState<null | string>(null)
    const selectChoice = useSelector<AppRootStateType, TransportType[]>(s => s.pageSix.selectChoice)
    const {Option} = Select;

    // useEffect(() => {
    //     console.log(calcRemainingCargo(selectChoice, totalCargoValue))
    // }, [selectChoice, totalCargoValue])

    const selectHandleChange = (value: string) => {
        setSelectTransportId(value)
    }
    const addClickHandler = () => {
        selectTransportId && dispatch(Tr_ModeActions.addSelectTransportAC({transportId: selectTransportId}))
        console.log(calcRemainingCargo(selectChoice, totalCargoValue))

    }
    const deleteClickHandler = (id: string) => {
        selectTransportId && dispatch(Tr_ModeActions.deleteSelectTransportAC({transportId: id}))
    }


    const choiceRow = (selectChoice: TransportType[]) => {
        if (selectChoice.length > 0) {
            return selectChoice.map(el => (<div key={el.id} className={st.selectChoice_inner}>
                    <Button danger onClick={() => deleteClickHandler(el.id)}>Удалить</Button>
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
            <ButtonBlock prevPageLink={PAGE_FIVE} nextPageLink={PAGE_SEVEN} disabled={selectChoice.length === 0}/>
        </div>
    )
}

type PropsType = {
    transports: TransportType[]
    totalCargoValue: TotalCargoValueType
}
