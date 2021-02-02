import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authAPI} from '../m3-dal/api-service';

const initialState = {
    status: 'idle',
    error: null,
    isInitialized: false,
} as InitialStateType;


const setAppStatusAC = createAction<{ status: RequestStatusType }>('appActions/setAppStatus')
const setAppErrorAC = createAction<{ error: string | null }>('appActions/setAppError')
export const appActions = {
    setAppStatusAC,
    setAppErrorAC
}

const initializeApp = createAsyncThunk('app/initializeApp', async (param, thunkAPI) => {
    thunkAPI.dispatch(appActions.setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.authMe()
        console.log('auth Ok!')
        thunkAPI.dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
        // thunkAPI.dispatch(authActions.setIsLoggedIn({value: true}))  если будет логинизация....
    } catch (err) {
        thunkAPI.dispatch(appActions.setAppErrorAC(err))
        thunkAPI.dispatch(appActions.setAppStatusAC({status: 'failed'}))
    }
})
export const asyncActions = {
    initializeApp
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(initializeApp.fulfilled, (state, action) => {
                state.isInitialized = true
            })
            .addCase(appActions.setAppStatusAC, (state, action) => {
                state.status = action.payload.status
            })
            .addCase(appActions.setAppErrorAC, (state, action) => {
                state.error = action.payload.error
            })
    }
});
export const appReducer = slice.reducer;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    // true когда приложение проинициализировалось (проверили юзера, настройки получили и т.д.)
    isInitialized: boolean
}