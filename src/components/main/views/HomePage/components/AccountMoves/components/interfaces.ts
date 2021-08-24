export interface AccountMove {
    moveName: string,
    balance: number,
    quantity: number
}

export interface AccountMovesProps {
    moves: Array<AccountMove>
}

export interface MoveProps {
    moveName: string,
    balance: number,
    quantity: number
}