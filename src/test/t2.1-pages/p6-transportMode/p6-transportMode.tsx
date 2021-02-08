import {RadioChangeEvent} from 'antd';
import React from 'react';
import {ContentTransportMode} from './contentTransportMode/contentTransportMode';
import st from './transportMode.module.scss'
import {TotalCargoValueType} from '../../t5-common/calculator/calculator';
import {useDispatch} from 'react-redux';
import {getAutoFilterDataTC} from './p6-reducer';
import {TransportType} from '../../../main/m3-dal/api-service';
import {AutoChoice} from './autoChoice/autoChoice';
import {TotalCargoValue} from './totalCargoValue/totalCargoValue';


export const TransportMode: React.FC<PropsType> = React.memo((props) => {

    const {text_description, img, totalCargoValue, transports} = props;
    const dispatch = useDispatch()
    const [mode, setMode] = React.useState(0);

    const onChange = (e: RadioChangeEvent) => {
        const value = e.target.value
        setMode(value)
        if (value === 1) {
            dispatch(getAutoFilterDataTC())
        }

    }

    return (
        <div className={st.TransportMode_wrapper}>
            <ContentTransportMode onChange={onChange} img={img} mode={mode}
                                  text_description={text_description}/>
            <hr/>
            <div>
                {
                    (mode === 1)
                        ? <>
                            <TotalCargoValue totalCargoValue={totalCargoValue}/>
                            <AutoChoice/>
                        </>
                        : <div> в разработке </div>
                }
            </div>
        </div>
    )
})

type PropsType = {
    img: string
    text_description: { autoModeText: string, selectModeText: string }
    transports: TransportType[]
    totalCargoValue: TotalCargoValueType
}


