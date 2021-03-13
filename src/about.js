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
        <div className="about-container">
          <div className="page-title-container"><h1>Om oss</h1></div>
          <div className="about-text-container box-750">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          
        </div>
      </div>
    );    
  }

}

export default About;