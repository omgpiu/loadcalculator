import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppRootStateType} from '../../../root/r2-bll/store';
import {appActions} from '../../../root/r2-bll/appReducer';
import {page6, pageOne} from '../../../root/r3-dal/api-service';
import {paymentStateType, removePackagingCargo, setPalletParamFromBack} from './payment-reducer';
import {PackagingItemType, PalletType, PayloadTypeForLoading} from '../../../common/types';
import {paymentAPI} from '../p11-calc-dal/paymentAPI';
import {handleAsyncServerNetworkError} from '../../../common/utils/error-utils';


// createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >
//thunks
//p1

export const determineLoadPlace = createAsyncThunk('pageOne/loadPlace',
    async (param, {dispatch, rejectWithValue, getState}) => {
        const state = getState() as AppRootStateType;
        const cargoLoadPlace = state.payments.loadPlace;
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await paymentAPI.loadPlace(cargoLoadPlace) as paymentStateType;
            sessionStorage.setItem('currentPaymentId', res._id)
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res;
        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    });
export const uploadCargoForm = createAsyncThunk('pageOne/cargoForm',
    async (File: File, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            await pageOne.uploadFile(File);
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));

        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    });
//p2
export const setCountedCargoParamTC = createAsyncThunk('pageTwo/sendCargo',
    async (param, {dispatch, rejectWithValue, getState}) => {
        dispatch(appActions.setAppStatusAC({status: 'loading'}));
        const state = getState() as AppRootStateType;
        const packagingCargo = state.payments.packagingCargo
        try {
            const res = await paymentAPI.countedCargoParam(packagingCargo) as PackagingItemType[];
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res;
        } catch (err) {
            dispatch(removePackagingCargo())
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    });
//p3
export const setIsWithPallet = createAsyncThunk<PayloadTypeForLoading, undefined,
    { rejectValue: { errors: Array<string>, fieldsErrors?: Array<any> } }>('pageThree/isWithPallet',
    async (param, {dispatch, getState, rejectWithValue}) => {
        dispatch(appActions.setAppStatusAC({status: 'loading'}));
        const state = getState() as AppRootStateType;
        const isWithPalletParam = state.payments.withPallet;
        try {
            const res = await paymentAPI.isWithPallet(isWithPalletParam) as PayloadTypeForLoading;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res
        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    });
//p4
export const setPalletParametersTC = createAsyncThunk('pageFive/setPalletParam',
    async (param: PalletType, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setAppStatusAC({status: 'loading'}))
        try {
            const palletParameters: PalletType = {...param}
            const res = await paymentAPI.palletParameters(palletParameters)
            dispatch(setPalletParamFromBack({palletParam: res as PalletType}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
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
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    })
