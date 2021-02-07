import {AppRootStateType} from '../../../main/m2-bll/store';

export const withPallet = (state: AppRootStateType): boolean => {
    return state.pageThree.withPallets;
};
