import React from 'react'

import {
  MathText,
  MathTitle,
  Content
} from "./styles"

import PageWrapper from '../PageWrapper';

const Math = (props) => {
  return (
    <PageWrapper>
      <Content>
        <MathTitle>Math Page</MathTitle>
        <MathText>Here is where I will begin my discussion into mathematics</MathText>
      </Content>
    </PageWrapper>
  )
}

export default Math