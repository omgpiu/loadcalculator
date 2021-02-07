import {AppRootStateType} from '../../../main/m2-bll/store';
import {PayloadTypeForLoading} from './pageThree-reducer';

export const withPallet = (state: AppRootStateType): PayloadTypeForLoading => {
    return state.pageThree.payloadTypeLoad;
};
