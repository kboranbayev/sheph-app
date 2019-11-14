import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './components/pages/about.js'
import Main from './components/pages/main.js'
import IncidentMap from './components/pages/incident-map.js'
import Submit from './components/pages/submit.js'

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