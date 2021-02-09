import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TransportMode} from './p6-transportMode';
import {getTransportDataTC} from './p6-reducer';
import {getTransports} from './p6-selector';
import {getTotalCargoValue} from '../../t2-pages/p2-stepTwo/pageTwo-selector';
import {getLoadPlace} from '../../t2-pages/p1-stepOne/pageOne-selector';


export const TransportModeContainer = React.memo(() => {
    const dispatch = useDispatch();
    const transports = useSelector(getTransports)
    const totalCargoValue = useSelector(getTotalCargoValue)
    const typeTransport = useSelector(getLoadPlace)
    useEffect(() => {
        if (transports.length === 0) {
            dispatch(getTransportDataTC())
        }
    }, [dispatch, transports.length])


    const text_description = {
        autoModeText: 'Автоматический подбор транспорта с учетом характеристик вашего груза.',
        selectModeText: 'При ручном выборе, вы сами выбираете  марку, размер транспорта, ' +
            'доступных с учетом характеристик вашего груза и вместимости.'
    }
    const containerImg = 'https://star-shine-shipping.com/images/2019/02/11/20ft-container.jpg'
    const autoImg = 'https://logist.kiev.ua/wp-content/uploads/2018/09/gruz22.png'

    return <>
        {
            (typeTransport === 'Контейнер')
                ?
                <TransportMode img={containerImg}
                               text_description={text_description}

                               transports={transports}
                               totalCargoValue={totalCargoValue}/>
                :
                <TransportMode img={autoImg}
                               text_description={text_description}

                               transports={transports}
                               totalCargoValue={totalCargoValue}/>
        }
    </>
})


// таблица п6 :

//    при ручном выборе:    - добавление удаление видов транспорта
//                          -виды транспортв сделать в селекте
//                          -сделать предварительный расчет груза и выводить его на экран на обеих страницах
// при автоматическом выборе транспорта сделать расчет и фильрацию подходящих машин и вывести их на UI

// выбранные варианты сетать в стейт отправлять на сервер
// продумать реализацию стейта