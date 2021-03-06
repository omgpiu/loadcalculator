import {RadioChangeEvent} from 'antd';
import React from 'react';
import {ContentTransportMode} from './contentTransportMode/contentTransportMode';
import st from './transportMode.module.scss'
import {useDispatch} from 'react-redux';
import {tr_ModeActions} from './p6-reducer';
import {TotalCargoValue} from './totalCargoValue/totalCargoValue';
import {AutoChoice} from './autoChoice/autoChoice';
import {SelectChoice} from './selectChoice/selectChoice';
import {TotalCargoValueType, TransportType} from '../../../common/types';


export const TransportMode: React.FC<PropsType> = React.memo((props) => {

    const {text_description, img, totalCargoValue, setShowBtn,transports} = props;
    const dispatch = useDispatch()
    const [mode, setMode] = React.useState(0);

    const onChange = (e: RadioChangeEvent) => {
        setShowBtn(false)
        const value = e.target.value
        setMode(value)
        if (value === 1) {
            dispatch(tr_ModeActions.autoFilterChoiceAC({totalCargoValue, transports}))
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
                        : (mode === 2)
                        ? <>
                            <TotalCargoValue totalCargoValue={totalCargoValue}/>
                            <SelectChoice totalCargoValue={totalCargoValue} transports={transports}/>
                        </>
                        : null
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
    setShowBtn: (value: boolean) => void
}


