import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import box from './../../../assets/images/i2-pagetwo/box.jpg';
import bigBag from './../../../assets/images/i2-pagetwo/big_bag.jpg';
import pallet from './../../../assets/images/i2-pagetwo/pallet.jpg';
import pipe from './../../../assets/images/i2-pagetwo/pipes.jpg';
import tire from './../../../assets/images/i2-pagetwo/tire.jpg';
import woodenBox from './../../../assets/images/i2-pagetwo/woodenBox.jpg';
import barrel from './../../../assets/images/i2-pagetwo/steel-barrel.jpg';
import {v1} from 'uuid';
import {appActions} from '../../../main/m2-bll/appReducer';
import {page5} from '../../../main/m3-dal/api-service';

const initialState = {
    totalCargoValue: {
        cargoMass: 0.5,
        cargoVolume: 0.84,
        maxH: 1.4,
        maxL: 0.3,
        maxW: 0.4,
    } as TotalCargoValueType,
    packagingCargo: [
        {
            id: '11',
            img: box,
            title: 'КОРОБКИ',
            width: 1001,
            height: 1400,
            length: 1003,
            diameter: 0,
            volume: 0,
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
            diameter: 0,
            volume: 0,
            weight: 1006,
            amount: 10,
        },
    ] as PackagingItemType[],
    packagingItems: [
        {
            id: '11',
            img: box,
            title: 'КОРОБКИ',
            width: 1001,
            height: 1002,
            length: 1003,
            diameter: 0,
            volume: 0,
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
            diameter: 0,
            volume: 0,
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
            diameter: 0,
            volume: 0,
            weight: 106,
            amount: 10,
        },
        {
            id: '14',
            img: pipe,
            title: 'ТРУБЫ',
            width: 0,
            height: 0,
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
            width: 5001,
            height: 5002,
            length: 0,
            diameter: 5004,
            volume: 0,
            weight: 1006,
            amount: 10,
        },
        {
            id: '16',
            img: woodenBox,
            title: 'ЯЩИКИ',
            width: 1001,
            height: 1002,
            length: 1003,
            diameter: 0,
            volume: 0,
            weight: 106,
            amount: 10,
        }, {
            id: '17',
            img: barrel,
            title: 'БОЧКИ',
            width: 0,
            height: 1002,
            length: 0,
            diameter: 2004,
            volume: 5005,
            weight: 1006,
            amount: 10,
        },

    ] as PackagingItemType[],
    //тестовый массив , в дальнейшем будет возвращать в  totalCargoValue
    packagingCargoBack: [{
        id: '11',
        img: box,
        title: 'КОРОБКИ',
        width: 1001,
        height: 1002,
        length: 1003,
        diameter: 0,
        volume: 0,
        weight: 1006,
        amount: 10,
    },] as PackagingItemType[]

};


export const setCountedCargoParam = createAsyncThunk('pageTwo/sendCargo',
    async (param: PackagingItemType[], thunkAPI) => {
        try {
            thunkAPI.dispatch(appActions.setAppStatusAC({status: 'loading'}))
            const res = await page5.sendCargo(param)
            thunkAPI.dispatch(appActions.setAppStatusAC({status: 'succeeded'}))
            return res
        } catch (err) {
            return thunkAPI.rejectWithValue(err.messages[0])
        }
    })


const slice = createSlice({
        name: 'pageTwo',
        initialState,
        reducers: {
            //сетаем значения в стейт(с инпутов), перед добавлением в таблицу с выбранным грузом
            setPackagingParams(state, action: PayloadAction<{ id: string, param: ParamType, paramQuantity: number }>) {
                state.packagingItems.map(item => {
                        if (item.id === action.payload.id) {
                            item[action.payload.param] = action.payload.paramQuantity;
                        }
                    }
                );
            },
            //заполняем массив грузом(таблица), для отправки на север и переприсваеваем id
            setPackagingCargo(state, action: PayloadAction<{ id: string }>) {
                const cargo = state.packagingItems.find(item => item.id === action.payload.id);
                cargo && state.packagingCargo.push({...cargo, id: v1()});
            },
            //удаляем не нужный груз из массива(таблица с грузом)
            deletePackagingCargo(state, action: PayloadAction<{ id: string }>) {
                const index = state.packagingCargo.findIndex(c => c.id === action.payload.id);
                if (index > -1) {
                    state.packagingCargo.splice(index, 1);
                }
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(setCountedCargoParam.fulfilled, (state, action) => {
                    state.packagingCargoBack = action.payload as PackagingItemType[]
                    console.log(state.packagingCargoBack)
                })


        }
    })
;
export type ParamType = 'height' | 'width' | 'length' | 'diameter' | 'volume' | 'weight' | 'amount'

export type P2_State = typeof initialState;
export type InitialStatePageTwoType = {
    packagingCargo: PackagingItemType[]
    packagingItems: PackagingItemType[]
    totalCargoValue: TotalCargoValueType
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
export type TotalCargoValueType = {
    cargoVolume: number
    cargoMass: number
    maxL: number
    maxH: number
    maxW: number
}


export const {setPackagingParams, setPackagingCargo, deletePackagingCargo} = slice.actions;
export const pageTwoReducer = slice.reducer;

