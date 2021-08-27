import styled from "styled-components";
import theme from "../../../../utils/theme/theme";

const PromptText = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    color: ${theme.mainColors.white};
    margin-bottom: 0.4em ;
    font-size: 2.2em ;
    align-self: center;
`;

export default PromptText;