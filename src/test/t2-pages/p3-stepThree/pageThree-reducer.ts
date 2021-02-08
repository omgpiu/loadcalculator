import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    // примерный стейт для расчетов на 5 странице;
    // TotalCargoValue считается с помощью функции calcTotalValueCargo
    // ( после сбора данных на странице 2 , в санке после успешного запроса можно вызвать функц calcTotalValueCargo,
    // она возвращает обьект TotalCargoValue, и его сетать в стэйт для дальнейшего использования на стр 6


}

//thunk's


const slice = createSlice({
    name: 'pageThree',
    initialState,
    reducers: {},
});
export const pageThreeReducer = slice.reducer;
export const pageThreeActions = slice.actions;
