import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Login} from '../t1-login/login';
import {PageTwo} from '../t2-pages/p2-stepTwo/pageTwo';
import {PageThree} from '../t2-pages/p3-stepThree/pageThree';
import {Page404} from '../t5-common/page404/page404';

import {PageOne} from '../t2-pages/p1-stepOne/pageOne';
import {PageSeven} from '../t2-pages/p7-pageSeven/PageSeven';
import {Page4Pallets} from '../t2.1-pages/p4-pallets/p4-pallets';
import {Stuffing} from '../t2.1-pages/p5-stuffing/p5-stuffing';
import {TransportModeContainer} from '../t2.1-pages/p6-transportMode/p6-transportMode-Container';


export const LOGIN = '/login';
export const PAGE_ONE = '/';
export const PAGE_TWO = '/packing';
export const PAGE_THREE = '/cargo';
export const PAGE_FOUR = '/pallets';
export const PAGE_FIVE = '/stuffing';
export const PAGE_SIX = '/modeTransport';
export const PAGE_SEVEN = '/results'
export const PAGE_NOT_FOUND = '*'

export const Routes = () => {

    return <>
        <Switch>
            <Route path={LOGIN} render={Login}/>
            <Route exact path={PAGE_ONE} render={() => <PageOne/>}/>
            <Route path={PAGE_TWO} render={() => <PageTwo/>}/>
            <Route path={PAGE_THREE} render={() => <PageThree/>}/>
            <Route path={PAGE_FOUR} render={() => <Page4Pallets/>}/>
            <Route path={PAGE_FIVE} render={() =><Stuffing/> }/>
            <Route path={PAGE_SIX} render={() => <TransportModeContainer/>}/>
            <Route path={PAGE_SEVEN} render={() => <PageSeven/>}/>

            <Route path={PAGE_NOT_FOUND}
                   render={() => <Page404/>}
            />
        </Switch>
    </>;
};
