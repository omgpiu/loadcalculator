import {Alert, Button, RadioChangeEvent} from 'antd';
import React, {useState} from 'react';
import {ContentTransportMode} from './contentTransportMode/contentTransportMode';
import {Link} from 'react-router-dom';
import {PAGE_FIVE} from '../../routes/routes';
import st from './transportMode.module.scss'
import {TotalCargoValueType} from '../../t5-common/calculator/calculator';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../main/m2-bll/store';
import {getTransportDataTC} from './p6-reducer';


export const TransportMode: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const totalCargoValue = useSelector<AppRootStateType, TotalCargoValueType>(s => s.pageThree.totalCargoValue)
    const {text_description, img, onHandleClick} = props;
    const [mode, setMode] = React.useState(0);
    const [error, setError] = useState<null | number>(null)

    const onChange = (e: RadioChangeEvent) => {
        setMode(e.target.value)
        // при выборе поля снимаем ошибку
        setError(null)
    }
    const handleClick = () => {
        //если не выбрано ни одно поле сетаем ошибку и выводим алерт
        if (!mode) {
            return setError(1)
        }
        onHandleClick()
    }

    return (
        <div className={st.TransportMode_wrapper}>
            <ContentTransportMode onChange={onChange} img={img} mode={mode}
                                  text_description={text_description}/>
            <div>
                {
                    (mode === 1 && <TotalCargoValue totalCargoValue={totalCargoValue}/>)
                    ||
                    (mode === 2 && <TotalCargoValue totalCargoValue={totalCargoValue}/>)
                }
            </div>
            <div>
                <Link to={PAGE_FIVE}>
                    <Button type="default">Назад</Button>
                </Link>
                <Button type="default" onClick={handleClick}>Продолжить</Button>
            </div>
            {(error) && <Alert message='Не выбрано ни одного поля !' type="error"/>}
        </div>
    )
}

type PropsType = {
    img: string
    text_description: { autoModeText: string, selectModeText: string }
    onHandleClick: () => void

}

const TotalCargoValue: React.FC<{ totalCargoValue: TotalCargoValueType }> = ({totalCargoValue}) => {
    return (
        <div>
            <h4> Общие параметры груза:</h4>
            <span> Обьем: {totalCargoValue.cargoVolume} m3</span>
            <span> Масса: {totalCargoValue.cargoMass} т </span>
        </div>
    )
}


const autoMode = (suitableTransport: Array<any>) => {

    return <>
        <div>Подходящий вид транспорта: </div>


    </>

}
