import React from 'react';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_SIX} from '../../../root/routes/routesCalc';


export const Result = () => {

    return (
        <div> Result
        <ButtonBlock prevPageLink={PAGE_SIX} type={'default'}/>
        </div>
    )
}