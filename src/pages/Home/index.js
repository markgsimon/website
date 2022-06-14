import React from 'react'




import {
  HomeContent
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
      This is the home page. 
      <HomeContent>Hello World! My name is Mark Simon!

       Your browser info: {navigator.userAgent}
      </HomeContent>
    </PageWrapper>
  )
}

export default Home;