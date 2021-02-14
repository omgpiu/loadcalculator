import {AppRootStateType} from '../../main/m2-bll/store';

export const getLogin = (state: AppRootStateType): string | null => {
    return state.login.login;
};
export const getError = (state: AppRootStateType): string => {
    return state.login.error;
};
export const getIsAuth = (state: AppRootStateType): boolean => {

    return state.login.isAuth;
};
export const getCaptcha = (state: AppRootStateType): string | null => {

    return state.login.captchaUrl;
};
