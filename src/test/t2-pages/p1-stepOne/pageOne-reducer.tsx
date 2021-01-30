import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {};


const slice = createSlice({
        name: 'pageOne',
        initialState,
        reducers: {
            setLoadType(state, action: PayloadAction<{ type: string }>) {
                
            }
        }
    })
;
export const pageOneReducer = slice.reducer;

