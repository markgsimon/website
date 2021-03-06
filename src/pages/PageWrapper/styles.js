
import styled from "styled-components";

export const PageContainer = styled.div` 
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    /* padding: 2%; */
`;


export const Header = styled.div` 

    height: 10vh;
`;


export const Footer = styled.div` 

    /* border: 1px solid blue; */
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const FooterText = styled.div` 
    font-family: sans-serif;
    word-wrap: normal;
    text-align: center;
    color: black;
`;


export const Content = styled.div` 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
    height: 80vh;
    background-color: white;
`;