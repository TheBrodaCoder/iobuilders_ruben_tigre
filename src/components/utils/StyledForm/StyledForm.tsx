import styled from 'styled-components';
import theme from '../theme/theme';

const StyledForm = styled.form<React.HTMLAttributes<HTMLFormElement>>`
    background-color: ${theme.mainColors.white};
    min-height: 30vh;
    min-width: 20vw;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export default StyledForm;