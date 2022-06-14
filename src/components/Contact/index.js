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
  const linkedInIcon = require("../../../public/images/components/contact/linkedin.png");

  return (
   <ContactBox>
    <ContactIcon alt = "linkedIn" src = {linkedInIcon}/>
   </ContactBox>
  )
}


export default Contact