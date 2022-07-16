import styled from "styled-components";

export const DesignContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const Title = styled.div` 
    font-family: sans-serif;
    font-size: 3em;
    color: white;
    @media screen and (max-width: 768px){
        font-size: 2em;
        margin-bottom: 5%;
    }

`;

export const Text = styled.div` 
    font-family:  sans-serif;
    color: white;
    font-size: 2em;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 1em;
    }

`;