import React, {Component} from 'react';
import './App.css';
import insta from './images/icons/instagram_black.png';
import phone from './images/icons/phone_black.png';
import email from './images/icons/email_black.png';


class Footer extends Component {  

  render() {
    
    return (
      <div className="Footer">
        <Socials />
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
          {/* <img className="footer-icon" src={insta} alt="Logo" /> */}
          <a href="https://www.instagram.com/pastaparmesan_foodtruck/">@futurafastigheter</a>
        </div>
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
