import styled from "styled-components";

export const HomeContent = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    @media screen and (max-width: 768px){
    }
`;


export const HomepageTitle = styled.div` 
    font-family: sans-serif;
    color: black;
    font-size: 2em;
`;

export const HomePageDescription = styled.div` 
    font-family: sans-serif;
    color: black;
    font-size: 2em;
    width: 80%;
    @media screen and (max-width: 768px){
        font-size: 1em;
    }
`;