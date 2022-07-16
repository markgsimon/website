import styled from "styled-components";

export const Text = styled.div`
    color: black;
    font-family: sans-serif;
    font-size: 2em;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 1em;
    }
`;

export const Body = styled.div` 

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

`;

export const Title = styled.div` 
    font-family: sans-serif;
    font-size: 3em;
    color: black;
    @media screen and (max-width: 768px){
        font-size: 2em;
        margin-bottom: 5%;
    }

`;