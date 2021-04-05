import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';


class About extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
  

    return (
      <div className="About page-component">
          <div className="page-title-container"><h1>OM OSS</h1></div>
          <div className="description-text-box">
          <p>Futura Fastigheter startade som en idé bland oss fyra vänner om att starta ett fastighetsbolag. Den grundar sig i ett gemensamt intresse för fastigheter, bostadsutveckling och företagande. Då vi både har rötter i Markaryd och fortsatt intresse i dess utveckling så var platsen ett bra alternativ för att verkställa vår idé. Efter att ha hittat vad vi anser är en perfekt tomt för den typen av bostäder som vi vill bygga, inte minst när det kommer till det centrala läget, så bestämde vi oss för att sätta igång. Under 2021 kommer vi bygga 4 marklägenheter på Snapphanestigen 2 i det trivsamma Södergårdsområdet, och ser såklart fram emot att välkomna våra första hyresgäster till ett boende med det lilla extra i början av 2022. </p>
          <p>Har ni frågor eller funderingar så får ni gärna höra av er till oss, kontaktinformation ser ni nedan.</p>
          <p>Betty Andertoft, Denny Ottosson, Jakob Höjderfors och Michaela Fritiofsson</p>
        </div>

        </div>
    );    
  }

}

export default About;