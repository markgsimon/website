import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
  NavbarContainer,
  Label,
  LabelRow,
} from "./styles";



const Navbar = (props) => {
  const navigate = useNavigate();
  
  const handleNavigation = (url) => {
      navigate(`/${url}`);
  }
  
  console.log(window.href);
  return (
    <NavbarContainer>
      
      <LabelRow>
        {window.location.href.includes('math') && 
          <Label onClick = {() => handleNavigation("")}>Home</Label> 
        }
        {!window.location.href.includes('math') && 
         <Label  onClick = {() => handleNavigation("math")}>Math</Label>
        }
      </LabelRow>
    </NavbarContainer>

  )
}

export default Navbar;