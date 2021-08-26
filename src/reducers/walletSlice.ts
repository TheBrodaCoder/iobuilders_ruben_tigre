import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountMove } from '../components/main/views/HomePage/components/AccountMoves/components/interfaces';

export interface Wallet {
    WalletNumber: string,
    walletMoves: Array<AccountMove>
}

export interface WalletState {
    wallets: Array<Wallet>
}

export interface AddMovePayload {
    walletTarget: string,
    move: AccountMove
}



const emptyWallet: Wallet = {
    WalletNumber: '',
    walletMoves: [
        { balance: 0, quantity: 0, moveName: 'Welcome to TigerPay!' }
    ]
};

const initialWallets: WalletState = {
    wallets: [
        {
            WalletNumber: 'wallet-id-generated',
            walletMoves: [
                { balance: 0, quantity: 0, moveName: 'Welcome Ruben Tigre' },
                { balance: 0, quantity: 50, moveName: 'Ruben Tigre deposit' },
                { balance: 65, quantity: 15, moveName: 'Payment for Lorena"s gift' },
                { balance: 45, quantity: -20, moveName: 'SuperMarket Ticket' },
                { balance: 20, quantity: -25, moveName: 'Expensive Dinner'}
            ]
        },
        {
            WalletNumber: 'wallet-id-generated-1',
            walletMoves: [
                { balance: 0, quantity: 0, moveName: 'Welcome User Test' },
                { balance: 0, quantity: 50, moveName: 'User Test deposit' },
                { balance: 65, quantity: 15, moveName: 'Payment for beers' },
                { balance: 45, quantity: -20, moveName: 'Gift to my boss' },
                { balance: 20, quantity: -25, moveName: 'Expensive fidget-spinner'}
            ]
        },
        {
            WalletNumber: 'wallet-id-generated-2',
            walletMoves: [
                { balance: 0, quantity: 0, moveName: 'Welcome User Test' },
                { balance: 0, quantity: 50, moveName: 'User Test2 deposit' },
                { balance: 65, quantity: 15, moveName: 'Payment for testing' },
                { balance: 45, quantity: -20, moveName: 'Udemy course' },
                { balance: 20, quantity: -25, moveName: 'Really expensive cheeto'}
            ]
        },
    ]
}

const walletSlice = createSlice({
    name: 'wallets',
    initialState: initialWallets,
    reducers: {
        createWallet(state, action: PayloadAction<string>) {
            const newWallet = {...emptyWallet, WalletNumber: action.payload};
            state.wallets = [...state.wallets, newWallet];
        },
        addMovetoWallet(state, action: PayloadAction<AddMovePayload>) {
            const changedWallet = state.wallets.findIndex((wallet: Wallet) => wallet.WalletNumber === action.payload.walletTarget);
            state.wallets[changedWallet].walletMoves.push(action.payload.move); 
        }
    }
})

export const { createWallet, addMovetoWallet } = walletSlice.actions;
export default walletSlice.reducer;