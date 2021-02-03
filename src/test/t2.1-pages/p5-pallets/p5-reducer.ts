import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {page5} from '../../../main/m3-dal/api-service';
import {appActions} from '../../../main/m2-bll/appReducer';
import {PalletParamFormType} from './palletForm/palletForm';
import {v1} from 'uuid';
import {AppRootStateType} from '../../../main/m2-bll/store';


const initialState = {
    palletType: 'FIN' as palletVariantType,
    pallets: [] as PalletType[],
    palletParam: null as null | PalletType
}

//thunk's
//   createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >
export const getPalletsTC = createAsyncThunk('pageFive/getPallets',
    // ... ( param,thunkAPI и внутри => dispatch,rejectWithValue, getState() )
    async (param, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await page5.getPallets()
            dispatch(palletActions.setPalletsAC({pallets: res as PalletType[]}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err)
        }
    })
export const setPalletParameters = createAsyncThunk('pageFive/setPalletParam',
    async (param: PalletParamFormType, thunkAPI) => {
        try {
            thunkAPI.dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const state = thunkAPI.getState() as AppRootStateType
            const palletParameters: PalletType = {
                id: v1(),
                typePallet: state.pageFive.palletType,
                ...param,
            }
            const res = await page5.setPalletParam(palletParameters)
            thunkAPI.dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            return thunkAPI.rejectWithValue(err.messages[0])
        }
    })


const slice = createSlice({
    name: 'pageFive',
    initialState,
    reducers: {
        setPalletsAC(state, action: PayloadAction<{ pallets: PalletType[] }>) {
            //устанавливаем в стэйт пришедший  массив с вариантами паллетов
            state.pallets = action.payload.pallets
        },
        // меняем в стейте выбранный тип паллетов
        filterPalletVariantAC(state, action: PayloadAction<{ palletType: palletVariantType }>) {
            state.palletType = action.payload.palletType
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPalletsTC.fulfilled, (state, action) => {
                state.pallets = action.payload as PalletType[]
            })
            .addCase(setPalletParameters.fulfilled, (state, action) => {
                state.palletParam = action.payload as PalletType
            })
    }
});
export const pageFiveReducer = slice.reducer;
export const palletActions = slice.actions;

export type palletVariantType = 'FIN' | 'EUR' | 'E-BOX' | 'CARGO_SMALL' | 'CARGO_BASE';
export type PalletType = {
    id: string
    typePallet: string
    length: number
    width: number
    height: number
    carryingCapacity: number
    maxLoadingHeight: number
    separatorSheetHeight: number
    img?: any
};
export type P5_State = typeof initialState;
