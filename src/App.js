import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/static/header.js";
import Footer from "./components/static/footer.js";
import Router from "./Router";

class App extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark",
    theme: localStorage.getItem("theme")
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: true
      });
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      this.setState({
        checked: false
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App-theme">
          <Header backColor="#0062b3" />
            <div className="main-content-container container-fluid px-4">
              <Router /><br/>
              <label className="switch">
              <input
                type="checkbox"
                // checked={this.state.checked}
                defaultChecked={this.state.checked}
                onChange={() => this.toggleThemeChange()}
              />
              <span className="slider round"/>
            </label>
              <p className="text-monospace">Switch Mode</p>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
