import {instance} from '../../../root/r3-dal/baseAPI';
import {loadPlaceType, PackagingItemType, PalletType, PayloadTypeForLoading} from '../../../common/types';

const currentPaymentId = sessionStorage.getItem('currentPaymentId')


export const paymentAPI = {
    loadPlace(loadPlace: loadPlaceType) {
        return instance.post('payment/s_payment', {loadPlace})
            .then(res => res.data.input_data)
    },
    countedCargoParam(packagingCargo: PackagingItemType[]) {
        return instance.put('payment/packing', {currentPaymentId, packagingCargo})
            .then(res => res.data.input_data)
    },
    isWithPallet(withPallet:PayloadTypeForLoading) {
        return instance.put('payment/withPallet', {currentPaymentId, withPallet})
            .then(res => res.data.input_data)
    },
    palletParameters(palletParameters:PalletType) {
        return instance.put('payment/palletParam', {currentPaymentId, palletParameters})
            .then(res => res.data.input_data)
    },

}