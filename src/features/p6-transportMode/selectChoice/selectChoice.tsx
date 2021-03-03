import React, {useState} from 'react';
import {Alert, Button, Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {TransportType} from '../../../root/r3-dal/api-service';
import st from './selectChioce.module.scss';
import {AppRootStateType} from '../../../root/r2-bll/store';
import {remainderCargoType, setSelectedTransportTC, Tr_ModeActions} from '../p6-reducer';
import {v1} from 'uuid';
import {TotalCargoValueType} from '../../p2-stepTwo/pageTwo-reducer';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE, PAGE_SEVEN} from '../../../root/routes/routes';

export const SelectChoice: React.FC<PropsType> = React.memo(({transports, totalCargoValue}) => {
    const dispatch = useDispatch();
    const [selectTransportId, setSelectTransportId] = useState< string>('')
    const selectChoice = useSelector<AppRootStateType, TransportType[]>(s => s.pageSix.selectChoice)
    const remainingCargo = useSelector<AppRootStateType, remainderCargoType>(s => s.pageSix.remainderCargo)
    const {Option} = Select;

    const selectHandleChange = (value: string) => {
        // Change селекта , в value - id выбранного транспорта
        setSelectTransportId(value)
    }
    const addClickHandler = () => {
        //добавляем выбранный транспорт в selectChoice
        selectTransportId &&
        dispatch(Tr_ModeActions.addSelectTransportAC(
            {transportId: selectTransportId, totalCargoValue: totalCargoValue}
        ))
        dispatch(Tr_ModeActions.calcRemainingCargoAC({totalCargoValue}))
    }
    const deleteClickHandler = (id: string) => {
        // удаляем выбранный вид транспорта из selectChoice, calcRemainingCargoAC: делаем пересчет остатка загрузки
        dispatch(Tr_ModeActions.deleteSelectTransportAC({transportId: id}))
        dispatch(Tr_ModeActions.calcRemainingCargoAC({totalCargoValue}))
    }
    const onHandleClick = () => {
        // отправляем на сервер массив с выбранными машинами/контейнерами
        dispatch(setSelectedTransportTC())
    }

    const choiceRow = (selectChoice: TransportType[]) => {
        //selectChoice - массив с выбранным транспортом
        if (selectChoice.length > 0) {
            return selectChoice.map(el => (<div key={el.id} className={st.selectChoice_inner}>
                    <Button danger onClick={() => deleteClickHandler(el.id)}>Удалить</Button>
                    <div className={st.selectChoice_description}>
                        <p>{el.car_name}</p>
                        <p>{el.car_char}</p>
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
    const resultChoice = ( remainingCargo: remainderCargoType, selectChoice: TransportType[]) => {
        const {remainingVolume, remainingMass, remainPercent} = remainingCargo
        const descriptionVolume = remainingVolume > 0 ? ` ${remainingVolume} m3` : '';
        const descriptionMass = remainingMass > 0 ? ` ${remainingMass} Тн` : '';

        return <div>
            {
                (selectChoice.length > 0 && remainingCargo.remainPercent > 0) && <Alert
                    message="Осталось загрузить: "
                    description={`${remainPercent}% груза, в размере: объем - ${descriptionVolume}, масса - ${descriptionMass}`}
                    type="warning" showIcon closable/>
            }
            {
                (selectChoice.length > 0 && remainingCargo.remainPercent === -10000) &&
                <Alert message='Данный транспорт подходит для перевозки!' type='success' showIcon/>
            }
        </div>
    }
    // disabled кнопки продолжить( усли не добавлен ни один транспорт или груз не помещается в выбранный транспорт
    const disabledBtn = selectChoice.length === 0 || remainingCargo.remainPercent > 0;

    return (
        <div className={st.selectChoice}>
            {selectButton(transports)}
            {choiceRow(selectChoice)}
            {resultChoice(remainingCargo, selectChoice)}
            <ButtonBlock prevPageLink={PAGE_FIVE} nextPageLink={PAGE_SEVEN}
                         disabled={disabledBtn} parentClickHandler={onHandleClick}/>
        </div>
    )
})

type PropsType = {
    transports: TransportType[]
    totalCargoValue: TotalCargoValueType
}
