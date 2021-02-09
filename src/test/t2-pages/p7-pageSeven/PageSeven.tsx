import React from 'react';
import {ButtonBlock} from '../../t5-common/buttonBlock/buttonBlock';
import {PAGE_SIX} from '../../routes/routes';
import {useSelector} from 'react-redux';
import {getPackagingCargoForCounting} from '../p2-stepTwo/pageTwo-selector';


export const PageSeven: React.FC = () => {

    const countedCargo = useSelector(getPackagingCargoForCounting)


    const onClickHandler = () => {
        alert('Переход на результат')
    }
    return <div>
        {
            countedCargo.map(e=>{
                return <div>
                    {e.amount}
                    <br/>
                    {e.title}
                </div>
            })
        }
        Тут происходит выбор возможной укладки товара .
        <ButtonBlock prevPageLink={PAGE_SIX}
                     nextPageLink={'Result Page'}
                     parentClickHandler={onClickHandler}
        />
    </div>
}