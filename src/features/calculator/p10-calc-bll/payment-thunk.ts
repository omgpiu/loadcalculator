import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppRootStateType} from '../../../root/r2-bll/store';
import {appActions} from '../../../root/r2-bll/appReducer';
import {PaymentStateType, removePackagingCargo, setPalletParamFromBack} from './payment-reducer';
import {PackagingItemType, PalletType, PayloadTypeForLoading} from '../../../common/types';
import {paymentAPI} from '../p11-calc-dal/paymentAPI';
import {handleAsyncServerNetworkError} from '../../../common/utils/error-utils';
import {calcTotalValueCargo} from '../../../common/helpers/calculator/calculator';


// createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >
//thunks
//p1

export const determineLoadPlace = createAsyncThunk('pageOne/loadPlace',
    async (param, {dispatch, rejectWithValue, getState}) => {
        const state = getState() as AppRootStateType;
        const cargoLoadPlace = state.payments.loadPlace;
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await paymentAPI.loadPlace(cargoLoadPlace) as PaymentStateType;
            sessionStorage.setItem('currentPaymentId', res._id)
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res;
        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    });
//todo
// export const uploadCargoForm = createAsyncThunk('pageOne/cargoForm',
//     async (File: File, {dispatch, rejectWithValue}) => {
//         try {
//             dispatch(appActions.setAppStatusAC({status: 'loading'}));
//             await pageOne.uploadFile(File);
//             dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
//         } catch (err) {
//             return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
//         }
//     });
//p2
export const setPackagingCargoTC = createAsyncThunk('pageTwo/sendCargo',
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
//p5
export const setPlacementCargo_totalValueTC = createAsyncThunk('pageFive/placement_totalValue',
    async (param, {dispatch, rejectWithValue, getState}) => {
        dispatch(appActions.setAppStatusAC({status: 'loading'}));
        const state = getState() as AppRootStateType;
        const packagingCargo = state.payments.packagingCargo
        try {
            const res = await paymentAPI.placementCargo_totalValue(calcTotalValueCargo(packagingCargo), packagingCargo);
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            return res;
        } catch (err) {
            dispatch(removePackagingCargo())
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    });

//p6
// отправляем на сервер массив с выбранным транспортом, вмещающим весь груз
export const setSelectedTransportTC = createAsyncThunk('pageSix/setSelectedTransport',
    async (param: { path: 'selectChoice' | 'autoChoiceFiltered', idAutoChoice?: string }, {
        dispatch,
        rejectWithValue,
        getState
    }) => {
        const state = getState() as AppRootStateType
        const transports = param.path === 'selectChoice' ? state.pageSix.selectChoice
            : state.pageSix.autoChoiceFiltered.filter(el => el.id === param.idAutoChoice)
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await paymentAPI.selectedTransports(transports)
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    })
//p7
export const getResultPaymentTC = createAsyncThunk('pageSeven/getResultPayment',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await paymentAPI.resultPayment()
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            return handleAsyncServerNetworkError(err, dispatch, rejectWithValue, true)
        }
    })