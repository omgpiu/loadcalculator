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
    determineLoadPlace, getResultPaymentTC,
    setIsWithPallet,
    setPackagingCargoTC,
    setPalletParametersTC,
    setPlacementCargo_totalValueTC,
    setSelectedTransportTC,
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
        setPayloadType(state, action: PayloadAction<{ withPallet: PayloadTypeForLoading }>) {
            state.withPallet = action.payload.withPallet;
        },
        //p4
        setPalletParamFromBack(state, action: PayloadAction<{ palletParam: PalletType }>) {
            //устанавливаем в стэйт пришедший  обьект с выбранным паллетом

            state.palletParam = action.payload.palletParam
        },
        //p5
        // выбор варианта размещения груза
        setPackagingPosition(state, action: PayloadAction<{ id: string, name: NameType, position: boolean }>) {

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
            //todo
            // .addCase(uploadCargoForm.pending, (state) => {
            //     state.isUpload = 'uploading';
            //     console.log(state.isUpload);
            // })
            // .addCase(uploadCargoForm.fulfilled, (state) => {
            //     state.isUpload = 'done';
            //     console.log(state.isUpload);
            // })
            // .addCase(uploadCargoForm.rejected, (state) => {
            //     state.isUpload = 'error';
            //     console.log(state.isUpload);
            // })
            //p2
            .addCase(setPackagingCargoTC.fulfilled, (state, action) => {
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
            // считаем общие характеристики груза для подбора транспорта
            .addCase(setPlacementCargo_totalValueTC.fulfilled, (state, action) => {
                state.totalCargoValue = action.payload.totalCargoValue
            })

            //p6
            .addCase(setSelectedTransportTC.fulfilled, (state, action) => {
                state.transports = action.payload as TransportType[];
            })
            //p7
            .addCase(getResultPaymentTC.fulfilled, (state, action) => action.payload)
    },
})


export type PaymentStateType = typeof initialState
export const {
    setLoadPlace, setPackagingCargo, removePackagingCargo,
    deletePackagingCargo, setPayloadType,
    setPalletParamFromBack,
    setPackagingPosition
} = slice.actions;
export const paymentReducer = slice.reducer;

