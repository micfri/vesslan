import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import About from './about.js';
import Intresseanmalan from './intresseanmalan.js';

import RealEstateObject from './real-estate-object';

class PageComponent extends Component {

  components = {
    "": RealEstateObject,
    husen: RealEstateObject,
    intresseanmalan: Intresseanmalan,
    om: About
  };

  render() {
    const ComponentName = this.components[this.props.id];
    return <ComponentName id={this.props.id}/>
  }

}

export default PageComponent;