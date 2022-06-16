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
        <HomepageTitle>This is the home page. </HomepageTitle>
        <HomePageDescription>
          Hello World! My name is Mark Simon!
        </HomePageDescription>
      </HomeContent>
    </PageWrapper>
  )
}

export default Home;