import {AppRootStateType} from '../../../main/m2-bll/store';

export const getLoadPlace = (state: AppRootStateType) => {
    return state.pageOne.loadPlace;
};
