import React, {Component} from 'react';
import './App.css';
import './form.css';
import {auth} from './firebase';
import {firestore} from './firebase';


class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: '',
        phone: '',
        email: ''
      }
    };
  }

  componentDidMount(){

    let user = auth.currentUser;
    console.log(user);

    let userDoc = firestore.collection("users").doc(user.email);

    userDoc.get().then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        let data = doc.data();
        this.setState({
          userData: data
        })
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    })

    let phone = userDoc.phone;

    



    this.setState(
      
    )
    
  }

  logOut(){
    auth.signOut(); 
  };
  
  render() {

    let user = auth.currentUser;
    let uid = user.uid;
    console.log(user);
    

    return (
      <div className="OpeningHours page-component">        
        <div className="page-title-container"><h2>Dina uppgifter</h2></div>
        <div>
          <p>Namn: {this.state.userData.name}</p>
          <p>Email: {this.state.userData.email}</p>
          <p>Telefon: {this.state.userData.phone} </p>
        </div>
        <button className="form-button" onClick={this.logOut.bind(this)}>Logga ut</button>
      </div>
    );    
  }
}

export default UserPage;
