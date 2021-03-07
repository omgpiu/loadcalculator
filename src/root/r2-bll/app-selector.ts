import {AppRootStateType} from './store';
import {StepType} from './appReducer';
import {RequestStatusType} from '../../common/types';


export const getSteps = (state: AppRootStateType): StepType[] => {
    return state.app.steps;
};
export const getCurrentPageStep = (state: AppRootStateType): number => {
    return state.app.currentStep;
};
export const getAppStatus = (state: AppRootStateType): RequestStatusType => {
    return state.app.status;
};