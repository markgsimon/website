import styled from "styled-components";

export const HomeContent = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    /* border: 1px solid red; */
    height: 100%;
    @media screen and (max-width: 768px){
    }
`;


export const HomepageTitle = styled.div` 
    font-family: sans-serif;
    color: black;
    font-size: 24px;
    @media screen and (max-width: 768px){
        font-size: 2em;
    }
`;

export const HomePageDescription = styled.div` 
    font-family: sans-serif;
    color: black;
    font-size: 16px;
    /* border: 1px solid green; */
    width: 500px;
    @media screen and (max-width: 768px){
        font-size: 1em;
    }
`;

export const ProfilePic = styled.img` 

    width: 500px;
    height: 600px;

`;