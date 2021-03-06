import {AppRootStateType} from '../../../root/r2-bll/store';

export const getLogin = (state: AppRootStateType): string | null => {
    return state.profile.profile.email;
};
export const getError = (state: AppRootStateType): string => {
    return state.auth.error;
};
export const getIsAuth = (state: AppRootStateType): boolean => {
    return state.auth.isAuth;
};
export const getCaptcha = (state: AppRootStateType): string => {
    return state.auth.captchaUrl;
};
