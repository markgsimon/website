import styled from "styled-components";


export const NavbarContainer = styled.div` 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
    background-color: grey;
    height: 10vh;
    @media screen and (max-width: 768px){
            height: 20vh;
    }
`;

export const LabelRow = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid green; */
    width: 30%;
    height: 100%;
    @media screen and (max-width: 768px){
            flex-direction: column;
    }
`;


export const Label = styled.div` 
    font-family: 'Gill Sans';
    border-radius: 10px;
    font-size: 2em;
    align-self: center;
    &:hover {
        /* border: 1px solid whitesmoke; */
        background-color: rgba(0,0,0,.5);
        cursor: pointer;
    }
`;

export const Title = styled.div` 

    font-family: Ubuntu;
    font-size: 2em;
    color: #FFFFFF;

`;
