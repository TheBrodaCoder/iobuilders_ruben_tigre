import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

interface buttonProps {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

interface StyledButtonProps {
    size: string
}

const StyledButton = styled.button<StyledButtonProps>`
    background: ${theme.mainColors.blue};
    color: ${theme.mainColors.white};
    border: none;
    border-radius: 4px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-size: 1.2em;
    font-weight: 200;
    padding: 0.8vw;
    padding-right: 1.4vw;
    padding-left: 1.4vw;
`;

const Button = ({ text, onClick }: buttonProps ): JSX.Element => {
    return (
        <StyledButton size='2vw' onClick={onClick}>
            {text}
        </StyledButton>
    )
};



export default Button;
