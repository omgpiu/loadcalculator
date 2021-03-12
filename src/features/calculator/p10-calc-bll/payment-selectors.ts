import {AppRootStateType} from '../../../root/r2-bll/store';

import {loadPlaceType, PayloadTypeForLoading} from '../../../common/types';



export const getLoadPlace = (state: AppRootStateType): loadPlaceType => {
    return state.payments.loadPlace;
};
export const getUploadStatus = (state: AppRootStateType) => {
    return state.payments.isUpload;
};
export const withPallet = (state: AppRootStateType): PayloadTypeForLoading => {
    return state.payments.withPallet;
};
