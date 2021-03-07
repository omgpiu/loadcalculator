import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UploadFileStatus} from 'antd/lib/upload/interface';
import {
    loadPlaceType,
    NameType,
    PackagingItemType,
    PalletType,
    PayloadTypeForLoading,
    TotalCargoValueType,
    TransportType
} from '../../../common/types';
import {
    determineLoadPlace,
    setCountedCargoParamTC,
    setIsWithPallet,
    setPalletParametersTC, setSelectedTransportTC,
    uploadCargoForm
} from './payment-thunk';


export const TRUCK = 'Грузовик';
export const CONTAINER = 'Контейнер';


const initialState = {
    user_id: '',
    _id: '', // id текущего  расчета
    user_name: '',
    loadPlace: '' as loadPlaceType, // авто / контейнер
    packagingCargo: [] as PackagingItemType[], // массив с позициями(разные наименования) груза
    totalCargoValue: {} as TotalCargoValueType, // общие характ-и ( общий обьем, MAX длина, MAX ширина...)
    withPallet: '' as PayloadTypeForLoading, // с паллетами / без
    palletParam: {} as PalletType, // если с паллетами , то их хар-ки
    transports: [] as TransportType[], // выбранный транспорт / несколько однотипных видов транспорта
    isUpload: 'done' as UploadFileStatus,
    created: '', // back
    __v: 0,// back
};


const slice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        //p1
        setLoadPlace(state, action: PayloadAction<{ loadPlace: loadPlaceType }>) {
            state.loadPlace = action.payload.loadPlace;
        },
        //p2
        // //сетаем значения в стейт(с инпутов), перед добавлением в таблицу с выбранным грузом
        // setPackagingParams(state, action: PayloadAction<{ id: string, param: CargoParamType, paramQuantity: string | number }>) {
        //     state.packagingItems.map(item => {
        //             return item.id === action.payload.id ? item[action.payload.param] = action.payload.paramQuantity as number : null
        //         }
        //     );
        // },
        //заполняем массив грузом(таблица), для отправки на сервер и переприсваеваем id
        setPackagingCargo(state, action: PayloadAction<{ packagingItem: PackagingItemType }>) {
            state.packagingCargo.push(action.payload.packagingItem)
        },
        removePackagingCargo(state) {
            state.packagingCargo = []
        },

        //удаляем не нужный груз из массива(таблица с грузом)
        deletePackagingCargo(state, action: PayloadAction<{ id: string }>) {
            const index = state.packagingCargo.findIndex(c => c.id === action.payload.id);
            if (index > -1) {
                state.packagingCargo.splice(index, 1);
            }
        },

        //p3
        setPayloadType(state, action: PayloadAction<{ payloadTypeLoad: PayloadTypeForLoading }>) {
            state.withPallet = action.payload.payloadTypeLoad;
        },
        //p4
        setPalletParamFromBack(state, action: PayloadAction<{ palletParam: PalletType }>) {
            //устанавливаем в стэйт пришедший  обьект с выбранным паллетом

            state.palletParam = action.payload.palletParam
        },
        //p5
        // выбор варианта размещения груза
        setPackagingPosition: function (state, action: PayloadAction<{ id: string, name: NameType, position: boolean }>) {

            state.packagingCargo.map(item => {
                    return item.id === action.payload.id ? item[action.payload.name] = action.payload.position : null;
                }
            );
        },
    },
    extraReducers: (builder) => {
        builder
            //p1
            .addCase(determineLoadPlace.fulfilled, (state, action) => action.payload)
            .addCase(uploadCargoForm.pending, (state) => {
                state.isUpload = 'uploading';
                console.log(state.isUpload);
            })
            .addCase(uploadCargoForm.fulfilled, (state) => {
                state.isUpload = 'done';
                console.log(state.isUpload);
            })
            .addCase(uploadCargoForm.rejected, (state) => {
                state.isUpload = 'error';
                console.log(state.isUpload);
            })
            //p2
            .addCase(setCountedCargoParamTC.fulfilled, (state, action) => {
                state.packagingCargo = action.payload as PackagingItemType[];
            })
            //p3
            .addCase(setIsWithPallet.fulfilled, (state, action) => {
                state.withPallet = action.payload;
            })
            //p4
            .addCase(setPalletParametersTC.fulfilled, (state, action) => {
                state.palletParam = action.payload as PalletType;
            })
            //p6
            .addCase(setSelectedTransportTC.fulfilled, (state, action) => {
                state.transports = action.payload as TransportType[];
            })
    },
})


//p1

export type paymentStateType = typeof initialState
export const {
    setLoadPlace, setPackagingCargo,removePackagingCargo,
    deletePackagingCargo, setPayloadType,
    setPalletParamFromBack,
    setPackagingPosition
} = slice.actions;
export const paymentReducer = slice.reducer;

