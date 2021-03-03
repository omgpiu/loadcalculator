import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonHTMLType, ButtonType} from 'antd/lib/button/button';
import Button from 'antd/es/button';
import {useDispatch} from 'react-redux';
import {setCurrentPageUrl} from '../../../root/r2-bll/appReducer';
import st from './buttonBlock.module.scss';
import WithCurrentPageUrl from '../withCurrentPageUrl';

const ButtonBlock: React.FC<PropsType> = ({
                                              nextPageLink, prevPageLink, htmlType,
                                              type, parentClickHandler,
                                              currentPageUrl, disabled
                                          }) => {
    const dispatch = useDispatch();
    const nextPage = () => {
        dispatch(setCurrentPageUrl({page: currentPageUrl}));
        parentClickHandler && parentClickHandler();
    };
    const prevPage = () => dispatch(setCurrentPageUrl({page: currentPageUrl}));

    return (
        <div className={st.buttonBlock}>
            {prevPageLink && <div style={{margin: '10px'}}>
               <Link to={prevPageLink}>
                  <Button type={type} onClick={prevPage} htmlType={htmlType}>Назад</Button>
               </Link>
            </div>}
            {nextPageLink && <div style={{margin: '10px'}}>
               <Link to={nextPageLink}>
                  <Button type={type} onClick={nextPage} htmlType={htmlType} disabled={disabled}>Вперед</Button>
               </Link>
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
    currentPageUrl: string
    disabled?: boolean
}

export default WithCurrentPageUrl(ButtonBlock)