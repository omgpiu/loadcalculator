import {AppRootStateType} from '../../../main/m2-bll/store';
import {TransportType} from '../../../main/m3-dal/api-service';
import {RequestStatusType} from '../../../main/m2-bll/appReducer';



export const getTransports = (state: AppRootStateType): TransportType[] => {
    return state.pageSix.transports
}
export const getStatus = (state: AppRootStateType): RequestStatusType => {
    return state.app.status
}
export const getAutoChoiceFiltered = (state: AppRootStateType): TransportType[] => {
    return state.pageSix.autoChoiceFiltered
}

