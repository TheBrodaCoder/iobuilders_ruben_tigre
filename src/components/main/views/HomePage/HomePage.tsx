import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import AccountMoves from './components/AccountMoves/AccountMoves';

const movimientos = [
    { balance: 95, quantity: -5, moveName: 'BurguerKing' },
    { balance: 105, quantity: 10, moveName: 'Ingreso carlos' },
    { balance: 70, quantity: -35, moveName: 'Regalo Lucia' },
    { balance: 20, quantity: -50, moveName: 'Mercadona' },
    { balance: 20, quantity: -50, moveName: 'Mercadona' },
    { balance: 20, quantity: -50, moveName: 'Mercadona' },
    { balance: 20, quantity: -50, moveName: 'Mercadona' },
    { balance: 20, quantity: -50, moveName: 'Mercadona' },
]

const HomePage = () => {
    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', overflow: 'hidden'}}>
            <AccountBalance balance={21.25}/>
            <AccountMoves moves={movimientos}/>
        </div>
    )
};

export default HomePage;
