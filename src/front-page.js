import React from 'react';
import './App.css';
import './vesslan-layout.css';
import Main from './main.js';
import resources from './resources.json';
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import logo from './images/logos/futura-logo-right.svg';


  
function FrontPage() {
  return (
    <div className="FrontPage">
      <div className="rowContainer">
        <img className="header-logo" src={logo} alt="Logo" />
      </div>
      <div className="rowContainer nav-row">
        <NavLink to="/husen" className="nav-item" activeClassName="selected">
          Husen
        </NavLink >
        <NavLink to="/intresseanmalan" className="nav-item" activeClassName="selected">
          Intressanmälan
        </NavLink> 
        <NavLink to="/om" className="nav-item" activeClassName="selected">
          Om Futura Fastigheter
        </NavLink>
      </div>
      
    </div>
  );
    
  
};

export default FrontPage;


