import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { UploadFileStatus } from 'antd/lib/upload/interface';
import {appActions} from '../../../main/m2-bll/appReducer';
import {pageOne} from '../../../main/m3-dal/api-service';


export const TRUCK = 'Грузовик';
export const CONTAINER = 'Контейнер';
const initialState = {
    loadPlace: TRUCK as placeToLoadType,
    isUpload: '' as UploadFileStatus
};


//thunks


export const determineLoadPlace = createAsyncThunk('pageOne/loadPlace',
    async (param: placeToLoadType, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await pageOne.setLoadPlacePoint(param) as Promise<placeToLoadType>;
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
            console.log(res);
            return res;
        } catch (err) {
            return rejectWithValue(err.messages[0]);
        }
    });
export const uploadCargoForm = createAsyncThunk('pageOne/cargoForm',
    async (File: File, {dispatch, rejectWithValue}) => {
        try {
            dispatch(appActions.setAppStatusAC({status: 'loading'}));
            const res = await pageOne.uploadFile(File);
            dispatch(appActions.setAppStatusAC({status: 'succeeded'}));

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
                    state.loadPlace = action.payload;
                })
                .addCase(uploadCargoForm.pending, (state, appActions) => {
                    state.isUpload = 'uploading';
                    console.log( state.isUpload);
                })
                .addCase(uploadCargoForm.fulfilled, (state, appActions) => {
                    state.isUpload = 'done';
                    console.log( state.isUpload);
                })
                .addCase(uploadCargoForm.rejected, (state, appActions) => {
                    state.isUpload = 'error';
                    console.log( state.isUpload);
                });


        },
    })
;
export type InitialPageOneStateType = typeof initialState
export type placeToLoadType = typeof TRUCK | typeof CONTAINER;
export const pageOneReducer = slice.reducer;

