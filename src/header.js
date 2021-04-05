import React, {Component} from 'react';
import './App.css';
import './slideshow.css';
import Logo from './images/logos/futura-logo-under.svg';
import FuturaLogo from './logo.js';
import nolahaga from './images/nolahaga.jpg';
import headerPicture from './images/header-picture.png';


class Header extends Component {  

  render() {
    
    return (
      <div className="Header">
        <img className="header-picture" src={headerPicture} alt="sodergardslangan_outside" />
        <div className="logo-container">
          {/* <img className="header-logo" src={logo} alt="Logo" /> */}
          <FuturaLogo/>

          
        </div>
      </div>
    )
  }

}

export default Header;



