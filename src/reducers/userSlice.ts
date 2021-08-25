import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginAction {
    email: string,
    password: string
}

export interface UserType {
    email: string,
    password: string,
    fullName: string,
    walletNumber: string,
}

export interface UsersList {
    users: Array<UserType>
}


const initialUser: UsersList = {
    users: [
        {
            email: 'donowenrt@gmail.com',
            password: '1234',
            fullName: 'Ruben Tigre',
            walletNumber: 'wallet-id-generated'
        },
        {
            email: 'carlos@gmail.com',
            password: '4321',
            fullName: 'Carlos R P',
            walletNumber: 'wallet-id-generated-2'
        },
        {
            email: 'jorge@gmail.com',
            password: '3333',
            fullName: 'Jorge R O',
            walletNumber: 'wallet-id-generated-3'
        }        
    ]
}

const userSlice = createSlice({
    name: 'user list',
    initialState: initialUser,
    reducers: {
        register: (state, action: PayloadAction<UserType>) => {
            state.users = [...state.users, action.payload];
        }
    }
})

export const { register } = userSlice.actions;
export default userSlice.reducer;