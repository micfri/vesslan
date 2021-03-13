import React, {Component} from 'react';
import './App.css';
import './form.css';
import {auth} from './firebase';
import {firestore} from './firebase';
import UserPage from './user-page.js';


class RegistrationOfInterest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      isLoggedIn: false,
      credentialsEmail: '',
      credentialsPassword: ''
    };
  }

  componentDidMount(){
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged in');
        this.setState({
          isLoggedIn: true,
        });
      } else {
        this.setState({
          isLoggedIn: false
        });
      }
    });
  }

  handlechange(event){
    event.preventdefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setstate({
      [name]: value
    });
  }

  async handlesubmit(event){
    event.preventdefault();
    await auth.createuserwithemailandpassword(this.state.email, this.state.password).catch(function(error) {
      var errorcode = error.code;
      var errormessage = error.message;
      if (errorcode === 'auth/weak-password') {
        alert('the password is too weak.');
      } else {
        alert(errormessage);
      }
      console.log(error);
    });

    let user = auth.currentUser;
    let uid = user.uid;

    await firestore.collection("users").doc(this.state.email).set({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      uid: uid
    })
    .then(function() {
        console.log("Upserted user document");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    this.clearState();    
  }


  clearState(){
    this.setState({
      name: '',
      phone: '',
      email: '',
      password: '',
      credentialsEmail: '',
      credentialsPassword: ''
    });
  }

  handleUserLogInStatus(user){
    if (user) {
      this.setState ({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }; 

  logIn(){
    auth.signInWithEmailAndPassword(this.state.credentialsEmail, this.state.credentialsPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;    
      alert(errorMessage);
      console.log(error);
    });
    this.clearState();
  };

  render() {
    return (
      <div className="OpeningHours page-component">        
        <div className="page-title-container"><h1>Intresseanmälan</h1></div>
          {this.state.isLoggedIn
            ? <div>
                <UserPage> </UserPage>
              </div>
            : <div className="log-in-container">
                <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                  <label className="form-entry-container">
                    <div className="form-entry-label">Namn</div>
                    <input type='text' name="name" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label className="form-entry-container">
                    <div className="form-entry-label">Telefon</div>
                    <input type='phone' name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label className="form-entry-container">
                    <div className="form-entry-label">Email</div>
                    <input type='email' name="email" value={this.state.email} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label className="form-entry-container">
                    <div className="form-entry-label">Lösenord</div>
                    <input type='password' name="password" value={this.state.password} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <input className="form-button" type='submit' value="Registrera"></input>
                </form> 
            
                <div>
                  <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                    <label className="form-entry-container">
                      <div className="form-entry-label">Email</div>
                      <input type='email' name="credentialsEmail" value={this.state.credentialsEmail} onChange={this.handleChange.bind(this)}></input>
                    </label>
                    <label className="form-entry-container">
                      <div className="form-entry-label">Lösenord</div>
                      <input type='password' name="credentialsPassword" value={this.state.credentialsPassword} onChange={this.handleChange.bind(this)}></input>
                    </label>
                    <input className="form-button" type='button' value="Logga in" onClick={this.logIn.bind(this)}></input>
                  </form> 
                </div>
              </div>
          }
      </div>
    );    
  }
}

export default RegistrationOfInterest;
