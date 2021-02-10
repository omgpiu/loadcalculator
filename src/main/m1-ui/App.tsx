import React, {useEffect, useState} from 'react';
import './App.css';
import {Calculator} from '../../test/calculator/Calculator';
import {Layout, Steps} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPageStep, getSteps} from '../m2-bll/app-selector';
import {useLocalStorage} from '../../test/helpers/useLocalStorage';
import {setCurrentStep} from '../m2-bll/appReducer';
import {useHistory} from 'react-router-dom';
import {PAGE_FIVE, PAGE_FOUR, PAGE_ONE, PAGE_SEVEN, PAGE_SIX, PAGE_THREE, PAGE_TWO} from '../../test/routes/routes';
import {withPallet} from '../../test/t2-pages/p3-stepThree/pageThree-selector';

const {Header, Content, Footer, Sider} = Layout;
const {Step} = Steps;

const App = () => {
    const [storedPage, setPage] = useLocalStorage('currentStep', 0)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(setCurrentStep({page: storedPage}))
    }, [storedPage])

    const stepChange = (value: number) => {
        setPage(value)
        switch (value) {
            case 0:
                return history.push(PAGE_ONE)
            case 1:
                return history.push(PAGE_TWO)
            case 2:
                return history.push(PAGE_THREE)
            case 3:
                return history.push(PAGE_FOUR)
            case 4:
                return history.push(PAGE_FIVE)
            case 5:
                return history.push(PAGE_SIX)
            case 6:
                return history.push(PAGE_SEVEN)
        }
    }


    const steps = useSelector(getSteps);
    const currentPageStep = useSelector(getCurrentPageStep);
    const isWithPallet = useSelector(withPallet);

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };


    return (

        <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}></Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background"
                        style={{paddingLeft: '10px', paddingRight: '15px', paddingTop: '10px'}}>
                    <Steps current={currentPageStep} size={'small'} type={'navigation'}
                           onChange={stepChange}>
                        {steps.map((item, index) => {
                                const disabledP4_pallet = item.dataStep === 3 && isWithPallet === 'no_pallets';
                                return <Step key={item.title} title={item.title}
                                             description={item.description}
                                             disabled={currentPageStep < item.dataStep  || disabledP4_pallet}/>
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
