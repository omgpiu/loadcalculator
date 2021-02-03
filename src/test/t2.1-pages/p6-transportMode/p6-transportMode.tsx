import {Radio, RadioChangeEvent} from 'antd';
import React, {CSSProperties} from 'react';
import cargo_base from '../../../assets/images/pageFive/CARGO_BASE.webp';
import imgContainer from '../../../assets/images/container.png';
import st from './transportMode.module.scss';




export const TransportMode: React.FC = () => {
    const [mode, setMode] = React.useState(0);

    const autoModeText = 'При автоматическом подборе контейнеров будут использованны следующие типы контейнеров:' +
        ' 20\'dv, 40\'dv и 40`hq. Количество контейнеров каждого типа будет рассчитано автоматически.'
    const selectModeText = 'При ручном указании контейнеров вы сами выбираете количество контейнеров' +
        ' доступных для загрузки груза и их типы из имеющихся в базе.'
    const onChange = (e: RadioChangeEvent) => setMode(e.target.value);

    const style:CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '15px'
    }

    return (
        <>
            <h3> Подбор траспортного средства </h3>
            <div className={st.TransportMode}>
                <div className={st.TransportMode_descr}>
                    <p>{autoModeText}</p>
                    <p>{selectModeText}</p>
                </div>
                <div>
                    <Radio.Group style={style} onChange={onChange} value={mode}>
                        <Radio value={1} onChange={onChange}>
                            <img className={st.TransportMode_img} src={cargo_base} alt=""/>
                        </Radio>
                        <Radio value={2} onChange={onChange}>
                            <img className={st.TransportMode_img} src={imgContainer} alt=""/>
                        </Radio>
                    </Radio.Group>
                </div>
            </div>


            <div>
                {
                    (mode === 1) ? <div> 111</div> : (mode === 2) ? <div> 222</div> : ''
                }
            </div>
        </>
    )
}
