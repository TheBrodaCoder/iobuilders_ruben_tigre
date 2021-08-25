import React, { useEffect, useState } from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import AccountMoves from './components/AccountMoves/AccountMoves';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Wallet } from '../../../../reducers/walletSlice';
import { AccountMove } from './components/AccountMoves/components/interfaces';
import NavBar from './components/NavBar/NavBar';


export type FormToDisplay = 'none' | 'pay' | 'deposit' ;

const HomePage = () => {
    const loggedUser = useSelector( (state: RootStateOrAny) => state.loggedState.loggedUser);
    const walletList = useSelector( (state: RootStateOrAny) => state.walletsList.wallets);
    const [moves, setMoves] = useState<Array<AccountMove>>([]);
    const [formDisplayed, setformDisplayed] = useState<FormToDisplay>( 'none' );
    const [balance, setBalance] = useState(0);

        useEffect(() => {
            const userWallet = walletList.find( (wallet: Wallet )=> wallet.walletNumber === loggedUser.walletNumber );
            const moves = [...userWallet.walletMoves];
            setMoves( moves );
            setBalance( moves[0].balance )
        }, [])

    return (

        <div style={{display: 'flex', flexDirection:'column', height: '100%'}} >
            <NavBar setForm={setformDisplayed} />
            <div style={{display: 'flex', flexDirection:'row', height: '100%', transitionDuration: '2s'}}>
                <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', overflow: 'hidden', flexGrow: 1 }}>
                    <AccountBalance balance={balance}/>
                    <AccountMoves moves={moves}/>
                </div>
                {formDisplayed === 'none' ? 
                    null     
                : 
                (formDisplayed === 'pay' ?
                    <div style={{ minWidth: '25%', maxWidth: '30%', backgroundColor: '#E15656' }}> pay </div> 
                    : 
                    <div style={{ minWidth: '25%', maxWidth: '30%', backgroundColor: '#FFC300' }}> deposit </div> 
                )}
            </div>
        </div>
        
        
    )
};

export default HomePage;
