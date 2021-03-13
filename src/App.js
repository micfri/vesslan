import React from 'react';
import './App.css';
import './vesslan-layout.css';
import './front-page.css';
import Main from './main.js';
import resources from './resources.json';
import { NavLink, Link, Route, Switch } from 'react-router-dom';
import FrontPage from './front-page.js';


  
function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path={"/"}>
          <FrontPage> </FrontPage>
        </Route>
        <Route path={"/"}>
          <Main />
        </Route>
        
      </Switch>

      
    </div>
  );
    
  
};

export default App;


