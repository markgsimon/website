import styled from "styled-components";

export const DesignCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 90%;
    overflow-y: auto;
    padding: 3%;
`;

export const Title = styled.div` 
    font-family: sans-serif;
    font-size: 24px;
    color: black;
    align-self: center;
    @media screen and (max-width: 768px){
        font-size: 1.5em;
   }

`;

export const Text = styled.div` 
    font-family:  sans-serif;
    color: black;
    font-size: 14px;
    @media screen and (max-width: 768px){
            font-size: 1em;
    }

`;

export const Content = styled.div` 
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    flex-grow: 3;
`;