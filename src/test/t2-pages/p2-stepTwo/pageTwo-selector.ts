import {AppRootStateType} from '../../../main/m2-bll/store';
import {PackagingItemType, TotalCargoValueType} from './pageTwo-reducer';

export const getPackagingItems = (state: AppRootStateType): PackagingItemType[] => {
    return state.pageTwo.packagingItems;
};
export const getPackagingCargo = (state: AppRootStateType): PackagingItemType[] => {
    return state.pageTwo.packagingCargo;
};
export const getTotalCargoValue = (state: AppRootStateType): TotalCargoValueType => {
    return state.pageTwo.totalCargoValue
}
export const getPackagingCargoForCounting = (state: AppRootStateType): PackagingItemType[] => {
    return state.pageTwo.packagingCargoBack;
};