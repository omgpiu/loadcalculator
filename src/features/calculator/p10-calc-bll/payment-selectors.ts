import {AppRootStateType} from '../../../root/r2-bll/store';

import {loadPlaceType, PayloadTypeForLoading} from '../../../common/types';
import {PaymentStateType} from './payment-reducer';


export const getLoadPlace = (state: AppRootStateType): loadPlaceType => {
    return state.payments.loadPlace;
};
export const getUploadStatus = (state: AppRootStateType) => {
    return state.payments.isUpload;
};
export const withPallet = (state: AppRootStateType): PayloadTypeForLoading => {
    return state.payments.withPallet;
};
export const getResultPayment = (state: AppRootStateType):PaymentStateType => {
    return state.payments
}
