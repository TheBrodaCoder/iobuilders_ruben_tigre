import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

interface buttonProps extends ButtonHTMLAttributes<HTMLElement> {
    text: string,
    label?: string
}

interface StyledButtonProps {
    caution?: boolean,
}

const StyledButton = styled.button<StyledButtonProps>`
    background: ${props => props.caution ? theme.mainColors.red : theme.mainColors.blue };
    color: ${theme.mainColors.white};
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font: inherit;
    outline: inherit;
    font-size: 1.2em;
    font-weight: 200;
    padding: 0.8vw;
    padding-right: 1.2vw;
    padding-left: 1.2vw;
    &:hover {
        background: ${theme.mainColors.yellow}
    }
`;

export const ButtonContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
   display: flex;
   flex-direction: column;
   justify-content: center';
   align-items: center;    
   margin-top: 0.5em;
   margin-bottom: 0.5em;
`;

export const StyledLabel = styled.label<React.HTMLAttributes<HTMLElement>>`
    font-family: 'Roboto';
    font-size: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`;


const Button = ({ text, label, ...props }: buttonProps ): JSX.Element => {
    return (
        <ButtonContainer>
            {label ? (<StyledLabel>{label}</StyledLabel>):(null)}
            <StyledButton onClick={props.onClick} {...props}>
                {text}
            </StyledButton>
        </ButtonContainer>
    )
};

export default Button;
