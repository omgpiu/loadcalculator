import React from 'react';
import st from './pageOne.module.css';
import {ButtonPage} from '../../t5-common/c-1-btn/ButtonPage';
import {InputPage} from '../../t5-common/с-2-inp/InputPage';
import container from '../../../assets/images/container.jpg';
import truck from '../../../assets/images/truck.jpg';


export const PageOne: React.FC = () => {
    return (
        <div className={st.wrapper}>
            <div className={st.main}>


                <div>
                    <img src={container} alt="container-logo"/>
                    <InputPage type='checkbox'/>
                </div>
                <div>
                    <img src={truck} alt="truck-logo"/>
                    <InputPage type='checkbox' name='Импорт'/>
                </div>

            </div>

            <div className={st.buttonBox}>
                <ButtonPage name='Импорт'/>
                <ButtonPage name='Следующий шаг'/>

            </div>


        </div>
    );
};





