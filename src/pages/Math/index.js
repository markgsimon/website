import React from 'react'

import {
  MathText,
  MathTitle,
  Content,
} from "./styles"

import PageWrapper from '../PageWrapper';

const Math = (props) => {
  return (
    <PageWrapper>
      <Content>
        <MathTitle>Interesting topics in mathematics:</MathTitle>
        <MathText>
          <ol>
            <li>Firstly, discrete mathematics <br/><br/> 
              <ul>
                <li>What is the definition of discrete?</li>
              </ul> 
            </li>
          </ol>
        </MathText>
      </Content>
    </PageWrapper>
  )
}

export default Math