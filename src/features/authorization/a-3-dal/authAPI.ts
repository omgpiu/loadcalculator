import {instance} from '../../../root/r3-dal/baseAPI';


export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ProfileType>('auth/login', data)
            .then(r => r.data)
    },
    authMe() {
        return instance.get<ProfileType>('auth/me')
            .then(r => r.data)
    },
    logout() {
        return instance.delete('auth/me')
            .then(r => r.data)
    },
    // register(email: string, password: string) {
    //     return instance.post<ResponseReg>('auth/register', {email, password})
    //         .then(res => res.data)
    // },


    // recoveryPass(recoveryPassObj:RecoveryPassObjType ){
    //     return instance.post<LogoutResType>('auth/forgot', {...recoveryPassObj})
    // },
    // newPass(setNewPassData: setNewPassDatatype){
    //     return instance.post('auth/set-new-password', {...setNewPassData})
    // }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?: string
}
export type ProfileType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
}

