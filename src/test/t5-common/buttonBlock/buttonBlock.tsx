import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonHTMLType, ButtonType} from 'antd/lib/button/button';
import Button from 'antd/es/button';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPageStep} from '../../../main/m2-bll/app-selector';
import {setCurrentStep} from '../../../main/m2-bll/appReducer';
import st from './buttonBlock.module.scss';
import {useLocalStorage} from '../../helpers/useLocalStorage';

export const ButtonBlock: React.FC<PropsType> = ({
                                                     nextPageLink, prevPageLink, htmlType,
                                                     type, parentClickHandler, hideP4 = false,
                                                     stopPereskokStranicP3 = true,
                                                     stopPereskokStranicP5 = true
                                                 }) => {

    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPageStep);

    const [storedCurrentPage, setCurrentPage] = useLocalStorage('currentStep', currentPage)
    // hideP4 с true  если выбран режим без паллетов, соответственно пропускаем страницу с паллетами
    const nextPage = () => {
        dispatch(setCurrentStep({page: stopPereskokStranicP5 && hideP4 ? currentPage + 2 : currentPage + 1}));
        parentClickHandler && parentClickHandler();
        setCurrentPage(stopPereskokStranicP5 && hideP4 ? storedCurrentPage + 2 : storedCurrentPage + 1)
    };
    const prevPage = () => {
        setCurrentPage(stopPereskokStranicP3 && hideP4 ? storedCurrentPage - 2 : storedCurrentPage - 1)
        dispatch(setCurrentStep({page: stopPereskokStranicP3 && hideP4 ? currentPage - 2 : currentPage - 1}));

    };
    return (

        <div className={st.buttonBlock}>
            {prevPageLink && <div style={{margin: '10px'}}>
                {(nextPageLink === 'PAGE_TWO') ||
                <Link to={prevPageLink}>
                   <Button type={type} onClick={prevPage} htmlType={htmlType}>Назад</Button>
                </Link>
                }
            </div>}
            {nextPageLink && <div style={{margin: '10px'}}>
                {(prevPageLink === 'PAGE_SIX') ||
                <Link to={nextPageLink}>
                   <Button type={type} onClick={nextPage} htmlType={htmlType}>Вперед</Button>
                </Link>
                }
            </div>}
        </div>
    )
}
type PropsType = {
    nextPageLink?: string
    prevPageLink?: string
    htmlType?: ButtonHTMLType
    type?: ButtonType
    parentClickHandler?: (values?: any) => void
    hideP4?: boolean
    stopPereskokStranicP3?: boolean
    stopPereskokStranicP5?: boolean
}