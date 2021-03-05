import {AppRootStateType} from '../../../root/r2-bll/store';

import {RequestStatusType} from '../../../root/r2-bll/appReducer';
import {TransportType} from '../../../common/types';




export const getStatus = (state: AppRootStateType): RequestStatusType => {
    return state.app.status
}
export const getAutoChoiceFiltered = (state: AppRootStateType): TransportType[] => {
    return state.pageSix.autoChoiceFiltered
}

