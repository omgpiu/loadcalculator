import React from 'react';
import ButtonBlock from '../../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_SIX} from '../../../root/routes/routesCalc';
import WithAuthRedirect from '../../../common/helpers/hook_HOC/withAuthRedirect';


const Result = () => {

    return (
        <div> Result
        <ButtonBlock prevPageLink={PAGE_SIX} type={'default'}/>
        </div>
    )
}

export default WithAuthRedirect(Result)