import React, {CSSProperties} from 'react';
import st from '../transportMode.module.scss';
import {Radio, RadioChangeEvent} from 'antd';

export const ContentTransportMode: React.FC<PropsType> = ({mode, text_description, onChange, img: containerImg}) => {
    const style: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        paddingLeft: '15px'
    }

    return (
        <>
            <h3 className={st.title}> Подбор траспортного средства </h3>
            <div className={st.TransportMode}>
                <div className={st.TransportMode_descr}>
                    <p>{text_description.autoModeText}</p>
                    <p>{text_description.selectModeText}</p>
                </div>
                <div>
                    <Radio.Group style={style} onChange={onChange} value={mode}>
                        <Radio value={1}>
                            <img className={st.TransportMode_img} src={containerImg} alt='autoChoice'/>
                        </Radio>
                        <Radio value={2}>
                            <img className={st.TransportMode_img} src={containerImg} alt='selectChoice'/>
                        </Radio>
                    </Radio.Group>
                </div>
            </div>
        </>
    )
}
type PropsType = {
    mode: number
    text_description: { autoModeText: string, selectModeText: string }
    onChange: (e: RadioChangeEvent) => void
    img: string
}