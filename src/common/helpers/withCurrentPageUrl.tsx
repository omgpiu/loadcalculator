import React, {useEffect} from 'react';
import {setCurrentPageUrl} from '../../root/r2-bll/appReducer';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function WithCurrentPageUrl<WCP>(Component: React.ComponentType<WCP>) {

    const NewComp = (props: any) => {
        const dispatch = useDispatch();
        const history = useHistory();
        const path = history.location.pathname

        useEffect(() => {
            dispatch(setCurrentPageUrl({page: path}))
        }, [dispatch, path])
        return <Component {...props} currentPageUrl={path}/>;
    }
    return NewComp
}

export default WithCurrentPageUrl;
