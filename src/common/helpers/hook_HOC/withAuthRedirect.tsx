import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../../../features/authorization/a-2-bll/auth-selectors';
import {getAppStatus} from '../../../root/r2-bll/app-selector';
import {LOGIN} from '../../../root/routes/routesCalc';


function WithAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<any> = (props) => {
        const isAuth = useSelector(getIsAuth);
        const status = useSelector(getAppStatus);

        if (!isAuth && status !== 'loading') {
            return <Redirect to={LOGIN}/>
        }
        return <Component {...props as WCP} />;
    }
    return RedirectComponent
}

export default WithAuthRedirect;
