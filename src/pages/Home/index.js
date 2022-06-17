import React from 'react'




import {
  HomeContent,
  HomepageTitle,
  HomePageDescription
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
        <HomepageTitle>Hello World! My name is Mark Simon!</HomepageTitle>
        <HomePageDescription style = {{textAlign: "center", marginTop: "5%"}} > A little about me:  </HomePageDescription>
        <HomePageDescription style = {{textAlign: "center"}}>
          <br/>
          I am a software engineer, but my passions are myriad and stem from a desire to explore and learn about the world around me. 
        </HomePageDescription>
      </HomeContent>
    </PageWrapper>
  )
}

export default Home;