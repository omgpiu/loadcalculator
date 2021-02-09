import {AppRootStateType} from '../../../main/m2-bll/store';
import {placeToLoadType} from './pageOne-reducer';

export const getLoadPlace = (state: AppRootStateType): placeToLoadType => {
    return state.pageOne.loadPlace;
};
