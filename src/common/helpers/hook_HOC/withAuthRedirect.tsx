import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../../../features/authorization/a-2-bll/auth-selectors';
import {getAppStatus} from '../../../root/r2-bll/app-selector';
import {LOGIN, PAGE_ONE} from '../../../root/routes/routesCalc';


function WithAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<any> = (props) => {
        const isAuth = useSelector(getIsAuth);
        const status = useSelector(getAppStatus);
        const currentPaymentId = sessionStorage.getItem('currentPaymentId')
        // if (!isAuth && status === 'succeeded') {
        if (!isAuth && status !== 'loading') {
            return <Redirect to={LOGIN}/>
            // проверка на наличие id текущего расчета в SS для того,
            // чтобы при отсутствии id расчет начинался с первой страницы,чтобы залогированный пользователь
            // не мог перейдя  по ссылке начинать не с первой страницы
        } else if (!currentPaymentId && status !== 'loading') {
            return <Redirect to={PAGE_ONE}/>
        } else return <Component {...props as WCP} />;
    }
    return RedirectComponent
}

export default WithAuthRedirect;
