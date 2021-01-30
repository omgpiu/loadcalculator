import React from 'react';
import st from './pageOne.module.css';
import {ButtonPage} from '../../t5-common/c-1-btn/ButtonPage';
import {InputPage} from '../../t5-common/с-2-inp/InputPage';
import container from '../../../assets/images/container.jpg';
import truck from '../../../assets/images/truck.jpg';


export const PageOne: React.FC = (props) => {
    return (
        <div className={st.wrapper}>
            <p>Выбор варианта загрузки</p>
            <div className={st.main}>
                <div>
                    <img src={container} alt="container-logo"/>
                    <p>Контейнеры</p>
                    <InputPage type='radio' name='check'/>
                </div>
                <div>
                    <img src={truck} alt="truck-logo"/>
                    <InputPage type='radio' name='check'/>
                </div>
            </div>
            <div className={st.buttonBox}>
                <ButtonPage name='Импорт документа'/>
                <ButtonPage name='Следующий шаг'/>
            </div>
        </div>
    );
};





