import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appReducer';
import thunkMiddleware from 'redux-thunk';
import {pageOneReducer} from '../../features/p1-stepOne/p1_2-bll/pageOne-reducer';
import {pageTwoReducer} from '../../features/p2-stepTwo/pageTwo-reducer';
import {pageSixReducer} from '../../features/p6-transportMode/p6-reducer';
import {pageThreeReducer} from '../../features/p3-stepThree/p3_2-bll/pageThree-reducer';
import {pageFourReducer} from '../../features/p4-pallets/p4-reducer';
import {profileReducer} from './profile-reducer';
import {authReducer} from '../../features/authorization/a-2-bll/auth-Reducer';


export const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    auth: authReducer,
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
// {serializableCheck: false}
export type AppRootStateType = ReturnType<typeof rootReducer>
