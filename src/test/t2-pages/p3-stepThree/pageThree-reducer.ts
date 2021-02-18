import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appActions} from '../../../main/m2-bll/appReducer';
import {page3} from '../../../main/m3-dal/api-service';
import {AppRootStateType} from '../../../main/m2-bll/store';
import {PackagingItemType} from '../p2-stepTwo/pageTwo-reducer';

export const PALLETS = 'pallets';
export const NO_PALLETS = 'no_pallets';

const initialState = {
       payloadTypeLoad: PALLETS as PayloadTypeForLoading
};

//thunk's
export const setIsWithPallet = createAsyncThunk<PayloadTypeForLoading, undefined,
    { rejectValue: { errors: Array<string>, fieldsErrors?: Array<any> } }>('pageThree/isWithPallet',
    async (param, {dispatch, getState, rejectWithValue}) => {
        const state = getState() as AppRootStateType;
        const isWithPalletParam = state.pageThree.payloadTypeLoad;
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await page3.sendWithPallet(isWithPalletParam) as Promise<PayloadTypeForLoading>;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            console.log(res);
            return res
        } catch (err) {
            return rejectWithValue(err.messages[0]);
        }
    });

const slice = createSlice({
        name: 'pageThree',
        initialState,
        reducers: {
            setPayloadType(state, action: PayloadAction<{ payloadTypeLoad: PayloadTypeForLoading }>) {
                state.payloadTypeLoad = action.payload.payloadTypeLoad;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(setIsWithPallet.fulfilled, (state, action) => {
                    state.payloadTypeLoad = action.payload;
                });
        },
    })
;
export const pageThreeReducer = slice.reducer;
export const {setPayloadType} = slice.actions;
export type PageThreeInitialState = typeof initialState;
export type PayloadTypeForLoading = 'pallets' | 'no_pallets'


export type CustomerCargo = {
    id: string
    name: string
    length: number
    width: number
    height: number
    mass: number
    quantity: number
}
