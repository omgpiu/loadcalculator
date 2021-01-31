import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import box from './../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from './../../../assets/images/i2-pagetwo/big_bag.jpg';
import pallet from './../../../assets/images/i2-pagetwo/pallet.jpg';
import pipe from './../../../assets/images/i2-pagetwo/pipes.jpg';
import tire from './../../../assets/images/i2-pagetwo/tire.jpg';
import woodenBox from './../../../assets/images/i2-pagetwo/woodenBox.jpg';
import barrel from './../../../assets/images/i2-pagetwo/steel-barrel.jpg';

const initialState: InitialStatePageTwoType = {
    packagingCargo: [],
    packagingItems: [
        {
            id: 11,
            img: box,
            title: 'КОРОБКИ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: 0,
            volume: 0,
            weight: 100
        },
        {
            id: 12,
            img: bigBag,
            title: 'БИГ БЭГИ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: 0,
            volume: 0,
            weight: 100,
        },
        {
            id: 13,
            img: pallet,
            title: 'ПАЛЛЕТЫ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: 0,
            volume: 0,
            weight: 100
        },
        {
            id: 14,
            img: pipe,
            title: 'ТРУБЫ',
            width: 0,
            height: 0,
            length: 1000,
            diameter: 50,
            volume: 50,
            weight: 100,
        },
        {
            id: 15,
            img: tire,
            title: 'ШИНЫ',
            width: 500,
            height: 500,
            length: 0,
            diameter: 500,
            volume: 0,
            weight: 100,
        },
        {
            id: 16,
            img: woodenBox,
            title: 'ЯЩИКИ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: 0,
            volume: 0,
            weight: 100
        }, {
            id: 17,
            img: barrel,
            title: 'БОЧКИ',
            width: 0,
            height: 1000,
            length: 0,
            diameter: 200,
            volume: 500,
            weight: 100
        },

    ]
};


const slice = createSlice({
        name: 'pageTwo',
        initialState,
        reducers: {
            setPackagingParams(state, action: PayloadAction<{ id: number, param: 'height' | 'width' | 'length' | 'diameter' | 'volume' | 'weight', paramQuantity: number }>) {
                console.log(action.payload.id, action.payload.param, action.payload.paramQuantity);
                state.packagingItems.map(item => {
                     if (item.id === action.payload.id) {
                         item[action.payload.param] = action.payload.paramQuantity;

                    }
                });
            },
            setPackagingCargo(state, action: PayloadAction<{ id: number }>) {
                const cargo = state.packagingItems.find(item => item.id === action.payload.id);
                // cargo && state.packagingCargo.push({...cargo, id: v1()});
            }


        }
    })
;
export type ParamType = 'height' | 'width' | 'length' | 'diameter' | 'volume' | 'weight'
export type InitialStatePageTwoType = {
    packagingCargo: PackagingItemType[]
    packagingItems: PackagingItemType[]
}
export type PackagingItemType = {
    id: number,
    img: string,
    title: string,
    width: number | undefined,
    height: number | undefined,
    length: number | undefined,
    diameter: number | undefined,
    volume: number | undefined
    weight: number
}

export const {setPackagingParams, setPackagingCargo} = slice.actions;
export const pageTwoReducer = slice.reducer;

