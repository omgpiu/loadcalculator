import React from 'react';
import st from './pageOne.module.css';
import {ButtonPage} from '../../t5-common/c-1-btn/ButtonPage';
import {InputPage} from '../../t5-common/с-2-inp/InputPage';


export const PageOne: React.FC = () => {
    return (
        <div className={st.wrapper}>

            <InputPage type='checkbox'/>
            <InputPage type='checkbox' name='Импорт'/>
            <ButtonPage name='Импорт'/>
            <ButtonPage name='Следующий шаг'/>


        </div>
    );
};





