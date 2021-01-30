import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appReducer';
import {loginReducer} from '../../test/t1-login/loginReducer';
import thunkMiddleware from 'redux-thunk';
import {pageOneReducer} from '../../test/t2-pages/p1-stepOne/pageOne-reducer';
import {pageTwoReducer} from '../../test/t2-pages/p2-stepTwo/pageTwo-reducer';


export const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    pageOne: pageOneReducer,
    pageTwo: pageTwoReducer
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type AppRootStateType = ReturnType<typeof rootReducer>
