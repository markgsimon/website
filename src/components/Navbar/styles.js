import styled from "styled-components";


export const NavbarContainer = styled.div` 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    background-color: grey;
`;

export const LabelRow = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid green;
    width: 20%;
`;


export const Label = styled.div` 
    border: 1px solid red;
    
    &:hover {
        background-color: rgba(0,0,0,.5);
        cursor: pointer;
    }
`;

