import React, { useEffect, useState } from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import AccountMoves from './components/AccountMoves/AccountMoves';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Wallet } from '../../../../reducers/walletSlice';
import { AccountMove } from './components/AccountMoves/components/interfaces';



const HomePage = () => {
    const loggedUser = useSelector( (state: RootStateOrAny) => state.loggedState.loggedUser);
    const walletList = useSelector( (state: RootStateOrAny) => state.walletsList.wallets);
    const [moves, setMoves] = useState<Array<AccountMove>>([]);
    const [balance, setBalance] = useState(0);

        useEffect(() => {
            const userWallet = walletList.find( (wallet: Wallet )=> wallet.walletNumber === loggedUser.walletNumber );
            const moves = [...userWallet.walletMoves];
            setMoves( moves );
            setBalance( moves[0].balance )
        }, [])


    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', overflow: 'hidden', height: '100vh', width: '100vw'}}>
            <AccountBalance balance={balance}/>
            <AccountMoves moves={moves}/>
        </div>
    )
};

export default HomePage;
