import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TransportMode} from './p6-transportMode';
import {getTransportDataTC} from './p6-reducer';
import {getTransports} from './p6-selector';
import {getTotalCargoValue} from '../p2-stepTwo/pageTwo-selector';
import {getLoadPlace} from '../p1-stepOne/p1_2-bll/pageOne-selector';
import ButtonBlock from '../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE} from '../../root/routes/routes';
import WithAuthRedirect from '../../common/helpers/withAuthRedirect';


const TransportModeContainer = React.memo(() => {
    const dispatch = useDispatch();
    const transports = useSelector(getTransports)
    const totalCargoValue = useSelector(getTotalCargoValue)
    const typeTransport = useSelector(getLoadPlace)
    const [showBtn, setShowBtn] = useState(true)
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
                               setShowBtn={setShowBtn}
                               transports={transports}
                               totalCargoValue={totalCargoValue}/>
                :
                <TransportMode img={autoImg}
                               text_description={text_description}
                               setShowBtn={setShowBtn}
                               transports={transports}
                               totalCargoValue={totalCargoValue}/>
        }
        {
            showBtn && <ButtonBlock type={'default'} prevPageLink={PAGE_FIVE}/>
        }
    </>
})

export default WithAuthRedirect(TransportModeContainer)
