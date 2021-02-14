import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI} from '../../main/m3-dal/api-service';
import {appActions} from '../../main/m2-bll/appReducer';

const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    error: ''
};


export const login = createAsyncThunk<undefined, LoginParamsType,
    { rejectValue: { errors: Array<string>, fieldsErrors?: Array<any> } }>('auth/login', async (param, thunkAPI) => {
    thunkAPI.dispatch(appActions.setAppStatusAC({status: 'loading'}));
    try {
        await authAPI.login(param);
        thunkAPI.dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
        return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.messages[0]);
    }
});
export const logout = createAsyncThunk('auth/logout', async (param, thunkAPI) => {
    thunkAPI.dispatch(appActions.setAppStatusAC({status: 'loading'}));
    try {
        await authAPI.logout();
        thunkAPI.dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
        return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.messages[0]);
    }
});


const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
        //     state.isAuth = action.payload.value;
        // },
        setError(state, action: PayloadAction<{ error: string }>) {
            state.error = action.payload.error;
        }

    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state) => {
                debugger
                state.isAuth = true;
            })
            .addCase(logout.fulfilled, (state) => {
                debugger
                state.isAuth = false;
            });
    }
});

export const {setError} = slice.actions;
export const loginReducer = slice.reducer;
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
