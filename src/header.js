import React, {Component} from 'react';
import './App.css';
import './slideshow.css';
import logo from './images/Futura-Logga_Pos.png';
import nolahaga from './images/nolahaga.jpg';
import headerPicture from './images/fasad-dag.png';


class Header extends Component {  

  render() {
    
    return (
      <div className="Header">
        <img className="header-picture" src={headerPicture} alt="sodergardslangan_outside" />
        <div className="logo-container">
          <img className="header-logo" src={logo} alt="Logo" />
        </div>
      </div>
    )
  }

}

export default Header;



