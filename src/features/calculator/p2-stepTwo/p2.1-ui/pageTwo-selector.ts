import {AppRootStateType} from '../../../../root/r2-bll/store';
import {PackagingItemType, TotalCargoValueType} from '../../../../common/types';


// export const getPackagingItems = (state: AppRootStateType): PackagingItemType[] => {
//     return state.payment.packagingItems;
// };
export const getPackagingCargo = (state: AppRootStateType): PackagingItemType[] => {
    return state.payment.packagingCargo;
};
export const getTotalCargoValue = (state: AppRootStateType): TotalCargoValueType => {
    return state.payment.totalCargoValue
}
// export const getPackagingCargoForCounting = (state: AppRootStateType): PackagingItemType[] => {
//     return state.payment.packagingCargoBack;
// };