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
            width: 1001,
            height: 1002,
            length: 1003,
            diameter: null,
            volume: null,
            weight: 1006,
            amount: 10,
        },
        {
            id: '12',
            img: bigBag,
            title: 'БИГ БЭГИ',
            width: 1001,
            height: 1002,
            length: 1003,
            diameter: null,
            volume: null,
            weight: 1006,
            amount: 10,
        },
        {
            id: '13',
            img: pallet,
            title: 'ПАЛЛЕТЫ',
            width: 1001,
            height: 1002,
            length: 1003,
            diameter: null,
            volume: null,
            weight: 106,
            amount: 10,
        }, {
            id: '16',
            img: woodenBox,
            title: 'ЯЩИКИ',
            width: 1001,
            height: 1002,
            length: 1003,
            diameter: null,
            volume: null,
            weight: 106,
            amount: 10,
        },
        {
            id: '14',
            img: pipe,
            title: 'ТРУБЫ',
            width: null,
            height: null,
            length: 1003,
            diameter: 504,
            volume: 505,
            weight: 1006,
            amount: 10,
        },
        {
            id: '15',
            img: tire,
            title: 'ШИНЫ',
            width: null,
            height: 5002,
            length: null,
            diameter: 5004,
            volume: null,
            weight: 1006,
            amount: 10,
        },
        {
            id: '17',
            img: barrel,
            title: 'БОЧКИ',
            width: null,
            height: 1002,
            length: null,
            diameter: 2004,
            volume: 5005,
            weight: 1006,
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


            },
            deletePackagingCargo(state, action: PayloadAction<{ id: string }>) {
                const index = state.packagingCargo.findIndex(c => c.id === action.payload.id);
                if (index > -1) {
                    state.packagingCargo.splice(index, 1);
                }

            },

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
    width: number | null
    height: number | null
    length: number | null
    diameter: number | null
    volume: number | null
    weight: number
    amount: number
}


export const {setPackagingParams, setPackagingCargo, deletePackagingCargo} = slice.actions;
export const pageTwoReducer = slice.reducer;

