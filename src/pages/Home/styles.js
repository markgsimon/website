import styled from "styled-components";

export const HomeContent = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    width: 70%;
    /* border: 1px solid red; */
    height: 100%;
    @media screen and (max-width: 768px){
    }
`;


export const HomepageTitle = styled.div` 
    font-family: sans-serif;
    color: green;
    font-size: 24px;

    // width: 30%;
    @media screen and (max-width: 768px){
        font-size: 2em;
    }
`;

export const HomePageDescription = styled.div` 
    font-family: sans-serif;
    color: green;
    font-size: 16px;
    /* border: 1px solid green; */
    // width: 30%;
    @media screen and (max-width: 768px){
        font-size: 1em;
    }
`;

export const ProfilePic = styled.img` 
    width: 500px;
    height: 600px;
`;

export const FlexBox = styled.div`
    display: flex;
    // justify-content: center;
    // align-items: center;
    width: 50%;
    gap: 10%;
    // border: 1px solid red;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    // border: 1px solid green;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
