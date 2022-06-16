import React from 'react'

import {
  Text,
  Title,
  DesignContent
} from "./styles"


import PageWrapper from '../PageWrapper';

const Design = (props) => {
  return (
    <PageWrapper>
      <DesignContent>
        <Title>Design page.</Title>
        <Text> Check back here for information on new designs or enginering projects I am currently working on. </Text>
      </DesignContent>
    </PageWrapper>
  )
}

export default Design