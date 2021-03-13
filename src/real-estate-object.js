import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import nolhaga from './images/nolahaga.jpg';
import marbodal from './images/marbodal.jpg';
import planritning from './images/planritning.jpg';
import './form.css';
import vardagsrum from './images/vardagsrum-sol.png';
import vardagsrum2 from './images/koksbord-1.png';
import karta from './images/vesslan-karta.png';
import planskiss from './images/vesslan-planskiss.png';
import fasad from './images/vesslan-fasad.png';


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
        <div className="page-title-container"><h1>Vesslan 22</h1></div>
        <div className="description-text-box">
          <p>I ett unikt läge i centrala Markaryd, och i direkt närhet till naturen, byggs nu 4 nya bostäder i hög standard med bästa komfort.</p>
          <p>De fyra lägenheterna är alla på 3 rum och kök, har egen parkeringsplats direkt utanför dörren och en insynsskyddad terass. Inflyttningsdatum beräknas till Mars 2022.</p>
        </div>
        <div className="row-container">
          <div className="information-container">
            <h2>Utsidan</h2>
            <div className="information-text-container">
              <div className="information-text-entry">
                <p className="information-text-entry-title">Area:</p><p>75 kvm</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Typ:</p> <p>3 rum och kök</p>
              </div> 
              <div className="information-text-entry">
                <p className="information-text-entry-title">Uppvärmning:</p><p>Golvvärme och värmepump</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Anslutning:</p><p>Öppen fiber</p>
              </div>
            </div>
            <div className="row-image-container">
              <img src={fasad} alt="Logo" />
            </div>
          </div>
          <div className="information-container">
            <h2>Läge</h2>
            <div className="information-text-container">
              <div className="information-text-entry">
                <p className="information-text-entry-title">Adress:</p><p>Snapphanestigen 2</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Sjö- och grönområde:</p><p>100 m</p>
              </div> 
              <div className="information-text-entry">
                <p className="information-text-entry-title">Livsmedel:</p><p>200 m</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Centralstation:</p><p>400 m</p>
              </div>
            </div>
            <div className="row-image-container">
              <img src={karta} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="information-container">
            <h2>Insidan</h2>
            <div className="information-text-container">
              <div className="information-text-entry">
                <p className="information-text-entry">Area:</p><p>75 kvm</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Typ:</p> <p>3 rum och kök</p>
              </div> 
              <div className="information-text-entry">
                <p className="information-text-entry-title">Uppvärmning:</p><p>golvvärme och värmepump</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Anslutning:</p><p>öppen fiber</p>
              </div>
            </div>
            <div className="row-image-container">
              <img src={vardagsrum} alt="Logo" />
            </div>
          </div>
          <div className="information-container">
            <h2>Planlösning</h2>
            <div className="information-text-container">
              <div className="information-text-entry">
                <p className="information-text-entry">Area:</p><p>75 kvm</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Typ:</p> <p>3 rum och kök</p>
              </div> 
              <div className="information-text-entry">
                <p className="information-text-entry-title">Uppvärmning:</p><p>Golvvärme och värmepump</p>
              </div>
              <div className="information-text-entry">
                <p className="information-text-entry-title">Anslutning:</p><p>Öppen fiber</p>
              </div>
            </div>
            <div className="row-image-container">
              <img src={planskiss} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default RealEstateObject;