import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    error: ''
};






const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {}
});
export const loginReducer = slice.reducer;
