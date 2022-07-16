import React from 'react'


import {
  Text,
  Body,
  Title
} from "./styles"
import PageWrapper from '../PageWrapper';

const Mutterings = (props) => {
  return (
    <PageWrapper>
      <Body>
        <Title>Mutterings Page</Title>
        <Text> This page will serve as the front page of my blog. Blogging is a super fun way to get your 
          voice out there in the internet. I intend to use this as a way to express 
          my love of learning through language as a guide for learning languages.
        </Text>
      </Body>
    </PageWrapper>
  )
}

export default Mutterings;