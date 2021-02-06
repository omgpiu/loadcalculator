import React, {useState} from 'react';
import './App.css';
import {Calculator} from '../../test/calculator/Calculator';
import {Button, Layout, Steps} from 'antd';
import {useSelector} from 'react-redux';
import {getCurrentPageStep, getSteps} from '../m2-bll/app-selector';

const {Header, Content, Footer, Sider} = Layout;
const {Step} = Steps;

const App = () => {
    const steps = useSelector(getSteps);
    const currentPageStep = useSelector(getCurrentPageStep);
    const [current, setCurrent] = React.useState(0);


    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (


        <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <Steps current={currentPageStep} size={'small'}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title}
                                  description={item.description}/>
                        ))}
                    </Steps>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary">
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
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
