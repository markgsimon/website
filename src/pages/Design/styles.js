import styled from "styled-components";

export const DesignContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

export const Title = styled.div` 
    font-family: sans-serif;
    font-size: 2em;
    color: black;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 1.5em;
        margin-bottom: 5%;
    }

`;

export const Text = styled.div` 
    font-family:  sans-serif;
    color: black;
    font-size: 2em;
    /* text-align: center; */
    @media screen and (max-width: 768px){
        font-size: 1em;
    }

`;