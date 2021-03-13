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
import {getResultPaymentTC} from '../../features/calculator/p10-calc-bll/payment-thunk';
import {getCurrentPaymentId} from '../../features/calculator/p11-calc-dal/paymentAPI';


const {Footer} = Layout;


const App = () => {
    const dispatch = useDispatch();

    const status = useSelector(getAppStatus);
    const isAuth = useSelector(getIsAuth);
    useEffect(() => {
        dispatch(authMe());
        //чтобы засетать актуальный обьект расчета в стейт, если уже начать расчет( в случае перезагрузки приложения,
        // во время ввода данных стр 2-6)
        const currentPaymentId = getCurrentPaymentId();
        if (currentPaymentId) dispatch(getResultPaymentTC());
    }, [dispatch]);


    if (status === 'loading') return <Spinner/>;
    return (
        <>
            <Layout style={{minHeight: '100vh', backgroundColor: 'white'}}>
                {isAuth && <LeftSideBar/>}
                <Layout>
                    {isAuth && <CalcHeaderSteps/>}
                    <Content>
                        <div>
                            <RoutesCalc/>
                        </div>
                    </Content>
                    {isAuth && <Footer style={{textAlign: 'center'}}>Created by @omgpiu && @Kirill_SPb</Footer>}
                </Layout>
            </Layout>
        </>
    );
};
export default App;


