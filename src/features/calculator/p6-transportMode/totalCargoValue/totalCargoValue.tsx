import React from 'react';
import st from './totalCargoValue.module.scss'
import {TotalCargoValueType} from '../../../../common/types';

export const TotalCargoValue: React.FC<{ totalCargoValue: TotalCargoValueType }> = ({totalCargoValue}) => {
    return (
        <>
            <h4 className={st.TotalCargoValue_title}> Общие параметры груза:</h4>
            <div className={st.TotalCargoValue_inner}>
                <div>
                    <span> Обьем: {totalCargoValue.cargoVolume} m3 ; </span>
                    <span> Масса: {totalCargoValue.cargoMass} тн </span>
                </div>
                <div> Максимальные габариты:
                    <ul>
                        <li>MAX высота {totalCargoValue.maxH} м</li>
                        <li>MAX длина {totalCargoValue.maxL} м</li>
                        <li>MAX ширина {totalCargoValue.maxW} м</li>
                    </ul>
                </div>

            </div>
        </>
    )
}