import {AppRootStateType} from '../../../main/m2-bll/store';
import {packagingItemType} from './pageTwo-reducer';

export const getPackagingItems = (state: AppRootStateType): packagingItemType[] => {
    return state.pageTwo.packagingItems;
};
