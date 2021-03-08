import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {TransportMode} from './p6-transportMode';
import {getTotalCargoValue} from '../p2-stepTwo/p2.2-bll/pageTwo-selector';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_FIVE} from '../../../root/routes/routesCalc';
import {getLoadPlace} from '../p10-calc-bll/payment-selectors';
import {autoData, containerData} from '../../../common/staticData';
import WithAuthRedirect from '../../../common/helpers/hook_HOC/withAuthRedirect';


const TransportModeContainer = React.memo(() => {

    const totalCargoValue = useSelector(getTotalCargoValue)
    const typeTransport = useSelector(getLoadPlace)
    const [showBtn, setShowBtn] = useState(true)


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
                               transports={containerData}
                               totalCargoValue={totalCargoValue}/>
                :
                <TransportMode img={autoImg}
                               text_description={text_description}
                               setShowBtn={setShowBtn}
                               transports={autoData}
                               totalCargoValue={totalCargoValue}/>
        }
        {
            showBtn && <ButtonBlock type={'default'} prevPageLink={PAGE_FIVE}/>
        }
    </>
})

export default WithAuthRedirect(TransportModeContainer)
