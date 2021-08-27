import React, { useEffect, useState } from 'react';
import AccountBalance from './AccountBalance/AccountBalance';
import AccountMoves from './AccountMoves/AccountMoves';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Wallet } from '../../../../reducers/walletSlice';
import { AccountMove } from './AccountMoves/components/interfaces';
import NavBar from './NavBar/NavBar';
import Pay from './Pay/Pay';
import Deposit from './Deposit/Deposit';
import { HomePageContainer, HomePageContent, AccountDetails } from './helpComponents/HomePageContainers';


export type FormToDisplay = 'none' | 'pay' | 'deposit' ;

const HomePage = () => {
    const loggedUser = useSelector( (state: RootStateOrAny) => state.loggedState.loggedUser);
    const walletList = useSelector( (state: RootStateOrAny) => state.walletsList.wallets);
    const [moves, setMoves] = useState<Array<AccountMove>>([]);
    const [formDisplayed, setformDisplayed] = useState<FormToDisplay>( 'none' );
    const [balance, setBalance] = useState(0);

        useEffect(() => {
            const userWallet = walletList.find( (wallet: Wallet )=> wallet.WalletNumber === loggedUser.WalletNumber );
            const moves = [...userWallet.walletMoves];
            setMoves( moves.reverse() );
            setBalance( moves[0].balance )
        }, [walletList])

    return (
        <HomePageContainer>
            <NavBar setForm={setformDisplayed} />
            <HomePageContent>
                <AccountDetails>
                    <AccountBalance balance={balance}/>
                    <AccountMoves moves={moves}/>
                </AccountDetails>
                {formDisplayed === 'none' ? 
                    null     
                : 
                (formDisplayed === 'pay' ?
                    <Pay setForm={ setformDisplayed } balance={balance} title='Send a payment'/>
                    :
                    <Deposit setForm={ setformDisplayed } balance={balance} title='Deposit'/>
                )}
            </HomePageContent>
        </HomePageContainer>
    )
};

export default HomePage;
