import React from 'react'

import {
  Text,
  Title,
  DesignCard,
  Content
} from "./styles"


import PageWrapper from '../PageWrapper';

const Design = (props) => {
  return (
    <PageWrapper>
      <DesignCard>
        <Title>Design Work</Title>
        <Content>
          <Text> 
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
          <br/>
          <Text>
            Date: 07/16/22<br/>
            <ul>
              <li> Learned how to make line breaks and basic unordered and ordered lists in html</li>
              <li>You can select a whole line in vscode with ctrl-l on linux, and cmd-l on mac</li>
              <li>How to make a favicon from scratch <a href ="https://www.favicon.cc/">Check out this free generator here</a></li>
            </ul>
          
          </Text>
          <Text>
            <br/>
            Learning objectives:
            <ul>
              <li>Expand working knowledge of html and css best practices</li>
              <li>Bring to market for android and ios a custom todo app for organization and exercise tracking</li>
              <li>Develop a client relations and customer service through freelance work</li>
              <li>Gain experience in SEO, content marketing and sales</li>
              <li>Develop experience with graphic design and ui design</li>
              <li>Enhance and upskill knowledge of react and react native</li>
              <li>Robustify understanding of responsive webdesign</li>
              <li>Familiarize myself with aws ecosystem</li>
              <li>Improve javascript working knowledge, especially with data structures, and algorithms</li>
            </ul>
          </Text>
          <Text> Main todos for my website:
            <ul>
              <li><s>create and add custom favicon</s> 07/16/22</li>
              <li><s>Clean up to a presentable level for mobile and desktop</s> 07/16/22</li>
            </ul>
          </Text>
        </Content>
      </DesignCard>
    </PageWrapper>
  )
}

export default Design