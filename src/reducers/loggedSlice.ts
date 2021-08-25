import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface loggedUser {
    FullName: string,
    Email: string,
    walletNumber: string
}

interface loggedState {
    logged: boolean,
    loggedUser: {
        FullName: string,
        Email: string,
        walletNumber: string
    }
}

const loggedSlice = createSlice({
    name: 'logged',
    initialState: {
        logged: false,
        loggedUser: {
            FullName: '',
            Email: '',
            walletNumber: ''
        }
    },
    reducers: {
        changeLoggedStatus(state, action: PayloadAction<loggedState>){

            state.logged = action.payload.logged;
            state.loggedUser = action.payload.loggedUser;
        },
        logOut(state, action: PayloadAction<boolean>){
            state.logged = action.payload
        }
    }
})

export const { changeLoggedStatus, logOut } = loggedSlice.actions;
export default loggedSlice.reducer;