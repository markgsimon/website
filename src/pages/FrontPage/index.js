import React from 'react'

import {
 PageContainer,
 Header,
 Footer,
 Content
} from "./styles"

const FrontPage = (props) => {
  return (
      <PageContainer>
          <Header></Header>
          <Content>Hello World! My name is Mark Simon and I am not married.!!!</Content>
          <Footer></Footer>
    </PageContainer>
  )
}

export default FrontPage