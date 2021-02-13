import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appActions} from '../../../main/m2-bll/appReducer';
import {page3} from '../../../main/m3-dal/api-service';
import {AppRootStateType} from '../../../main/m2-bll/store';

export const PALLETS = 'pallets';
export const NO_PALLETS = 'no_pallets';

const initialState = {
    // примерный стейт для расчетов на 5 странице;
    // TotalCargoValue считается с помощью функции calcTotalValueCargo
    // ( после сбора данных на странице 2 , в санке после успешного запроса можно вызвать функц calcTotalValueCargo,
    // она возвращает обьект TotalCargoValue, и его сетать в стэйт для дальнейшего использования на стр 6
    // customerCargo: [
    //     {
    //         id: '1',
    //         name: 'cargo 1',
    //         length: 200,
    //         width: 300,
    //         height: 200,
    //         mass: 10,
    //         quantity: 10,
    //     },
    //     {
    //         id: '2',
    //         name: 'cargo 2',
    //         length: 300,
    //         width: 400,
    //         height: 300,
    //         mass: 20,
    //         quantity: 20,
    //     },
    //
    // ] as CustomerCargo[],
    // TotalCargoValue: {
    //     CargoMass: 0.03,
    //     CargoVolume: 0.024,
    // } as TotalCargoValueType,
    payloadTypeLoad: PALLETS as PayloadTypeForLoading
};

//thunk's
export const setIsWithPallet = createAsyncThunk('pageThree/isWithPallet',
    async (param, {dispatch, getState, rejectWithValue}) => {

        const state = getState() as AppRootStateType;
        const isWithPalletParam = state.pageThree.payloadTypeLoad;
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await page3.sendWithPallet(isWithPalletParam) as PayloadTypeForLoading;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            // console.log( res)
            return {payloadTypeLoad: res};
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

                    state.payloadTypeLoad = action.payload.payloadTypeLoad;
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
