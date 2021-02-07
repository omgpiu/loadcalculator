import {AppRootStateType} from './store';
import {StepType} from './appReducer';


export const getSteps = (state: AppRootStateType): StepType[] => {
    return state.app.steps;
};
export const getCurrentPageStep = (state: AppRootStateType): number => {
    return state.app.currentStep;
};
