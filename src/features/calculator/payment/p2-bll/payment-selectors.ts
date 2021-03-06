import {AppRootStateType} from '../../../../root/r2-bll/store';
import {placeToLoadType} from './payment-reducer';
import {PayloadTypeForLoading} from '../../../../common/types';



export const getLoadPlace = (state: AppRootStateType): placeToLoadType => {
    return state.payment.loadPlace;
};
export const getUploadStatus = (state: AppRootStateType) => {
    return state.payment.isUpload;
};
export const withPallet = (state: AppRootStateType): PayloadTypeForLoading => {
    return state.payment.withPallet;
};
