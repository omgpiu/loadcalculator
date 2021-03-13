import React from 'react';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_SIX} from '../../../root/routes/routesCalc';
import WithAuthRedirect from '../../../common/helpers/hook_HOC/withAuthRedirect';
import {useSelector} from 'react-redux';
import {getResultPayment} from '../p10-calc-bll/payment-selectors';


const Result = () => {
    const resultPayment = useSelector(getResultPayment)
    const {
        user_name, loadPlace, packagingCargo, totalCargoValue, withPallet, palletParam,
        transports, created
    } = resultPayment

    return (
        <div style={{padding:'40px'}}>
            <h2>Здесь будет визуализация загрузки контейнера, исходя из сформированного объекта ... :</h2>
            <ul>
                <li>Имя рользователя: {user_name}</li>
                <li>Загружаемое пространство: {loadPlace}</li>
                <li>Позиции груза: {JSON.stringify(packagingCargo)}</li>
                <li>Общие расчетные параметры груза: {JSON.stringify(totalCargoValue)}</li>
                <li>Перевозка на паллетах: {withPallet}</li>
                <li>Выбранные паллеты: {JSON.stringify(palletParam)}</li>
                <li>Выбранный вид транспорта: {JSON.stringify(transports)}</li>
                <li>Расчет создан: {created}</li>
            </ul>
            <ButtonBlock prevPageLink={PAGE_SIX} type={'default'}/>
        </div>
    )
}

export default WithAuthRedirect(Result)