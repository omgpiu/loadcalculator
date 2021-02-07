import {AppRootStateType} from './store';
import {StepType} from './appReducer';


export const getSteps = (state: AppRootStateType): StepType[] => {
    return state.app.steps;
};
export const getCurrentPageStep = (state: AppRootStateType): string => {
    return state.app.currentStep;
};
