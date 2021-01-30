import {AppRootStateType} from '../../../main/m2-bll/store';

export const getPackagingImage = (state: AppRootStateType) => {
    return state.pageTwo.images;
};
