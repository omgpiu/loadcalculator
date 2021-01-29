import {createSlice} from '@reduxjs/toolkit';

const initialState = {};


const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {}
});
export const loginReducer = slice.reducer;
