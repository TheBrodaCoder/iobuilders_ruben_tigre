import styled from "styled-components";
import theme from "../../../../utils/theme/theme";

const PromptContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    min-width: 30%;
    max-width: 35%; 
    background-color: ${theme.mainColors.blue};
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
`;

export default PromptContainer