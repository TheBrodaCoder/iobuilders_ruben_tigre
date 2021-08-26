import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginAction {
    Email: string,
    Password: string
}

export interface UserType {
    Email: string,
    Password: string,
    FullName: string,
    WalletNumber: string,
}

export interface UsersList {
    users: Array<UserType>
}


const initialUser: UsersList = {
    users: [
        {
            Email: 'donowenrt@gmail.com',
            Password: '1234',
            FullName: 'Ruben Tigre',
            WalletNumber: 'wallet-id-generated'
        },
        {
            Email: 'admin@gmail.com',
            Password: '1111',
            FullName: 'test user',
            WalletNumber: 'wallet-id-generated-2'
        },
        {
            Email: 'test@gmail.com',
            Password: '2222',
            FullName: 'test user 2',
            WalletNumber: 'wallet-id-generated-3'
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