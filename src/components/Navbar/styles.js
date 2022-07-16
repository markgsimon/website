import styled from "styled-components";


export const NavbarContainer = styled.div` 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  
    /* border: 1px solid blue; */
    height: 10vh;
    @media screen and (max-width: 768px){
            height: 15vh;

    }
`;

export const LabelRow = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* justify-content: space-between; */
    width: 30%;
    height: 100%;
    @media screen and (max-width: 768px){
            flex-direction: column;
    }
`;


export const Label = styled.div` 
    font-family: sans-serif;
    border-radius: 10px;
    font-size: 2em;
    align-self: center;
    padding: 5px;
    margin: 3px;
    @media screen and (max-width: 768px){
          font-size: 1.5em;
    }
    &:hover {
        background-color: rgba(0,0,0,.5);
        border-radius: 12px;
        cursor: pointer;
    }
`;


