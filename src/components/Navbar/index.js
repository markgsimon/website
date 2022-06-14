import React from 'react'

import { useNavigate } from 'react-router-dom';

import {
  NavbarContainer,
  Label,
  LabelRow
} from "./styles";



const Navbar = (props) => {
  const navigate = useNavigate();
  
  const handleNavigation = (url) => {
      navigate(`/${url}`);
  }
  
  return (
    <NavbarContainer>
      Here is the navbar
      <LabelRow>
        <Label onClick = {() => handleNavigation("design")}>Design</Label>
        <Label  onClick = {() => handleNavigation("math")}>Math</Label>
        <Label onClick = {() => handleNavigation("")}>Home</Label>
      </LabelRow>
    </NavbarContainer>

  )
}

export default Navbar;