import React, {Component} from 'react';
import './App.css';
import insta from './images/icons/instagram_black.png';
import phone from './images/icons/phone_black.png';
import email from './images/icons/email_black.png';
import FuturaLogoWhite from './futura-logo-white';


class Footer extends Component {  

  render() {
    
    return (
      <div className="Footer">
        <div>
          <div className="">
            <FuturaLogoWhite />
          </div>
        </div> 
        <div className="social-container">
          <div className="title footer-entry">
            <p>Bolagsinformation</p>
          </div>
          <div className="footer-entry">
            <p>Vesslan 22 AB Markaryd</p>
          </div>
          <div className="footer-entry">
            <a href="">559289-4975</a>
          </div>
        </div>
        <div className="social-container">
          <div className="title footer-entry">
            <p>Kontaktinformation</p>
          </div>
          <div className="footer-entry">
            <a href="tel:+46760470444">+46 (0) 760 470 444</a>
          </div>
          <div className="footer-entry">
            <a href="mailto:info@futurafastigheter.se">info@futurafastigheter.se</a>
          </div>
        </div>
      </div>
    
    )
  }

}

export default Footer;

const Socials = () => {
  return (
    <div className="Socials">
      <div className="social-container">
        <div className="footer-entry">
          {/* <img className="footer-icon" src={phone} alt="Logo" /> */}
          <a href="tel:+46730885230">+46 (0) 760 470 444</a>
        </div>
        <div className="footer-entry">
          {/* <img className="footer-icon" src={email} alt="Logo" /> */}
          <a href="mailto:info@pastaparmesan.se">info@futurafastigheter.se</a>
        </div>
      </div>
    </div>
  )
}
