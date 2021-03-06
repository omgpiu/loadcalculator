import React, {useState} from 'react';
import './App.css';
import {Calculator} from '../../test/calculator/Calculator';
import {Layout, Menu, Steps} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPageStep, getSteps} from '../m2-bll/app-selector';
import {Link, useHistory} from 'react-router-dom';
import {
    LOGIN,
    PAGE_FIVE,
    PAGE_FOUR,
    PAGE_ONE,
    PAGE_SEVEN,
    PAGE_SIX,
    PAGE_THREE,
    PAGE_TWO
} from '../../test/routes/routes';
import {withPallet} from '../../test/t2-pages/p3-stepThree/pageThree-selector';
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {logout} from '../../test/t1-login/loginReducer';

const {Header, Content, Footer, Sider} = Layout;
const {Step} = Steps;

const App = () => {
    const dispatch = useDispatch();
    const steps = useSelector(getSteps);
    const currentPageStep = useSelector(getCurrentPageStep);
    const isWithPallet = useSelector(withPallet);
    const history = useHistory();


    const stepChange = (value: number) => {
        switch (value) {
            case 0:
                return history.push(PAGE_ONE);
            case 1:
                return history.push(PAGE_TWO);
            case 2:
                return history.push(PAGE_THREE);
            case 3:
                return history.push(PAGE_FOUR);
            case 4:
                return history.push(PAGE_FIVE);
            case 5:
                return history.push(PAGE_SIX);
            case 6:
                return history.push(PAGE_SEVEN);
        }
    };



    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const logoutOnClickHandler = () => {
        dispatch(logout());
    };


    return (

        <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        <Link to={LOGIN}>Login</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<LogoutOutlined/>} onClick={logoutOnClickHandler}>
                        Logout
                    </Menu.Item>


                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background"
                        style={{paddingLeft: '10px', paddingRight: '15px', paddingTop: '10px'}}>
                    <Steps current={currentPageStep} size={'small'} type={'navigation'}
                           onChange={stepChange}>
                        {steps.map((item) => {
                                const disabledP4_pallet = item.dataStep === 3 && isWithPallet === 'no_pallets';
                                return <Step key={item.title} title={item.title}
                                             description={item.description}
                                             disabled={currentPageStep < item.dataStep || disabledP4_pallet}/>;
                            }
                        )}
                    </Steps>
                </Header>
                <Content style={{margin: '80px 80px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Calculator/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
