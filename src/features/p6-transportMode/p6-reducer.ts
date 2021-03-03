import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {page6, TransportType} from '../../root/r3-dal/api-service';
import {appActions} from '../../root/r2-bll/appReducer';
import {AppRootStateType} from '../../root/r2-bll/store';
import {v1} from 'uuid';
import {TotalCargoValueType} from '../p2-stepTwo/pageTwo-reducer';
import {calcRemainingCargo} from '../../common/helpers/calculator/calculator';


const initialState = {
    transports: [] as TransportType[],
    autoChoiceFiltered: [] as TransportType[],
    selectChoice: [] as TransportType[],
    selectedTransport: [] as TransportType[],
    remainderCargo: {} as remainderCargoType

}

//thunk's
//   createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >
export const getTransportDataTC = createAsyncThunk('pageSix/transportMode',
    // ... ( param,thunkAPI и внутри => dispatch,rejectWithValue, getState() )
    async (param, {dispatch, rejectWithValue, getState}) => {
        const state = getState() as AppRootStateType
        const transportType = state.pageOne.loadPlace
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await page6.getTransport(transportType)
            dispatch(Tr_ModeActions.setTransportDataAC({transports: res as TransportType[]}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err)
        }
    })
export const getAutoFilterDataTC = createAsyncThunk('pageSix/getAutoFilterData',
    async (param, {dispatch, rejectWithValue, getState}) => {
        const state = getState() as AppRootStateType
        const totalCargoValue = state.pageTwo.totalCargoValue
        const transportType = state.pageOne.loadPlace
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await page6.getAutoFilterData(totalCargoValue, transportType)
            dispatch(Tr_ModeActions.setFilterAutoChoiceAC({autoChoiceFiltered: res as TransportType[]}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err)
        }
    })
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
            return rejectWithValue(err)
        }
    })


const slice = createSlice({
    name: 'pageSix',
    initialState,
    reducers: {
        setTransportDataAC(state, action: PayloadAction<{ transports: TransportType[] }>) {
            //устанавливаем в стэйт пришедший  массив с траспортом
            state.transports = action.payload.transports
        },
        setFilterAutoChoiceAC(state, action: PayloadAction<{ autoChoiceFiltered: TransportType[] }>) {
            //сетаем отфильтрованный массив в state.autoChoiceFiltered
            state.autoChoiceFiltered = action.payload.autoChoiceFiltered
        },
        addSelectTransportAC(state, action: PayloadAction<{ transportId: string, totalCargoValue: TotalCargoValueType }>) {
            const transport = state.transports.find(el => el.id === action.payload.transportId)
            transport && state.selectChoice.push({...transport, id: v1()});
        },
        deleteSelectTransportAC(state, action: PayloadAction<{ transportId: string }>) {
            const index = state.selectChoice.findIndex(el => el.id === action.payload.transportId);
            if (index > -1) {
                state.selectChoice.splice(index, 1);
            }
        },
        calcRemainingCargoAC(state, action: PayloadAction<{ totalCargoValue: TotalCargoValueType }>) {
            state.remainderCargo = calcRemainingCargo(state.selectChoice, action.payload.totalCargoValue);

        },

    },
    // extraReducers: (builder) => {
    //
    // }
});
export const pageSixReducer = slice.reducer;
export const Tr_ModeActions = slice.actions;
export type remainderCargoType = {
    remainingVolume: number
    remainingMass: number
    remainPercent: number
}

