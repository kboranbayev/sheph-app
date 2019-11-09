import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import TopNavigation from "./components/navigation/TopNavigation";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

const App = ({ location }) => (
  <div className="App">
    <Route location={location} path="/" component={TopNavigation} />
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/about" exact component={AboutPage} />
    <Route location={location} path="/contact" exact component={ContactPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
