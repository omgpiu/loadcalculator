import React, {useState} from 'react';
import './App.css';
import {Calculator} from '../../test/calculator/Calculator';
import {Layout, Steps} from 'antd';
import {useSelector} from 'react-redux';
import {getCurrentPageStep, getSteps} from '../m2-bll/app-selector';

const {Header, Content, Footer, Sider} = Layout;
const {Step} = Steps;

const App = () => {
    const steps = useSelector(getSteps);
    const currentPageStep = useSelector(getCurrentPageStep);


    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };


    return (


        <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background"
                        style={{paddingLeft: '10px', paddingRight: '15px', paddingTop: '10px'}}>
                    <Steps current={currentPageStep}  size={'small'}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title}
                                  description={item.description}/>
                        ))}
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
