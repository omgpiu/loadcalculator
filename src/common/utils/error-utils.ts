import {AxiosError} from 'axios'
import {appActions} from '../../root/r2-bll/appReducer';
import {Dispatch} from 'react';

export const handleAsyncServerAppError = (data: any,
                                          dispatch: Dispatch<any>, rejectWithValue: any,
                                          showError = true) => {
    if (showError) {
        dispatch(appActions.setAppErrorAC({error: data.messages.length ? data.messages[0] : 'Some error occurred'}))
    }
    dispatch(appActions.setAppStatusAC({status: 'failed'}))
    return rejectWithValue({errors: data.messages, fieldsErrors: data.fieldsErrors})
}

export const handleAsyncServerNetworkError = (error: AxiosError,
                                              dispatch: Dispatch<any>, rejectWithValue: any,
                                              showError = true) => {
    const e = error.response ? error.response.data.error : 'some error occurred'
    if (showError) {
        dispatch(appActions.setAppErrorAC({error: e}))
    }
    dispatch(appActions.setAppStatusAC({status: 'failed'}))

    return rejectWithValue(e)
}

export const checkStatusCode = (code: number) => {
    if (code >= 200 && code < 300) return true
    if (code >= 400) return false
}