import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

//thunk's


const slice = createSlice({
        name: 'pageSeven',
        initialState,
        reducers: {},
    })
;
export const pageSevenReducer = slice.reducer;

export type PageSevenInitialState = typeof initialState;
