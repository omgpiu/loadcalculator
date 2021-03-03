import React from 'react';

import {LOGIN} from '../../root/routes/routes';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../../features/authorization/a-2-bll/auth-selectors';





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
