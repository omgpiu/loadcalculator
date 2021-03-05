import {CalcHeaderSteps} from '../../root/r1-ui/headerSteps';
import {RoutesCalc} from '../../root/routes/routesCalc';
import React from 'react';
import {Content} from 'antd/lib/layout/layout';


export const CalcContent = () => {
    return <>
        <CalcHeaderSteps/>
        <Content style={{margin: '80px 80px'}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                <RoutesCalc/>
            </div>
        </Content>
    </>
}