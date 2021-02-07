import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TotalCargoValueType} from '../../t5-common/calculator/calculator';


const initialState = {
    // примерный стейт для расчетов на 5 странице;
    // TotalCargoValue считается с помощью функции calculator
    // ( после сбора данных на странице 2 , в санке после успешного запроса можно вызвать функц calculator,
    // она возвращает обьект TotalCargoValue, и его сетать в стэйт для дальнейшего использования на стр 6
    customerCargo: [
        {
            id: '1',
            name: 'cargo 1',
            length: 200,
            width: 300,
            height: 200,
            mass: 10,
            quantity: 10,
        },
        {
            id: '2',
            name: 'cargo 2',
            length: 300,
            width: 400,
            height: 300,
            mass: 20,
            quantity: 20,
        },

    ] as CustomerCargo[],
    TotalCargoValue: {
        CargoMass: 0.03,
        CargoVolume: 0.024,
    } as TotalCargoValueType,
    withPallets: false
};

//thunk's


const slice = createSlice({
    name: 'pageThree',
    initialState,
    reducers: {
        setPayloadType(state, action: PayloadAction) {
            state.withPallets = !state.withPallets;

        }


    },
});
export const pageThreeReducer = slice.reducer;
export const {setPayloadType} = slice.actions;

export type PageThreeInitialState = typeof initialState;


export type CustomerCargo = {
    id: string
    name: string
    length: number
    width: number
    height: number
    mass: number
    quantity: number
}
