import React, {ChangeEvent} from 'react';
import st from './PageFive.module.css';
import {useDispatch} from 'react-redux';
import {setPackagingPosition} from '../payment/p2-bll/payment-reducer';
import {NameType} from '../../../common/types';

type PropsType = {
    img: string
    description: string
    cargoId: string
    position: boolean
    checkName: string
}

export const CargoBlock: React.FC<PropsType> = React.memo((props) => {

    const dispatch = useDispatch();

    const positionSelect = (e: ChangeEvent<HTMLInputElement>) => {
        let position = e.currentTarget.checked;
        dispatch(setPackagingPosition({id: e.currentTarget.id, name: e.currentTarget.name as NameType, position}));
    };

    return <div className={st.cargoBlock}>

        <p className={st.desc}>{props.description}</p>

        <div className={st.block}>

            <div className={st.blockImage}>
                <img src={props.img} width='100px' height='100px' alt='cargoPosition'/>
            </div>

            <div className={st.check}>
                <input type="checkbox" id={props.cargoId} checked={props.position}
                       name={props.checkName} onChange={positionSelect}/>

            </div>

        </div>
    </div>;
});
