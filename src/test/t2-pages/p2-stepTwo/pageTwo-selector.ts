import {AppRootStateType} from '../../../main/m2-bll/store';
import {PackagingItemType} from './pageTwo-reducer';

export const getPackagingItems = (state: AppRootStateType): PackagingItemType[] => {
    return state.pageTwo.packagingItems;
};
export const getPackagingCargo = (state: AppRootStateType): PackagingItemType[] => {
    return state.pageTwo.packagingCargo;
};
