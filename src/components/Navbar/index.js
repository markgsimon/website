import React from 'react'

import { useHistory } from 'react-router-dom';

const handleNavigation = (url) => {
    history.push(`${url}`);
}
const Navbar = (props) => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar;