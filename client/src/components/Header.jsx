import React from 'react';
import logo from '../../dist/resources/lmlogo.png'

const Header = (props) => {

  return (
    <div className="HeaderContainer">
      <img src={logo}/>
    </div>
  );
}

export default Header;