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
        <Text> My first project is this website. 
          I hope someday to find like minded people around the globe to shre in my passions. 
          That is why I am proud to announce my first design project on this page. A blog. 
        </Text>
      </DesignContent>
    </PageWrapper>
  )
}

export default Design