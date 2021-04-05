import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import PageComponent from './page-component.js';
import Header from './header.js';
import Footer from './footer.js';
import $ from 'jquery';




class Main extends Component {

  showSettings (event) {
    event.preventDefault();  
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    
  }

  
 

  render() {
    return (
      <div className="Main" id="page-wrap">
        <div className="content-middle">
          {/* <MenuList list={resources.pages}/> */}
          <div className="top-row">
            <Header />
            
          </div>
          <div className="rowContainer nav-row" id="myHeader">
            <NavLink to="/husen" className="nav-item" activeClassName="selected">
              PROJEKTET 
            </NavLink >
            <NavLink to="/intresseanmalan" className="nav-item" activeClassName="selected">
              INTRESSEANMÄLAN
            </NavLink> 
            <NavLink to="/om" className="nav-item" activeClassName="selected">
              OM FUTURA FASTIGHETER
            </NavLink>
          </div>
          <div className="middle-row">
            
            <Switch >
              <Route exact path={"/"}>
                <PageComponent id={""}/>
              </Route>
              {resources.pages.map(route => (
                  
                <Route key={route.id} path={"/" + route.id}>
                  <PageComponent id={route.id}/>
                </Route> 
              ))}
            </Switch>
          </div>
          <div className="bottom-row">
            <Footer />
            
          </div>
        </div>
      </div>
    );    
  }

}

export default Main;


const MenuList = ({ list }) => (
  <Menu pageWrapId={"page-wrap"}>
    {list.map(menuItem => (
      <a key={menuItem.id} id={menuItem.id} className="menu-item" href={"/" + menuItem.id}>{menuItem.title}</a>
    ))}
  </Menu>
);

