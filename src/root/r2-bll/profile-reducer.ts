import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProfileType} from '../../features/authorization/a-3-dal/authAPI';


const initialState = {
    profile:{
        _id: null as null | string,
        email: null as null | string,
        rememberMe: null as null | boolean,
        isAdmin: null as null | boolean,
        name: null as null | string,
        verified: null as null | boolean,
    }
};

const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileAC(state: ProfileState, action: PayloadAction<{ profile: ProfileType }>) {
            state.profile = action.payload.profile
        }
    }
})

export const profileReducer = slice.reducer;
export const profileActions = slice.actions;
export type ProfileState = typeof initialState;


