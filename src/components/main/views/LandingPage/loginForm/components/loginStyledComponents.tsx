import styled from 'styled-components';
import theme from '../../../../../utils/theme/theme';

export const LoginContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
    min-height: 500px;
    min-width: 400px;
    max-height: 25vw;
    max-width: 25vw;
    border-radius: 0.5em;
    margin-top: 10vw;
    background-color: ${theme.mainColors.gray};
    
    display: 'flex';
    flex-direction: 'row';
    justify-content: 'space-around';
    align-items: 'center';
`;