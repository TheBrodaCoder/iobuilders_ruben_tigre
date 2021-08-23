import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

interface buttonProps {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

interface StyledButtonProps {
    caution?: boolean,
}

const StyledButton = styled.button<StyledButtonProps>`
    background: ${props => props.caution ? theme.mainColors.red : theme.mainColors.blue };
    color: ${theme.mainColors.white};
    border: none;
    border-radius: 4px;
    font: inherit;
    outline: inherit;
    font-size: 1.2em;
    font-weight: 200;
    padding: 0.8vw;
    padding-right: 1.4vw;
    padding-left: 1.4vw;
`;

const Button = ({ text, onClick }: buttonProps ): JSX.Element => {
    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
};



export default Button;
