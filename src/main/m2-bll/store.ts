import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appReducer';
import {loginReducer} from '../../test/t1-login/loginReducer';
import thunkMiddleware from 'redux-thunk';
import {pageOneReducer} from '../../test/t2-pages/p1-stepOne/pageOne-reducer';
import {pageTwoReducer} from '../../test/t2-pages/p2-stepTwo/pageTwo-reducer';
import {pageSixReducer} from '../../test/t2.1-pages/p6-transportMode/p6-reducer';
import {pageThreeReducer} from '../../test/t2-pages/p3-stepThree/pageThree-reducer';
import {pageFourReducer} from '../../test/t2.1-pages/p4-pallets/p4-reducer';


export const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    pageOne: pageOneReducer,
    pageTwo: pageTwoReducer,
    pageThree: pageThreeReducer,
    pageFour: pageFourReducer,
    pageSix: pageSixReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type AppRootStateType = ReturnType<typeof rootReducer>
