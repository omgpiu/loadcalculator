import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import {calcRemainingCargo, filterTransports} from '../../../common/helpers/calculator/calculator';
import {TotalCargoValueType, TransportType} from '../../../common/types';


const initialState = {
    autoChoiceFiltered: [] as TransportType[],
    selectChoice: [] as TransportType[],
    selectedTransport: [] as TransportType[],
    remainderCargo: {} as remainderCargoType
}

//thunk's
//   createAsyncThunk<что санка возвращает, аргументы которые принимает санка, описание ошибок - rejectValue: {errors: Array<string> } >

// export const getAutoFilterDataTC = createAsyncThunk('pageSix/getAutoFilterData',
//     async (param, {dispatch, rejectWithValue, getState}) => {
//         const state = getState() as AppRootStateType
//         const totalCargoValue = state.payment.totalCargoValue
//         const transportType = state.payment.loadPlace
//         try {
//             dispatch(appActions.setAppStatusAC({status: 'loading'}))
//             const res = await page6.getAutoFilterData(totalCargoValue, transportType)
//             dispatch(Tr_ModeActions.setFilterAutoChoiceAC({autoChoiceFiltered: res as TransportType[]}))
//             dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
//             return res
//         } catch (err) {
//             dispatch(appActions.setAppStatusAC({status: 'failed'}))
//             return rejectWithValue(err)
//         }
//     })


const slice = createSlice({
    name: 'pageSix',
    initialState,
    reducers: {
        // setTransportDataAC(state, action: PayloadAction<{ transports: TransportType[] }>) {
        //     //устанавливаем в стэйт пришедший  массив с траспортом
        //     state.transports = action.payload.transports
        // },
        autoFilterChoiceAC(state, action: PayloadAction<{ totalCargoValue: TotalCargoValueType, transports: TransportType[] }>) {
            //сетаем отфильтрованный массив в state.autoChoiceFiltered
            state.autoChoiceFiltered = filterTransports(action.payload.totalCargoValue, action.payload.transports)

        },
        addSelectedTransportAC(state, action: PayloadAction<{ selectTransport: TransportType }>) {
            // const transport = state.transports.find(el => el.id === action.payload.transportId)
            state.selectChoice.push({...action.payload.selectTransport, id: v1()});
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
    //
    // }
});
export const pageSixReducer = slice.reducer;
export const tr_ModeActions = slice.actions;
export type remainderCargoType = {
    remainingVolume: number
    remainingMass: number
    remainPercent: number
}

