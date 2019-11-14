import React, {Component} from 'react';
import './App.css';
import Header from './components/static/header.js';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header backColor={'#005fbf'} />
          <div className="main-content-container container-fluid px-4">
            <Router />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
