import {instance} from '../../../root/r3-dal/baseAPI';
import {
    loadPlaceType,
    PackagingItemType,
    PalletType,
    PayloadTypeForLoading, TotalCargoValueType,
    TransportType
} from '../../../common/types';

export const getCurrentPaymentId = () => sessionStorage.getItem('currentPaymentId')


export const paymentAPI = {

    loadPlace(loadPlace: loadPlaceType) {
        return instance.post('payment/s_payment', {loadPlace})
            .then(res => res.data.input_data)
    },
    countedCargoParam(packagingCargo: PackagingItemType[]) {
        return instance.put('payment/packing', {currentPaymentId: getCurrentPaymentId(), packagingCargo})
            .then(res => res.data.input_data)
    },
    isWithPallet(withPallet: PayloadTypeForLoading) {
        return instance.put('payment/withPallet', {currentPaymentId: getCurrentPaymentId(), withPallet})
            .then(res => res.data.input_data)
    },
    palletParameters(palletParameters: PalletType) {
        return instance.put('payment/palletParam', {currentPaymentId: getCurrentPaymentId(), palletParameters})
            .then(res => res.data.input_data)
    },
    placementCargo_totalValue(totalCargoValue: TotalCargoValueType, packagingCargo: PackagingItemType[]) {
        return instance.put('payment/placement', {
            currentPaymentId: getCurrentPaymentId(),
            totalCargoValue,
            packagingCargo
        })
            .then(res => res.data.input_data)
    },
    selectedTransports(transports: TransportType[]) {
        return instance.put('payment/transports', {currentPaymentId: getCurrentPaymentId(), transports})
            .then(res => res.data.input_data)
    },
    resultPayment() {
        const id = getCurrentPaymentId()
        return instance.get('payment/result?'+(id ? `id=${id}` : '' ))
            .then(res => res.data.input_data)
    },
}