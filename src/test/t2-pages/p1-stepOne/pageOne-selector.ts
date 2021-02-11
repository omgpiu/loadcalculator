import {AppRootStateType} from '../../../main/m2-bll/store';
import {placeToLoadType} from './pageOne-reducer';

export const getLoadPlace = (state: AppRootStateType): placeToLoadType => {
    console.log(state.pageOne.loadPlace);
    return state.pageOne.loadPlace;
};
