import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appReducer';
import {loginReducer} from '../../test/t1-login/loginReducer';
import thunkMiddleware from 'redux-thunk';


export const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type AppRootStateType = ReturnType<typeof rootReducer>
