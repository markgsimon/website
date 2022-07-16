import React from 'react'

import {
  Text,
  Title,
  DesignContent
} from "./styles"


import PageWrapper from '../PageWrapper';

const Design = (props) => {
  return (
    <PageWrapper>
      <DesignContent>
        <Title>Design page</Title>
        <Text> My first project is this website. <br/>
            <br/> So now I begin the work in earnest of upping my web design skills. 
            <br/> 
            <ul>
              <li>I have this website,</li>
              <li>a local photographer's website,  check out <a href = "http://www.mattchafe.com"> his new site</a></li>
              <li>and an exercise app for react native.  </li>
            </ul> 
            <br/>
       
            My missions are to:
            <ol>  
              <li>Improve my clients site.</li>
              <li>Improve my own website.</li>
              <li>Build an exercise app for react native to manage todos.</li>
            </ol> 
        </Text>
        <Text>
          Date: 07/16/22<br/>
          <ul>
            <li> Learned how to make line breaks and basic unordered and ordered lists in html</li>
            <li>You can select a whole line in vscode with ctrl-l on linux, and cmd-l on mac</li>
            <li></li>
          </ul>
         
        </Text>
        <Text>
          <br/>
          Learning objectives:
          <ul>
            <li>Expand working knowledge of html and css best practices</li>
            <li></li>
          </ul>
        </Text>
        <Text> Main todos for my website
          <ul>
            <li>create and add custom favicon</li>
          </ul>
        </Text>
      </DesignContent>
    </PageWrapper>
  )
}

export default Design