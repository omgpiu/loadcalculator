import {createAction} from '@reduxjs/toolkit';
import {RequestStatusType} from '../../root/r2-bll/appReducer';
import {FieldErrorType} from '../../root/r3-dal/api-service';


// original type:
// BaseThunkAPI<S, E, D extends Dispatch = Dispatch, RejectedValue = undefined>
type ThunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}
export type ThunkError = { rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> } }

const setAppStatus = createAction<{status: RequestStatusType}>('appActions/setAppStatus')
const setAppError = createAction<{error: string | null}>('appActions/setAppError')

export const appActions = {
    setAppStatus,
    setAppError
}


