import React from 'react'

import {
    PageContainer,
    Header,
    Footer,
    Content,
    FooterText
   } from "./styles";

import Contact from '../../components/Contact'
import Navbar from '../../components/Navbar';

const PageWrapper = ({children, ...props}) => {
  return (
    <PageContainer>
         <Navbar></Navbar>
        <Content>{children}</Content>
        <Footer>
          <FooterText>
              Look down here for contacts. For now I can be reached at mark.simon0917@gmail.com
          </FooterText>
            <Contact></Contact>
        </Footer>
    </PageContainer>
  )
}

export default PageWrapper
