import React from 'react'

import {
 PageContainer,
 Header,
 Footer,
 Content
} from "./styles"


/**
 * TODO
 * Gather links and icons for:
 *  github
 *  linkedin
 *  instagram
 *  twitter
 * 
 */
const Home = (props) => {
  return (
      <PageContainer>
          <Header> This is where my navigation may go!!!</Header>
          <Content>Hello World! My name is Mark Simon!</Content>
          <Footer> Look down here for contacts. For now I can be reached at mark.simon0917@gmail.com</Footer>
    </PageContainer>
  )
}

export default Home;