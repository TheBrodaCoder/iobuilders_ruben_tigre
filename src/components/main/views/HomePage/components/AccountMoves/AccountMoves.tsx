import React from 'react'
import theme from '../../../../../utils/theme/theme'
import { AccountMovesProps } from './components/interfaces'
import Move from './components/Move'


const AccountMoves: React.FC<AccountMovesProps> = ( props: AccountMovesProps ) => {

    return (
        <div style={{ width: '100%', backgroundColor: theme.mainColors.darkGray, flexGrow: 1}}>
            {props.moves.map( (move) => {
                return <Move key={`${move.moveName}-${move.quantity}`} balance={move.balance} quantity={move.quantity} moveName={move.moveName}/>
            })}
        </div>
    )
}

export default AccountMoves
