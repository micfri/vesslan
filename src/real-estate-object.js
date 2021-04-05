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
import iframe from 'react-iframe';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import PhotoGallery from './photo-gallery';
import { NavLink, Link, Route, Switch } from 'react-router-dom';


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
      <div className="RestaurantMenu page-component white">
        <div className="page-title-container"><h1>SÖDERGÅRD</h1></div>
        <div className="description-text-box">
          <p>I ett unikt läge i centrala Markaryd, och i direkt närhet till naturen, byggs nu 4 nya bostäder i hög standard med bästa komfort.</p>
          <p>De fyra lägenheterna är alla på 3 rum och kök, har egen parkeringsplats direkt utanför dörren och en insynsskyddad terass. Inflyttningsdatum beräknas till Mars 2022.</p>
        </div>
        <div className="light">
          <div className="row-container">
            <h2>BOENDET</h2>
          </div>
          <div className="row-container">
            <div className="information-container">
       
              <div className="information-text-container">
                <div className="information-text-entry">
                  <p className="information-text-entry-title">Storlek:</p><p>75 kvm</p>
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
            </div>

            <div className="information-container">
              
              <div className="information-text-container">
                <div className="information-text-entry">
                  <p className="information-text-entry-title">Kök:</p><p>Fullutrustat Marbodal-kök med stor kyl och frys, ugn, micro och diskmaskin</p>
                </div>
                <div className="information-text-entry">
                  <p className="information-text-entry-title">Badrum:</p><p>Helkaklat kombinerat bad- och tvättrum i behagliga färger, utrustat med tvättmaskin och torktumlare</p>
                </div> 
              </div>
            </div>
          </div>
          <div className="row-container light">
            <div className="gallery-container">
              <PhotoGallery> </PhotoGallery>
            </div>
          </div>
        </div>
        <div className="row-container">
            <h2>LÄGET</h2>
        </div>
        <div className="row-container white">
          <div className="information-container">
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
          </div>

        </div>
        <div>
          <NavLink to="/intresseanmalan" className="nav-item" activeClassName="selected">
            Intressanmälan
          </NavLink >

        </div>
      </div>
    );
  }


}

export default RealEstateObject;