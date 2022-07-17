import styled from "styled-components";


export const NavbarContainer = styled.div` 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    /* height: 100%; */

    /* border: 1px solid blue;; */
`;

export const LabelRow = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 30%;
    height: 100%;
    @media screen and (max-width: 768px){

   }
`;


export const Label = styled.div` 
    font-family: sans-serif;
    border-radius: 10px;
    font-size: 1.5em;
    align-self: center;
    padding: 5px;
    margin: 3px;
    @media screen and (max-width: 768px){
          font-size: 1em;
    }
    @media screen and (min-width: 1280px){
          font-size: 2.5em;
    }
    &:hover {
        background-color: rgba(0,0,0,.5);
        border-radius: 12px;
        cursor: pointer;
    }
`;


