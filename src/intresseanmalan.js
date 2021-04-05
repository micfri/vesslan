import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import './form.css';
import emailjs from 'emailjs-com';



class Intresseanmalan extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      customer_email: '',
      message: ''
    };
  }

  componentDidMount(){
    
  }

  handleChange(event){
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  async handleSubmit(event){
    event.preventDefault();
    const templateParams = {
      customer_email: this.state.email,
      to_name: this.state.firstName,
    };
    console.log(templateParams);
    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAIL_JS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  render() {
  

    return (
      <div className="Intresseanmalan page-component">
        <div className="page-title-container"><h1>INTRESSEANMÄLAN</h1></div>
        <div className="description-text-box">
          <p>Om du är intresserad av att bo på i våra nybyggda lägenheter på Snapphanestigen 2 så är du hjärligt välkommen att anmäla ditt intresse i formuläret nedan, så kontaktar vi dig vid tillfälle. </p>
          <p>Har du frågor eller funderingar får du gärna inkludera dem i din anmälan alternativt kontakta oss på info@futurafastigheter.se eller +46 (0) 760 470 444. </p>
        </div>
        <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
          <label className="form-entry-container">
            <div className="form-entry-label">Förnamn</div>
            <input type='text' name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)}></input>
          </label>
          <label className="form-entry-container">
            <div className="form-entry-label">Efternamn</div>
            <input type='text' name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)}></input>
          </label>
          <label className="form-entry-container">
            <div className="form-entry-label">Email</div>
            <input type='email' name="customer_email" value={this.state.email} onChange={this.handleChange.bind(this)}></input>
          </label>
          <label className="form-entry-container">
            <div className="form-entry-label">Telefon</div>
            <input type='phone' name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}></input>
          </label>
          <label className="form-entry-container">
            <div className="form-entry-label">Meddelande</div>
            <textarea type='long-text' name="message" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
          </label>
          <input className="form-button" type='submit' value="Skicka in"></input>
        </form>
      </div>
    );    
  }

}

export default Intresseanmalan;