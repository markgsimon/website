import React from 'react'

import { useNavigate } from 'react-router-dom';

import {
  NavbarContainer,
  Label,
  LabelRow,
  Title
} from "./styles";



const Navbar = (props) => {
  const navigate = useNavigate();
  
  const handleNavigation = (url) => {
      navigate(`/${url}`);
  }
  
  return (
    <NavbarContainer>
      
      <LabelRow>
        <Label onClick = {() => handleNavigation("design")}>Design</Label>
        <Label  onClick = {() => handleNavigation("math")}>Math</Label>
        {/* <Label onClick = {() => handleNavigation("mutterings")}>Mutterings</Label> */}
        <Label onClick = {() => handleNavigation("")}>Home</Label>
      </LabelRow>
    </NavbarContainer>

  )
}

export default Navbar;