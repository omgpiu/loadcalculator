import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appReducer';
import thunkMiddleware from 'redux-thunk';
import {pageSixReducer} from '../../features/calculator/p6-transportMode/p6-reducer';
import {profileReducer} from './profile-reducer';
import {authReducer} from '../../features/authorization/a-2-bll/auth-Reducer';
import {paymentReducer} from '../../features/calculator/payment/p2-bll/payment-reducer';


export const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    auth: authReducer,
    payment:paymentReducer,
    pageSix: pageSixReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});
// {serializableCheck: false}
export type AppRootStateType = ReturnType<typeof rootReducer>
