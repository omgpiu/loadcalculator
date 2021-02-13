import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {page6, TransportType} from '../../../main/m3-dal/api-service';
import {appActions} from '../../../main/m2-bll/appReducer';
import {AppRootStateType} from '../../../main/m2-bll/store';


const initialState = {
    transports: [] as TransportType[],
    autoChoiceFiltered: [] as TransportType[],
    selectChoice: [] as TransportType[]

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
        addSelectTransportAC(state, action: PayloadAction<{ transportId: string }>) {
            const transport = state.transports.find(el => el.id === action.payload.transportId)
            transport && state.selectChoice.push(transport)
        },
        deleteSelectTransportAC(state, action: PayloadAction<{ transportId: string }>) {
             state.selectChoice = state.selectChoice.filter( el => el.id !== action.payload.transportId)
        }

    },
    // extraReducers: (builder) => {
    //
    // }
});
export const pageSixReducer = slice.reducer;
export const Tr_ModeActions = slice.actions;


