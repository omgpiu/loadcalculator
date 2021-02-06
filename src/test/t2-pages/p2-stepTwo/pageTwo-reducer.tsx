import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import box from './../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from './../../../assets/images/i2-pagetwo/big_bag.jpg';
import pallet from './../../../assets/images/i2-pagetwo/pallet.jpg';
import pipe from './../../../assets/images/i2-pagetwo/pipes.jpg';
import tire from './../../../assets/images/i2-pagetwo/tire.jpg';
import woodenBox from './../../../assets/images/i2-pagetwo/woodenBox.jpg';
import barrel from './../../../assets/images/i2-pagetwo/steel-barrel.jpg';
import {v1} from 'uuid';

const initialState: InitialStatePageTwoType = {
    packagingCargo: [],
    packagingItems: [
        {
            id: '11',
            img: box,
            title: 'КОРОБКИ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: -1,
            volume: -1,
            weight: 100,
            amount: 10,
        },
        {
            id: '12',
            img: bigBag,
            title: 'БИГ БЭГИ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: -1,
            volume: -1,
            weight: 100,
            amount: 10,
        },
        {
            id: '13',
            img: pallet,
            title: 'ПАЛЛЕТЫ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: -1,
            volume: -1,
            weight: 100,
            amount: 10,
        },
        {
            id: '14',
            img: pipe,
            title: 'ТРУБЫ',
            width: -1,
            height: -1,
            length: 1000,
            diameter: 50,
            volume: 50,
            weight: 100,
            amount: 10,
        },
        {
            id: '15',
            img: tire,
            title: 'ШИНЫ',
            width: 500,
            height: 500,
            length: -1,
            diameter: 500,
            volume: -1,
            weight: 100,
            amount: 10,
        },
        {
            id: '16',
            img: woodenBox,
            title: 'ЯЩИКИ',
            width: 1000,
            height: 1000,
            length: 1000,
            diameter: -1,
            volume: -1,
            weight: 100,
            amount: 10,
        }, {
            id: '17',
            img: barrel,
            title: 'БОЧКИ',
            width: -1,
            height: 1000,
            length: -1,
            diameter: 200,
            volume: 500,
            weight: 100,
            amount: 10,
        },

    ]
};


const slice = createSlice({
        name: 'pageTwo',
        initialState,
        reducers: {
            setPackagingParams(state, action: PayloadAction<{ id: string, param: ParamType, paramQuantity: number }>) {
                state.packagingItems.map(item => {
                        if (item.id === action.payload.id) {
                            item[action.payload.param] = action.payload.paramQuantity;
                        }
                    }
                );
            },
            setPackagingCargo(state, action: PayloadAction<{ id: string }>) {
                const cargo = state.packagingItems.find(item => item.id === action.payload.id);
                cargo && state.packagingCargo.push({...cargo, id: v1()});
            }
        }
    })
;
export type ParamType = 'height' | 'width' | 'length' | 'diameter' | 'volume' | 'weight' | 'amount'
export type InitialStatePageTwoType = {
    packagingCargo: PackagingItemType[]
    packagingItems: PackagingItemType[]
}
export type PackagingItemType = {
    id: string
    img: string
    title: string
    width: number
    height: number
    length: number
    diameter: number
    volume: number
    weight: number
    amount: number
}


export const {setPackagingParams, setPackagingCargo} = slice.actions;
export const pageTwoReducer = slice.reducer;

