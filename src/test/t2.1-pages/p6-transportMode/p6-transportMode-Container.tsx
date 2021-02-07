import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../main/m2-bll/store';
import {placeToLoadType} from '../../t2-pages/p1-stepOne/pageOne';
import {TransportMode} from './p6-transportMode';
import {CustomerCargo} from '../../t2-pages/p3-stepThree/pageThree-reducer';
import {getTransportDataTC} from './p6-reducer';


export const TransportModeContainer = () => {
    const dispatch = useDispatch();
    useEffect( ()=> {
        dispatch(getTransportDataTC())
    },[dispatch])

    const customerCargo = [
        {
            id: '1',
            name: 'cargo 1',
            length: 5000,
            width: 300,
            height: 2400,
            mass: 10,
            quantity: 10,
        },
        {
            id: '2',
            name: 'cargo 2',
            length: 300,
            width: 400,
            height: 300,
            mass: 20,
            quantity: 20,
        },

    ] as CustomerCargo[]

    const autoData = [
        {car:'Портер',car_name:'Портер (2.65x1.5x1.6) 6м3',car_o:6,car_l:2.65,car_w:1.5,car_h:1.6,car_m:1, img:'https://lh3.googleusercontent.com/proxy/C_jPoW2Y7FKZBvg7KOFZYLJyK53jNqb5BqKTSbMOQDsLOedKRGoV956_t1HUI_bZCvsDREJBnOIfDh9eJGgnpiHJCWY2NgqkyhCrbUzWktd26w'},
        {car:'Газель',car_name:'Газель (3x1.95x1.6) 9м3',car_o:9,car_l:3,car_w:1.95,car_h:1.6,car_m:1.5, img:'https://m.azgaz.ru/assets/img/cars/next-bort.png'},
        {car:'Газель',car_name:'Газель (4x2x1.9) 15м3',car_o:15,car_l:4,car_w:2,car_h:1.9,car_m:1.5,img:'https://io.drivenn.ru/obozllkn7ulvu_1vmx5kt_h-1000/gaz-next-bortovoy-foto-4.png'},
        {car:'Маз, Камаз',car_name:'Маз, Камаз (6x2.4x2.35) 30м3',car_o:30,car_l:6,car_w:2.4,car_h:2.35,car_m:10, img:'https://маз.com/wp-content/uploads/2019/02/%D0%BC%D0%B0%D0%B7-6501%D0%B08plus.png'},
        {car:'Маз, Камаз',car_name:'Маз, Камаз (9x2.4x2.35) 45м3',car_o:45,car_l:9,car_w:2.4,car_h:2.35,car_m:10,img: 'https://lh3.googleusercontent.com/proxy/SEpfJ4yzY3DhODxA9dCPL04lBnbfQ004jgDZR8i7jmf2p-qf1yEp4ik9zwS48naxzPkoOxBWLcMIlx7sCw9bsclaQypTqNaXWGVXdYha34fTo8okW2gzrGBut84tsANaJg'},
        {car:'Фура',car_name:'Фура (13.6x2.45x2.65) 82м3',car_o:82,car_l:13.6,car_w:2.45,car_h:2.65,car_m:20,img:'https://lh3.googleusercontent.com/proxy/KMVG6JdbBJjezcWue_IDC9sKcfqNYJRTckckKtrUbHxmB33MBSc3SEHFiKPOEVZG9wRo2786quvcCdZAiyCPnAu1AiKUSGta5ET4idOpQXa_tL5LHnufo_pHAXW0XzQ'},
        {car:'Фура',car_name:'Фура (13.6x2.5x2.7) 90м3',car_o:90,car_l:13.6,car_w:2.5,car_h:2.7,car_m:20,img:'https://lh3.googleusercontent.com/proxy/KMVG6JdbBJjezcWue_IDC9sKcfqNYJRTckckKtrUbHxmB33MBSc3SEHFiKPOEVZG9wRo2786quvcCdZAiyCPnAu1AiKUSGta5ET4idOpQXa_tL5LHnufo_pHAXW0XzQ'},
        {car:'Фура сцепка',car_name:'Фура сцепка (7.2x2.45x3) 120м3',car_o:120,car_l:7.2,car_w:2.45,car_h:3,car_m:20,img: 'https://exp64.ru/sites/default/files/perevozki_fura_scepka_120_kubov_0.jpg'},
    ]

    const typeTransport = useSelector<AppRootStateType, placeToLoadType>(state => state.pageOne.loadPlace)
    const text_description = {
        autoModeText: 'Автоматический подбор транспорта с учетом характеристик вашего груза.',
        selectModeText: 'При ручном выборе, вы сами выбираете  марку, размер транспорта, ' +
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
                <TransportMode img={containerImg} text_description={text_description} onHandleClick={onHandleClick}/>
                :
                <TransportMode img={autoImg} text_description={text_description} onHandleClick={onHandleClick}/>
        }
    </>
}


// таблица п6 :

//    при ручном выборе:    - добавление удаление видов транспорта
//                          -виды транспортв сделать в селекте
//                          -сделать предварительный расчет груза и выводить его на экран на обеих страницах
// при автоматическом выборе транспорта сделать расчет и фильрацию подходящих машин и вывести их на UI

// выбранные варианты сетать в стейт отправлять на сервер
// продумать реализацию стейта