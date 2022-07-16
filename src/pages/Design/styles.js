import styled from "styled-components";

export const DesignContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* height: 100%; */
    width: 90%;
    /* overflow-y: auto; */
    overflow: scroll;
`;

export const Title = styled.div` 
    font-family: sans-serif;
    font-size: 2em;
    color: black;
   align-self: center;
   /* margin-bottom: 5%; */
    @media screen and (max-width: 768px){
        font-size: 1.5em;
/    }

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