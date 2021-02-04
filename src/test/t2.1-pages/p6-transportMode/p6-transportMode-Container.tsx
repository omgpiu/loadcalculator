import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../main/m2-bll/store';
import {placeToLoadType} from '../../t2-pages/p1-stepOne/pageOne';
import {TransportMode} from './p6-transportMode';


export const TransportModeContainer = () => {

    const typeTransport = useSelector<AppRootStateType, placeToLoadType>(state => state.pageOne.loadPlace)


    const text_description = {
        autoModeText: 'Автоматический подбор транспорта и его количества с учетом характеристик вашего груза.',
        selectModeText: 'При ручном выборе, вы сами выбираете количество, виды, размер транспорта, ' +
            'доступных с учетом характеристик вашего груза.'
    }
    const containerImg = 'https://star-shine-shipping.com/images/2019/02/11/20ft-container.jpg'
    const autoImg = 'https://logist.kiev.ua/wp-content/uploads/2018/09/gruz22.png'
    const onHandleClick = () => {
        console.log('продолжить')
    }
    return <>
        {
            (typeTransport === 'Контейнер')
                ?
                <TransportMode img={containerImg}  text_description={text_description} onHandleClick={onHandleClick}/>
                :
                <TransportMode img={autoImg}  text_description={text_description} onHandleClick={onHandleClick}/>
        }
    </>
}