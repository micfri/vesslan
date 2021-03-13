import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import logo from './logo.jpg';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';

class Contact extends Component {

  showSettings (event) {
    event.preventDefault();
    
    
  }


  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Contact page-component">
          <div className="page-title-container"><h1>Kontakt</h1></div>
          <div>
            <p>Mail: info@pastaparmesan.se</p>
            <p>Instagram: @pastaparmesan_foodtruck</p>
          </div>
      </div>
    );    
  }

}

export default Contact;