import React, {Component} from 'react';
import './App.css';
import Header from './components/static/header.js';
import Footer from './components/static/footer.js';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header backColor={'#0062b3'} />
          <div className="main-content-container container-fluid px-4">
            <Router />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
