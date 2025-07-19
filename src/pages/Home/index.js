import React from 'react'

import {
  HomeContent,
  HomepageTitle,
  HomePageDescription,
  ProfilePic,
  FlexBox,
  FlexCol
 } from "./styles"
//Components

/**
 * TODO
 * Gather links and icons for:
 *  github
 *  linkedin
 *  instagram
 *  twitter
 * 
 */

import PageWrapper from '../PageWrapper';

const Home = (props) => {
  return (
    <PageWrapper>
      <HomeContent>
        <FlexBox>
          <ProfilePic src = "profile.jpg" alt = "Picture of Mark Simon biking"/>
          <FlexCol>
            < HomepageTitle>Here Ye! Here Ye! You have arrived at the public facing page for all things Mark Simon. </HomepageTitle>
            <HomePageDescription >
              Ships that pass in the night, and speak each other in passing, only a signal shown, and a distant voice in the darkness; 
              So on the ocean of life, we pass and speak one another, only a look and a voice, then darkness again and a silence.        
            </HomePageDescription>
          </FlexCol>
        </FlexBox>
      </HomeContent>
    </PageWrapper>
  )
}

export default Home;