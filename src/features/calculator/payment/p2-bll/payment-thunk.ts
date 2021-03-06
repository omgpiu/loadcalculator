import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppRootStateType} from '../../../../root/r2-bll/store';
import {appActions} from '../../../../root/r2-bll/appReducer';
import {page3, page5, page6, pageOne} from '../../../../root/r3-dal/api-service';
import {placeToLoadType, setPalletParamFromBack} from './payment-reducer';
import {PackagingItemType, PalletType, PayloadTypeForLoading} from '../../../../common/types';


// createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >
//thunks
//p1

export const determineLoadPlace = createAsyncThunk<placeToLoadType, undefined,
    { rejectValue: { errors: Array<string>, fieldsErrors?: Array<any> } }>('pageOne/loadPlace',
    async (param, {dispatch, rejectWithValue, getState}) => {
        const state = getState() as AppRootStateType;
        const cargoLoadPlace = state.payment.loadPlace;
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await pageOne.setLoadPlacePoint(cargoLoadPlace) as Promise<placeToLoadType>;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res;
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err.message);
        }
    });
export const uploadCargoForm = createAsyncThunk('pageOne/cargoForm',
    async (File: File, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            await pageOne.uploadFile(File);
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));

        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err.message);
        }
    });
//p2
export const setCountedCargoParam = createAsyncThunk('pageTwo/sendCargo',
    async (param, {dispatch, rejectWithValue,getState}) => {
        const state = getState() as AppRootStateType;
        const packagingCargo = state.payment.packagingCargo
    dispatch(appActions.setAppStatusAC({status: 'loading'}));
        try {
            const res = await page5.sendCargo(packagingCargo) as Promise<PackagingItemType[]>;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res;
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err.message);
        }
    });
//p3
export const setIsWithPallet = createAsyncThunk<PayloadTypeForLoading, undefined,
    { rejectValue: { errors: Array<string>, fieldsErrors?: Array<any> } }>('pageThree/isWithPallet',
    async (param, {dispatch, getState, rejectWithValue}) => {
        const state = getState() as AppRootStateType;
        const isWithPalletParam = state.payment.withPallet;
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await page3.sendWithPallet(isWithPalletParam) as Promise<PayloadTypeForLoading>;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            console.log(res);
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err.message);
        }
    });
//p4
export const setPalletParametersTC = createAsyncThunk('pageFive/setPalletParam',
    async (param: PalletType, {dispatch, rejectWithValue}) => {

        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const palletParameters: PalletType = {...param}
            const res = await page5.setPalletParam(palletParameters)
            dispatch(setPalletParamFromBack({palletParam:res as PalletType}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err.message)
        }
    })

//p6
// отправляем на сервер массив с выбранным транспортом, вмещающим весь груз
export const setSelectedTransportTC = createAsyncThunk('pageSix/setSelectedTransport',
    async (param, {dispatch, rejectWithValue, getState}) => {
        const state = getState() as AppRootStateType
        const selectedTransport = state.pageSix.selectedTransport
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await page6.setSelectedTransport(selectedTransport)
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err.message)
        }
    })