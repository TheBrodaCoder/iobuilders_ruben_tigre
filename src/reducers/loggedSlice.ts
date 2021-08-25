import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loggedSlice = createSlice({
    name: 'logged',
    initialState: {
        logged: false
    },
    reducers: {
        changeLoggedStatus(state, action: PayloadAction<boolean>){
            state.logged = action.payload
        }
    }
})

export const { changeLoggedStatus } = loggedSlice.actions;
export default loggedSlice.reducer;