import React from 'react';
import {Steps} from 'antd';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCurrentPageStep, getSteps} from '../r2-bll/app-selector';
import {PAGE_FIVE, PAGE_FOUR, PAGE_ONE, PAGE_SEVEN, PAGE_SIX, PAGE_THREE, PAGE_TWO} from '../routes/routesCalc';
import {withPallet} from '../../features/calculator/payment/p2-bll/payment-selectors';
import {Header} from 'antd/lib/layout/layout';

export const CalcHeaderSteps: React.FC = () => {
    const {Step} = Steps;
    const history = useHistory();
    const steps = useSelector(getSteps);
    const currentPageStep = useSelector(getCurrentPageStep);
    const isWithPallet = useSelector(withPallet);
    const stepChange = (value: number) => {
        debugger
        switch (value) {
            case 0:
                return history.push(PAGE_ONE);
            case 1:
                return history.push(PAGE_TWO);
            case 2:
                return history.push(PAGE_THREE);
            case 3:
                return history.push(PAGE_FOUR);
            case 4:
                return history.push(PAGE_FIVE);
            case 5:
                return history.push(PAGE_SIX);
            case 6:
                return history.push(PAGE_SEVEN);
        }
    };
    return (
        <Header className="site-layout-background"
                style={{paddingLeft: '10px', paddingRight: '15px', paddingTop: '10px'}}>
            <Steps progressDot  current={currentPageStep} size={'small'}
                   onChange={stepChange}>
                {steps.map((item) => {
                        const disabledP4_pallet = item.dataStep === 3 && isWithPallet === 'no_pallets';
                        return <Step key={item.title} description={item.description}
                                     disabled={currentPageStep < item.dataStep || disabledP4_pallet}/>;
                    }
                )}
            </Steps>
        </Header>
    )
}