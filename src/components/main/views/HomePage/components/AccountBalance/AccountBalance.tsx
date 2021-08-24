import React from 'react'
import styled from 'styled-components';
import theme from '../../../../../utils/theme/theme';

interface AccountBalanceProps {
    balance: number
}

const StyledBalance = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    font-Family: Roboto;
    fontWeight: bold;
    color: ${theme.mainColors.black};
    font-size: 4em;
    min-height: 200px;
    max-height: 10vh;
    width: 100vw;
    background-color: ${theme.mainColors.gray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AccountBalance: React.FC<AccountBalanceProps>= ( props: AccountBalanceProps ) => {



    return (
    
        <StyledBalance>
            {props.balance}€
        </StyledBalance>
    )
}

export default AccountBalance
