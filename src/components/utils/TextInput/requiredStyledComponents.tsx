import styled from 'styled-components';
import theme from '../theme/theme';
import { styledInputProps, styledLabelProps } from './requiredInterfaces';

export const StyledLabel = styled.label<styledLabelProps>`
    font-size: 16px;
    padding: 0 12px;
    color: ${theme.mainColors.black};
    pointer-events: none;
    position: absolute;
    ${props => props.active ?  'transform: translate(0, 10px) scale(0.75);' : 'transform: translate(0, 26px) scale(1);'}
    transform-origin: top left;
`;

export const StyledInput = styled.input<styledInputProps>`
    width: 100%;
    height: 4.5vh;
    padding: 14px 16px 0 10px;
    outline: 0;
    border: 1px solid ${theme.mainColors.black};
    border-radius: 4px;
    background: #fff;
    font-size: 16px;
    &:focus + ${StyledLabel}{
        transform: translate(0, 10px) scale(0.75);
    }
    
`;

export const StyledDiv = styled.div<React.HTMLAttributes<HTMLElement>>`
    display: flex;
    flex-direction: column;
    min-width: 5vw;
    position: relative;
    max-width: 15vw;
    position: relative;
    .Active {
        transform: translate(0, 12px) scale(0.75);
    }
`;