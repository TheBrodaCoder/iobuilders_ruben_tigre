import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountMove } from '../components/main/views/HomePage/components/AccountMoves/components/interfaces';

export interface Wallet {
    walletNumber: string,
    walletMoves: Array<AccountMove>
}

export interface WalletState {
    wallets: Array<Wallet>
}

export interface AddMovePayload {
    walletTarget: string,
    move: AccountMove
}



const emptyWallet = {
    walletNumber: '',
            walletMoves: [
                { balance: 0, quantity: 0, moveName: 'Welcome to TigerPay!' }
            ]
};

const initialWallets: WalletState = {
    wallets: [
        {
            walletNumber: 'wallet-id-generated',
            walletMoves: [
                { balance: 45, quantity: -20, moveName: 'mercadona' },
                { balance: 65, quantity: -15, moveName: 'bizum lucia' },
                { balance: 0, quantity: 50, moveName: 'Ingreso carlos' }
            ]
        },
        {
            walletNumber: 'wallet-id-generated-1',
            walletMoves: [
                { balance: 95, quantity: -5, moveName: 'BurguerKing' },
                { balance: 105, quantity: 10, moveName: 'Ingreso carlos' },
                { balance: 70, quantity: -35, moveName: 'Regalo Lucia' }
            ]
        },
        {
            walletNumber: 'wallet-id-generated-2',
            walletMoves: [
                { balance: 95, quantity: -5, moveName: 'BurguerKing' },
                { balance: 105, quantity: 10, moveName: 'Ingreso carlos' },
                { balance: 70, quantity: -35, moveName: 'Regalo Lucia' }
            ]
        },
    ]
}

const walletSlice = createSlice({
    name: 'wallets',
    initialState: initialWallets,
    reducers: {
        createWallet(state, action: PayloadAction<string>) {
            const newWallet = {...emptyWallet, walletNumber: action.payload}
            state.wallets = [...state.wallets, newWallet];
        },
        addMovetoWallet(state, action: PayloadAction<AddMovePayload>) {
            
            state.wallets = state.wallets.map( wallet => {
                return wallet.walletNumber === action.payload.walletTarget ? {...wallet, walletMoves: [...wallet.walletMoves, action.payload.move]} : wallet;
            })
        }
    }
})

export const { createWallet, addMovetoWallet } = walletSlice.actions;
export default walletSlice.reducer;