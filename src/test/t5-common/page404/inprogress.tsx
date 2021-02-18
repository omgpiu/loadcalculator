import {Result} from 'antd';
import React from 'react';
import {PAGE_SIX} from '../../routes/routes';
import ButtonBlock from '../buttonBlock/buttonBlock';

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

