import React from 'react';
import ButtonBlock from '../../t5-common/buttonBlock/buttonBlock';
import {PAGE_FOUR, PAGE_SIX, PAGE_THREE} from '../../routes/routes';
import {NO_PALLETS} from '../../t2-pages/p3-stepThree/pageThree-reducer';
import {useSelector} from 'react-redux';
import {withPallet} from '../../t2-pages/p3-stepThree/pageThree-selector';
import {getPackagingCargoForCounting} from '../../t2-pages/p2-stepTwo/pageTwo-selector';

export const Stuffing = () => {
    const isWithPallet = useSelector(withPallet);
    const countedCargo = useSelector(getPackagingCargoForCounting)
    const onClickHandler = () => {

    }
    return (<>
            {
                countedCargo.map(e => {
                    return <div key={e.id}>
                        {e.amount}
                        <br/>
                        {e.title}
                    </div>
                })
            }
            Тут происходит выбор возможной укладки товара .
            <ButtonBlock type={'default'} nextPageLink={PAGE_SIX}
                         prevPageLink={isWithPallet === NO_PALLETS ? PAGE_THREE : PAGE_FOUR}
                         parentClickHandler={onClickHandler}/>
        </>
    )
}
