import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Login} from '../t1-login/login';
import {Page5Pallets} from '../t2.1-pages/p5-pallets/p5-pallets';
import {PageOne} from '../t2-pages/p1-stepOne/pageOne';
import {PageTwo} from '../t2-pages/p2-stepTwo/pageTwo';


export const LOGIN = '/login';

export const PAGE_TWO = '/select';
export const PAGE_ONE = '/';
export const PALLETS = '/pallets';


export const Routes = () => {

    return <>
        <Switch>
            <Route path={LOGIN} render={Login}/>

            <Route exact path={PAGE_ONE} render={() => <PageOne/>}/>
            <Route path={PAGE_TWO} render={() => <PageTwo/>}/>
            <Route path={PALLETS} render={() => <Page5Pallets/>}/>


            <Route path={'*'}
                   render={() => <div> Sorry, Page NOT FOUND</div>}
            />
        </Switch>

    </>;
};
