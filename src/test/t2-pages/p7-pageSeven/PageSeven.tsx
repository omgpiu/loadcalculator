import React from 'react';
import {ButtonBlock} from '../../t5-common/buttonBlock/buttonBlock';
import {PAGE_SIX} from '../../routes/routes';


export const PageSeven: React.FC = () => {
    const onClickHandler = () => {
        alert('Переход на результат')
    }
    return <div>

        Тут происходит выбор возможной укладки товара .
        <ButtonBlock prevPageLink={PAGE_SIX}
                     nextPageLink={'Result Page'}
                     parentClickHandler={onClickHandler}
        />
    </div>
}