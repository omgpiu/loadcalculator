import {createSlice} from '@reduxjs/toolkit';
import box from './../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from './../../../assets/images/i2-pagetwo/big_bag.jpg';
import pallet from './../../../assets/images/i2-pagetwo/pallet.jpg';
import pipe from './../../../assets/images/i2-pagetwo/pipes.jpg';
import tire from './../../../assets/images/i2-pagetwo/tire.jpg';
import woodenBox from './../../../assets/images/i2-pagetwo/woodenBox.jpg';
import barrel from './../../../assets/images/i2-pagetwo/steel-barrel.jpg';

const initialState:InitialStatePageTwoType = {
    packagingItems: [
        {
            id: 11,
            img: box,
            title: 'КОРОБКИ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        },
        {
            id: 12,
            img: bigBag,
            title: 'БЭГ БЭГИ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        },
        {
            id: 13,
            img: pallet,
            title: 'ПАЛЛЕТЫ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        },
        {
            id: 14,
            img: pipe,
            title: 'ТРУБЫ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        },
        {
            id: 15,
            img: tire,
            title: 'ШИНЫ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        },
        {
            id: 16,
            img: woodenBox,
            title: 'ЯЩИКИ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        }, {
            id: 17,
            img: barrel,
            title: 'БОЧКИ',
            width: 0,
            height: 0,
            length: 0,
            diameter: null,
            volume: null
        },

    ]
};


const slice = createSlice({
        name: 'pageTwo',
        initialState,
        reducers: {}
    })
;
type InitialStatePageTwoType = {
    packagingItems: packagingItemType[]
}
export type packagingItemType = {
    id: number,
    img: string,
    title: string,
    width: number | null,
    height: number | null,
    length: number | null,
    diameter: number | null,
    volume: number | null
}
export const pageTwoReducer = slice.reducer;

