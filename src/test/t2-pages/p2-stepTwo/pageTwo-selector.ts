import {AppRootStateType} from '../../../main/m2-bll/store';
import {PackagingItemType} from './pageTwo-reducer';
import {TotalCargoValueType} from '../../t5-common/calculator/calculator';

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