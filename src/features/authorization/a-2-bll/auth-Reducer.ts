import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appActions} from '../../../root/r2-bll/appReducer';
import {profileActions,} from '../../../root/r2-bll/profile-reducer';
import {authAPI, LoginParamsType, RegisterType} from '../a-3-dal/authAPI';
import {handleAsyncServerNetworkError} from '../../../common/utils/error-utils';


const initialState = {
    error: '',
    isAuth: true,
    registerSuccess: false,
    recoveryPassSuccess: false,
    newPassSuccess: false,
    captchaUrl: ''
};

export const authMe = createAsyncThunk('app/authMe', async (param, {dispatch, rejectWithValue}) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}));
    try {
        await authAPI.authMe();
        dispatch(authActions.setIsAuth({isAuth: true}))
        dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
        return
    } catch (err) {
        dispatch(authActions.setIsAuth({isAuth: false}))
        return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
    }
});

export const login = createAsyncThunk('auth/login', async (param: LoginParamsType, {
    dispatch, rejectWithValue
}) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}));
    try {
        const res = await authAPI.login(param);
        dispatch(authActions.setIsAuth({isAuth: true}))
        dispatch(profileActions.setProfileAC({profile: res}))
        dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
        return
    } catch (err) {
        return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
    }
});
export const logout = createAsyncThunk<undefined, undefined,
    { rejectValue: { error: string, fieldsErrors?: Array<any> } }>('auth/logout', async (param, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(appActions.setAppStatusAC({status: 'loading'}));
    try {
        await authAPI.logout();
        dispatch(authActions.setIsAuth({isAuth: false}))
        dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
        return;
    } catch (err) {
        return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
    }
});
export const registerTC = createAsyncThunk('auth/register',
    async (param: { registerObj: RegisterType }, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setAppStatusAC({status: 'loading'}));
        try {
            await authAPI.register(param.registerObj);
            dispatch(authActions.setRegisterSuccess({registerSuccess: true}));
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return;
        } catch (err) {
            dispatch(authActions.setAuthError({error: err.response.data.error}))
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err)
        }
    });


const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<{ error: string }>) {
            state.error = action.payload.error;
        },
        setIsAuth(state, action: PayloadAction<{ isAuth: boolean }>) {
            state.isAuth = action.payload.isAuth;
        },
        setAuthError(state, action: PayloadAction<{ error: string }>) {
            state.error = action.payload.error;
        },
        setRegisterSuccess(state, action: PayloadAction<{ registerSuccess: boolean }>) {
            state.registerSuccess = action.payload.registerSuccess;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state) => {
                state.isAuth = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuth = false;
            })
    }
});

export const authActions = slice.actions;
export const authReducer = slice.reducer;

