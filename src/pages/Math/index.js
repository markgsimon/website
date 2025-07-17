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
            <li>Firstly, linear algebra and algorithsm <br/><br/> 
              <ul>
                <li>Why study algorithms?</li>
                  Well firstly, the study of algorithms adds a rigour to the code review process for software engineering.
                <li>Why linear algebra?</li>
                Because linear algebra allows us to organize systems of linear problems.
              </ul> 
            </li>
          </ol>
        </MathText>
      </Content>
    </PageWrapper>
  )
}

export default Math