import styled from "styled-components";

export const HomePageContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column; 
    height: 100%;
`;

export const HomePageContent = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: row; 
    height: 100%;
`;

export const AccountDetails = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    display: flex;
    flex-direction: column;
    align-items: center; 
    overflow: hidden;
    flex-grow: 1; 
`;