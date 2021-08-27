import styled from "styled-components";
import theme from "../../../../utils/theme/theme";

export const LandingContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
    display: flex;
    flex-direction: row-reverse
`;

export const RightContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
    background-color: ${theme.mainColors.darkBlue}; 
    display: flex; 
    flex-direction: column;
    height: 100vh;
    width: 30vw; 
    align-items: center;
`;

export const LeftContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
    background-color: ${theme.mainColors.darkGray}; 
    width: 70vw; 
    display: flex; 
    justify-content: center; 
    align-items: center;
`;

export const InfoContainer = styled.div<React.HTMLAttributes<HTMLElement>>`
    background-color: ${theme.mainColors.darkBlue}; 
    max-width: 60%; 
    min-height: 70%; 
    border-radius: 1em; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
`;

export const InfoText = styled.div<React.HTMLAttributes<HTMLElement>>`
    width: 80%; 
    font-family: 'Roboto'; 
    font-size: 1.2em; 
    font-weight: lighter; 
    color: ${theme.mainColors.white}; 
    flexBasis: 60%;
`;