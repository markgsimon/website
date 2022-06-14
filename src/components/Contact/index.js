import React from 'react'

/**
 * Contact Component for displaying social media links and icons
 * 
 */

/***
 * URls:
 * linkedin: www.linkedin.com/in/mark-simon-a57aa352
 * instagram: https://www.instagram.com/mark.gabriel.simon/
 * github : https://github.com/markgsimon
 * twitter: 
 * facebook:
 * 
 */
import {
  ContactBox,
  ContactIcon
} from "./styles"

const Contact = (props) => {
  const linkedInIcon = require("../../images/components/contact/linkedIn.png");
  const githubIcon = require("../../images/components/contact/github.png")
  return (
   <ContactBox>
    <a href = "https://www.linkedin.com/in/mark-simon-a57aa352">
      <ContactIcon alt = "linkedIn" src = {linkedInIcon}/>
    </a>
    <a href="https://github.com/markgsimon">
      <ContactIcon alt = "github" src = {githubIcon}/>
    </a>
   </ContactBox>
  )
}


export default Contact