import React from 'react'

import {
 PageContainer,
 Header,
 Footer,
 Content
} from "./styles"

const Home = (props) => {
  return (
      <PageContainer>
          <Header></Header>
          <Content>Hello World! My name is Mark Simon!</Content>
          <Footer></Footer>
    </PageContainer>
  )
}

export default Home;