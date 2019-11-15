import React from "react";
import { Route } from "react-router-dom";
import TopNavigation from "./components/navigation/TopNavigation";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import NewEntryPage from "./components/pages/NewEntryPage";

const App = () => (
  <div className="App">
    <Route path="/" component={TopNavigation} />
    <Route path="/" exact component={HomePage} />
    <Route path="/about" exact component={AboutPage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/new_entry" exact component={NewEntryPage} />
  </div>
);


export default App;
