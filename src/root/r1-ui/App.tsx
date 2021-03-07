import React, {useEffect} from 'react';
import './App.css';
import {Layout} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {LeftSideBar} from './leftSideBar';
import {authMe} from '../../features/authorization/a-2-bll/auth-Reducer';
import {getAppStatus} from '../r2-bll/app-selector';
import {getIsAuth} from '../../features/authorization/a-2-bll/auth-selectors';
import {Spinner} from '../../common/utils/spiner';
import {CalcHeaderSteps} from './headerSteps';
import {Content} from 'antd/lib/layout/layout';
import {RoutesCalc} from '../routes/routesCalc';


const {Footer} = Layout;


const App = () => {
    const dispatch = useDispatch();

    const status = useSelector(getAppStatus);
    const isAuth = useSelector(getIsAuth)
    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

// полностью блочит приложение, но нет прыжков
    if (status === 'loading') return <Spinner/>
    return (
        <>
            <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
                {isAuth && <LeftSideBar/>}
                <Layout className="site-layout">
                    {isAuth && <CalcHeaderSteps/>}
                    <Content >
                        <div className="site-layout-background">
                            <RoutesCalc/>
                        </div>
                    </Content>
                    {isAuth && <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>}
                </Layout>
            </Layout>
        </>
    )
}
export default App;


