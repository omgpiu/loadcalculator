import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export const TRUCK = 'Грузовик';
export const CONTAINER = 'Контейнер';
const initialState: InitialPageOneStateType = {loadPlace: 'Грузовик'};


//thunks


const slice = createSlice({
        name: 'pageOne',
        initialState,
        reducers: {
            setLoadPlace(state, action: PayloadAction<{ loadPlace: placeToLoadType }>) {
                state.loadPlace = action.payload.loadPlace;
            }
        }
    })
;
export type InitialPageOneStateType = {
    loadPlace: placeToLoadType
}
export type placeToLoadType = 'Грузовик' | 'Контейнер' | ''
export const {setLoadPlace} = slice.actions;
export const pageOneReducer = slice.reducer;

