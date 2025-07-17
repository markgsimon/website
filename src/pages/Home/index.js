import React from 'react'

import {
  HomeContent,
  HomepageTitle,
  HomePageDescription,
  ProfilePic
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
        <HomepageTitle>Mark Simon </HomepageTitle>
        <ProfilePic src = "profile.jpg" alt = "Picture of Mark Simon biking"/>
        <HomePageDescription >
        Ships that pass in the night, and speak each other in passing, only a signal shown, and a distant voice in the darkness; 
        So on the ocean of life, we pass and speak one another, only a look and a voice, then darkness again and a silence.        
        </HomePageDescription>
      </HomeContent>
    </PageWrapper>
  )
}

export default Home;