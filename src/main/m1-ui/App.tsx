import React, {useState} from 'react';
import './App.css';
import {Calculator} from '../../test/calculator/Calculator';
import {Layout, Steps} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPageStep, getSteps} from '../m2-bll/app-selector';
import {setCurrentStep} from '../m2-bll/appReducer';
import {PAGE_FIVE, PAGE_ONE, PAGE_THREE, PAGE_TWO} from '../../test/routes/routes';

const {Header, Content, Footer, Sider} = Layout;
const {Step} = Steps;

const App = () => {
    const dispatch = useDispatch();
    const steps = useSelector(getSteps);
    const currentPageStep = useSelector(getCurrentPageStep);

    const onChangeHandler = (currentPageStep: any) => {
        debugger
        // switch (currentPageStep) {
        //
        //     case  0: {
        //
        //         dispatch(setCurrentStep({page: PAGE_ONE}));
        //         console.log(currentPageStep);
        //         break;
        //     }
        //     case  1: {
        //         dispatch(setCurrentStep({page: PAGE_TWO}));
        //         console.log(currentPageStep);
        //         break;
        //     }
        //     case  2: {
        //         dispatch(setCurrentStep({page: PAGE_THREE}));
        //         console.log(currentPageStep);
        //         break;
        //     }
        //     case  3: {
        //         dispatch(setCurrentStep({page: PAGE_FIVE}));
        //         console.log(currentPageStep);
        //         break;
        //     }
        // }
        // debugger
        dispatch(setCurrentStep({page: currentPageStep}));
        // console.log(currentPageStep);
    };

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
                    <Steps current={+currentPageStep} size={'small'} onChange={onChangeHandler}>
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
