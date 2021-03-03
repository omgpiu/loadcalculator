import React, {useEffect} from 'react';
import './App.css';
import {Layout} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderSteps} from './headerSteps';
import {LeftSideBar} from './leftSideBar';
import {authMe} from '../../features/authorization/a-2-bll/auth-Reducer';
import {getIsAuth} from '../../features/authorization/a-2-bll/auth-selectors';
import {Routes} from '../routes/routes';


const {Header, Content, Footer} = Layout;


const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuth);
    // const status = useSelector(getAppStatus);

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])


    // const loading: boolean = status === 'loading'
    // if (loading) return <Spin style={styleSpin} size='large'/>

    return (
        <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
            {isAuth && <LeftSideBar/>}
            <Layout className="site-layout">
                <Header className="site-layout-background"
                        style={{paddingLeft: '10px', paddingRight: '15px', paddingTop: '10px'}}>
                    {isAuth && <HeaderSteps/>}
                </Header>
                <Content style={{margin: '80px 80px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Routes/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
export default App;


