import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Login} from '../t1-login/login';
import {Page5Pallets} from '../t2.1-pages/p5-pallets/p5-pallets';

import {PageTwo} from '../t2-pages/p2-stepTwo/pageTwo';
import {PageThree} from '../t2-pages/p3-stepThree/pageThree';
import {Page404} from '../t5-common/page404/page404';
import {TransportModeContainer} from '../t2.1-pages/p6-transportMode/p6-transportMode-Container';
import {PageOne} from '../t2-pages/p1-stepOne/pageOne';


export const LOGIN = '/login';
export const PAGE_ONE = '/';
export const PAGE_TWO = '/packing';
export const PAGE_THREE = '/cargo';
export const PAGE_FIVE = '/pallets';
export const PAGE_SIX = '/modeTransport';


export const Routes = () => {

    return <>
        <Switch>
            <Route path={LOGIN} render={Login}/>

            <Route exact path={PAGE_ONE} component={() => <PageOne/>}/>
            <Route path={PAGE_TWO} render={() => <PageTwo/>}/>
            <Route path={PAGE_THREE} render={() => <PageThree/>}/>
            <Route path={PAGE_FIVE} render={() => <Page5Pallets/>}/>
            <Route path={PAGE_SIX} render={() => <TransportModeContainer/>}/>


            <Route path={'*'}
                   render={() => <Page404/>}
            />
        </Switch>

    </>;
};
