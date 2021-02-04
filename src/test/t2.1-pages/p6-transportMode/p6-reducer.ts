import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {}

//thunk's
//   createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >
export const getPalletsTC = createAsyncThunk('pageSix/transportMode',
    // ... ( param,thunkAPI и внутри => dispatch,rejectWithValue, getState() )
    async (param, {dispatch, rejectWithValue}) => {
        try {

        } catch (err) {
        }
    })
export const setPalletParameters = createAsyncThunk('pageSix/transportMode',
    async (param, thunkAPI) => {
        try {


        } catch (err) {
        }
    })


const slice = createSlice({
    name: 'pageFive',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //
    // }
});
export const pageSixReducer = slice.reducer;
export const Tr_ModeActions = slice.actions;


