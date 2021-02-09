import React from 'react';
import {Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPageStep} from '../../main/m2-bll/app-selector';
import {setCurrentStep} from '../../main/m2-bll/appReducer';
import {ButtonHTMLType, ButtonType} from 'antd/lib/button/button';


type PropsType = {
    htmlType?: ButtonHTMLType
    type?: ButtonType
    step: 'forward' | 'backward'
    page?: string
}


export const ReusableNavButton: React.FC<PropsType> = ({type = 'default', htmlType = 'button', step, page}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPageStep);
    const nextPage = () => {
        dispatch(setCurrentStep({page: currentPage + 1}));
    };
    const prevPage = () => {
        dispatch(setCurrentStep({page: currentPage - 1}));
    };
    const FORWARD = 'forward';

    return (<>
            {step === FORWARD ?
                <Button type={type} onClick={nextPage} htmlType={htmlType}>Вперед</Button> :
                <Button type={type} onClick={prevPage} htmlType={htmlType}>Назад</Button>}
        </>


    )
        ;
};
