import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import nolhaga from './images/nolahaga.jpg';
import marbodal from './images/marbodal.jpg';
import planritning from './images/planritning.jpg';
import './form.css';
import vardagsrum from './images/vardagsrum-sol.png';
import vardagsrum2 from './images/koksbord-1.png';


class RealEstateObject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
    };
  }

  handlechange(event){
    event.preventDefault();
    console.log("handle Change");
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handlesubmit(event){
    event.preventDefault();
    console.log("submitted");
  };

  render() {

    return (
      <div className="RestaurantMenu page-component">
        <div className="description-text-box">
          <p>I ett unikt läge i centrala Markaryd, och i direkt närhet till naturen, byggs nu 4 nya bostäder i hög standard med bästa komfort.</p>
          <p>De fyra lägenheterna är alla på 3 rum och kök, har egen parkeringsplats direkt utanför dörren och en insynsskyddad terass. Inflyttningsdatum beräknas till Mars 2022.</p>
        </div>
        <div className="row-container align-left">
          <div className="row-image-container">
            <img src={vardagsrum} alt="Logo" />
          </div>
          <div className="image-container">
            <p>Modernt</p>
            <p>Nytt nytt nytt</p>
          </div>
        </div>
        
        <div className="row-container align-left">
          <div className="row-image-container">
            <img src={vardagsrum2} alt="Logo" />
          </div>
          <div className="image-container">
            <p>Naturnära</p>
            <p>Ypperligt modernt boende </p>
          </div>
        </div>
        <div>
          <form className="form-container" onSubmit={this.handlesubmit.bind(this)}>
            <label className="form-entry-container">
              <div className="form-entry-label">Namn</div>
              <input type='text' name="name" value={this.state.name} onChange={this.handlechange.bind(this)}></input>
            </label>
            <label className="form-entry-container">
              <div className="form-entry-label">Telefon</div>
              <input type='phone' name="phone" value={this.state.phone} onChange={this.handlechange.bind(this)}></input>
            </label>
            <label className="form-entry-container">
              <div className="form-entry-label">Email</div>
              <input type='email' name="email" value={this.state.email} onChange={this.handlechange.bind(this)}></input>
            </label>
            <input className="form-button" type='submit' value="Registrera"></input>
          </form> 
        </div>
      </div>
      
    );    
  }

}

export default RealEstateObject;