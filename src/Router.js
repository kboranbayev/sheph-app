import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './pages/about.js'
import Main from './pages/main.js'
import Submit from './pages/submit.js'
import SubmissionSuccessful from './pages/submission_successful.js'

class Router extends Component {
    render() {
      return (

        <Switch>
            <Route exact path="/" component={Main}  />
            <Route exact path="/about" component={About}  />
            <Route exact path="/submit" component={Submit}  />
            <Route exact path="/submission-successful" component={SubmissionSuccessful} />
        </Switch>

      );
    }
  }
  
  export default Router;