import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {page6, TransportType} from '../../../main/m3-dal/api-service';
import {appActions} from '../../../main/m2-bll/appReducer';
import {AppRootStateType} from '../../../main/m2-bll/store';

const initialState = {
    containers: [] as TransportType[],
    trucks: [] as TransportType[],
    autoChoice: [] as TransportType[],
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
            dispatch(Tr_ModeActions.setTransportDataAC({transports: res as TransportType[], transportType}))
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            dispatch(appActions.setAppStatusAC({status: 'failed'}))
            return rejectWithValue(err)
        }
    })


const slice = createSlice({
    name: 'pageFive',
    initialState,
    reducers: {
        setTransportDataAC(state, action: PayloadAction<{ transports: TransportType[], transportType: string }>) {
            //устанавливаем в стэйт пришедший  массив с траспортом
            action.payload.transportType === 'Грузовик'
                ? state.trucks = action.payload.transports
                : state.containers = action.payload.transports
        },
        // setAutoChoiceTransportAC(state, action: PayloadAction<{ transports: TransportType[], transportType: string }>) {
        //     state.
        //     //устанавливаем в стэйт пришедший  массив с траспортом
        //     action.payload.transportType === 'Грузовик'
        //         ? state.trucks = action.payload.transports
        //         : state.containers = action.payload.transports
        // },
    },
    // extraReducers: (builder) => {
    //
    // }
});
export const pageSixReducer = slice.reducer;
export const Tr_ModeActions = slice.actions;


