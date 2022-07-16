import React from 'react'

import {
  MathText,
  MathTitle,
  Content,
  LineBreak
} from "./styles"

import PageWrapper from '../PageWrapper';

const Math = (props) => {
  return (
    <PageWrapper>
      <Content>
        <MathTitle>Math Page</MathTitle>
        <MathText>Here is where I will begin my discussion into mathematics:<br/> <br/> 
         1. Firstly, discrete mathematics.
             <br/><br/> I. What is the definition of discrete?
        </MathText>
      </Content>
    </PageWrapper>
  )
}

export default Math