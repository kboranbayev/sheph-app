import React, {Component} from 'react';
import './App.css';
import Header from './components/static/header.js';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import About from './components/pages/about.js'
import Main from './components/pages/main.js'
import IncidentMap from './components/pages/incident-map.js'
import Submit from './components/pages/submit.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header backColor={'#005fbf'} />
          <div className="main-content-container container-fluid px-4">
            <Switch>
              <Route exact path="/" component={Main}  />
              <Route exact path="/about" component={About}  />
              <Route exact path="/incident-map" component={IncidentMap}  />
              <Route exact path="/submit" component={Submit}  />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
