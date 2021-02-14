import React from 'react';

import {LOGIN} from '../routes/routes';
import {getIsAuth} from '../t1-login/login-selectors';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';





type DispatchPropsType={}

function WithAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    const RedirectComponent:React.FC<DispatchPropsType> = (props) => {
        const isAuth = useSelector(getIsAuth);

        if (!isAuth) return <Redirect to={LOGIN}/>;

        return <Component {...props as WCP} />;
    }
    return RedirectComponent
}

export default WithAuthRedirect;
