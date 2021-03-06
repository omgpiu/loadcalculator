import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Page404} from '../../features/page404/page404';
import PageOne from '../../features/calculator/p1-stepOne/p1_1-ui/pageOne';
import PageTwo from '../../features/calculator/p2-stepTwo/p2.1-ui/pageTwo';
import PageThree from '../../features/calculator/p3-stepThree/p3_1-ui/pageThree';
import Page4Pallets from '../../features/calculator/p4-pallets/p4-pallets';
import TransportModeContainer from '../../features/calculator/p6-transportMode/p6-transportMode-Container';
import {PageFive} from '../../features/calculator/p5-stepFive/PageFive';
import {Login} from '../../features/authorization/a-1-ui/login/login';
import {Forgot} from '../../features/authorization/a-1-ui/forgot/forgot';
import {Result} from '../../features/calculator/p7-result/result';

export  const routes =  {
    LOGIN: '/login',
    PAGE_ONE: 'packing'
}




export const FORGOT = '/forgot'
export const LOGIN = '/login';
export const PAGE_ONE = '/';
export const PAGE_TWO = '/packing';
export const PAGE_THREE = '/cargo';
export const PAGE_FOUR = '/pallets';
export const PAGE_FIVE = '/stuffing';
export const PAGE_SIX = '/modeTransport';
export const PAGE_SEVEN = '/results';
export const PAGE_NOT_FOUND = '*';

export const RoutesCalc = () => {

    return <>
        <Switch>

            <Route exact path={PAGE_ONE} render={() => <PageOne/>}/>
            <Route path={PAGE_TWO} render={() => <PageTwo/>}/>
            <Route path={PAGE_THREE} render={() => <PageThree/>}/>
            <Route path={PAGE_FOUR} render={() => <Page4Pallets/>}/>
            <Route path={PAGE_FIVE} render={() => <PageFive/>}/>
            <Route path={PAGE_SIX} render={() => <TransportModeContainer/>}/>
            <Route path={PAGE_SEVEN} render={() => <Result/>}/>
            <Route path={LOGIN} render={() => <Login/>}/>
            <Route path={FORGOT} render={() => <Forgot/>}/>

            <Route path={PAGE_NOT_FOUND}
                   render={() => <Page404/>}
            />
        </Switch>
    </>;
};
