import {createSlice} from '@reduxjs/toolkit';

const initialState = {};


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
});
export const appReducer = slice.reducer;
