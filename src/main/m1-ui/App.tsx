import React from 'react';
import './App.css';
import {Calculator} from '../../test/calculator/Calculator';
import {Layout, Steps} from 'antd';

const {Header, Content, Footer, Sider} = Layout;
const {Step} = Steps;



const App = () => {

    return (
        <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
            <Sider>
                <Steps direction="vertical" current={1}>
                    <Step title="Finished" description="This is a description."/>
                    <Step title="In Progress" description="This is a description."/>
                    <Step title="Waiting" description="This is a description."/>
                </Steps>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
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
