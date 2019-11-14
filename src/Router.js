import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './pages/about.js'
import Main from './pages/main.js'
import IncidentMap from './pages/incident-map.js'
import Submit from './pages/submit.js'

class Router extends Component {
    render() {
      return (

        <Switch>
            <Route exact path="/" component={Main}  />
            <Route exact path="/about" component={About}  />
            <Route exact path="/incident-map" component={IncidentMap}  />
            <Route exact path="/submit" component={Submit}  />
        </Switch>

      );
    }
  }
  
  export default Router;