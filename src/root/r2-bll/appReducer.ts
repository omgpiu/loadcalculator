import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = {
    status: 'idle',
    error: null,

    steps: [
        {
            title: 'Шаг 1',
            description: 'Тип контейнера.',
            dataStep: 0,
            url: '/'
        },
        {
            title: 'Шаг 2',
            description: 'Тип груза.',
            dataStep: 1,
            url: '/packing'
        },
        {
            title: 'Шаг 3',
            description: 'Тип погрузки.',
            dataStep: 2,
            url: '/cargo'
        }, {
            title: 'Шаг 4',
            description: 'Выбор паллет.',
            dataStep: 3,
            url: '/pallets'
        },
        {
            title: 'Шаг 5',
            description: 'Упаковка.',
            dataStep: 4,
            url: '/stuffing'
        }, {
            title: 'Шаг 6',
            description: 'Выбор транспорта.',
            dataStep: 5,
            url: '/modeTransport'
        },
        {
            title: 'Шаг 7',
            description: 'Результат.',
            dataStep: 6,
            url: '/results'
        },],
    currentStep: 0,
    currentPageUrl: '/'
} as InitialAppStateType;


const setAppStatusAC = createAction<{ status: RequestStatusType }>('appActions/setAppStatus');
const setAppErrorAC = createAction<{ error: string | null }>('appActions/setAppError');
export const appActions = {
    setAppStatusAC,
    setAppErrorAC
};

// const initialize = createAsyncThunk('app/initializeApp', async (param, {dispatch, rejectWithValue}) => {
//     dispatch(appActions.setAppStatusAC({status: 'loading'}));
//     try {
//         const res = await authAPI.authMe();
//         if (res) {
//             dispatch(appActions.setAppStatusAC({status: 'succeeded'}));
//         }
//         return
//     } catch (err) {
//         dispatch(appActions.setAppErrorAC(err.message));
//         dispatch(appActions.setAppStatusAC({status: 'failed'}));
//         return rejectWithValue(err.message)
//     }
// });


const setCurrentStepWithCurrentUrl = (currentUrl: string, steps: StepType[]): number => {
    const index = steps.findIndex(el => el.url === currentUrl)
    let currentStep;
    if (index >= 0) {
        currentStep = steps[index].dataStep
    } else return NaN
    return currentStep
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentPageUrl(state, action: PayloadAction<{ page: string }>) {
            debugger
            state.currentPageUrl = action.payload.page;
            state.currentStep = setCurrentStepWithCurrentUrl(action.payload.page, state.steps)
        },
        // setCurrentStep(state, action: PayloadAction<{ page: number }>) {
        //     debugger
        //     state.currentStep = action.payload.page;
        // },

    },
    extraReducers: builder => {
        builder

            .addCase(appActions.setAppStatusAC, (state, action) => {
                state.status = action.payload.status;
            })
            .addCase(appActions.setAppErrorAC, (state, action) => {
                state.error = action.payload.error;
            });
    }
});
export const {setCurrentPageUrl, /*setCurrentStep*/} = slice.actions;
export const appReducer = slice.reducer;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type StepType = {
    title: string
    description: string
    dataStep: number
    url: string
}
export type InitialAppStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    steps: StepType[]
    currentStep: number
    currentPageUrl: string
}


