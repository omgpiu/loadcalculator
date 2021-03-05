import {Result} from 'antd';
import React from 'react';
import ButtonBlock from '../../common/helpers/buttonBlock/buttonBlock';
import {PAGE_SIX} from '../../root/routes/routesCalc';


export const InProgress: React.FC = () => {
    return (<>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, we are working with this page."

            />
            <ButtonBlock type={'default'} prevPageLink={PAGE_SIX}
            />
        </>

    );
};

