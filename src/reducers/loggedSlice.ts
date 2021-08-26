import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface loggedUser {
    FullName: string,
    Email: string,
    WalletNumber: string
}

interface loggedState {
    logged: boolean,
    loggedUser: {
        FullName: string,
        Email: string,
        WalletNumber: string
    }
}

const initialState = {
    logged: false,
    loggedUser: {
        FullName: '',
        Email: '',
        WalletNumber: ''
    }
}

const loggedSlice = createSlice({
    name: 'logged',
    initialState,
    reducers: {
        changeLoggedStatus(state, action: PayloadAction<loggedState>){

            state.logged = action.payload.logged;
            state.loggedUser = action.payload.loggedUser;
        },
        logOut(state){
            state.logged = false;
            state.loggedUser =  {
                FullName: '',
                Email: '',
                WalletNumber: ''
            }
        }
    }
})

export const { changeLoggedStatus, logOut } = loggedSlice.actions;
export default loggedSlice.reducer;