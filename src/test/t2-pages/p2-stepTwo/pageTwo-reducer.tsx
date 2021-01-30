import {createSlice} from '@reduxjs/toolkit';
import box from './../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from './../../../assets/images/i2-pagetwo/big_bag.jpg';
import bag from './../../../assets/images/i2-pagetwo/bag.jpg';
import pallet from './../../../assets/images/i2-pagetwo/pallet.jpg';
import pipe from './../../../assets/images/i2-pagetwo/pipes.jpg';
import tire from './../../../assets/images/i2-pagetwo/tire.jpg';
import woodenBox from './../../../assets/images/i2-pagetwo/woodenBox.jpg';
import barrel from './../../../assets/images/i2-pagetwo/steel-barrel.jpg';

const initialState = {
    images: [
        box,
        bigBag,
        bag,
        pallet,
        pipe,
        tire,
        woodenBox,
        barrel


    ]
};


const slice = createSlice({
        name: 'pageTwo',
        initialState,
        reducers: {}
    })
;

export const pageTwoReducer = slice.reducer;

