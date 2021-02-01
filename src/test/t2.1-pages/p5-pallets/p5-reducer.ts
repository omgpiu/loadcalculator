import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    palletParameters:[
        {id: 1, name: 'Длина:', value: '500', units: 'мм'},
        {id: 2, name: 'Ширина:', value: '1200', units: 'мм'},
        {id: 3, name: 'Высота:', value: '150', units: 'мм'},
        {id: 4, name: 'Грузоподъемность:', value: '750', units: 'кг'},
        {id: 5, name: 'Максимальная высота загрузки:', value: '2000', units: 'мм'},
        {id: 6, name: 'Высота разделительного листа:', value: '50', units: 'мм'},
    ]
};


const slice = createSlice({
    name: 'page5',
    initialState,
    reducers: {}
});
export const page5Reducer = slice.reducer;
