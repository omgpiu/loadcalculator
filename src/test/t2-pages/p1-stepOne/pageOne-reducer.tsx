import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {appActions} from '../../../main/m2-bll/appReducer';
import {pageOne} from '../../../main/m3-dal/api-service';


export const TRUCK = 'Грузовик';
export const CONTAINER = 'Контейнер';
const initialState = {
    loadPlace: TRUCK as placeToLoadType
};


//thunks


export const determineLoadPlace = createAsyncThunk('pageOne/loadPlace',
    async (param: placeToLoadType, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await pageOne.setLoadPlacePoint(param);
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            console.log(res);
            //TODO узнать
            return {loadPlace:res as placeToLoadType };
        } catch (err) {
            return rejectWithValue(err.messages[0]);
        }
    });


const slice = createSlice({
        name: 'pageOne',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(determineLoadPlace.fulfilled, (state, action) => {
                    console.log(action.payload.loadPlace);
                    state.loadPlace = action.payload.loadPlace;

                });

        },
    })
;
export type InitialPageOneStateType = typeof initialState

export type placeToLoadType = typeof TRUCK | typeof CONTAINER;
export const pageOneReducer = slice.reducer;

