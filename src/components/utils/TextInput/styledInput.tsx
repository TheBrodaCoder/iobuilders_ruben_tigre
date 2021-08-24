import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

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
    &:focus{
        outline: none
    }
`;