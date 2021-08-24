import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

interface styledInputType extends InputHTMLAttributes<HTMLElement> {
    error?: string | false | undefined
}

export const StyledInput = styled.input<styledInputType>`
    width: 80%;
    padding: 0.8vw;
    margin-top: 2em;
    border-radius: 0.5em;
    font-family: 'Roboto';
    font-size: 1em;
    border-color: ${props => props.error ? theme.mainColors.red : theme.mainColors.black };
    &:focus{
        outline: none
    }
`;