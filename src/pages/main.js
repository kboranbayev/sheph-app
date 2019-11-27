/* eslint-disable */
import React, { Component } from "react";
import {  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    axios.get("/server/entries", null).then(res => {
      this.setState(res.data.data);
    });

    Main.handleDisplayPicture = Main.handleDisplayPicture.bind(this);
  }

  static handleDisplayPicture(picture) {
    return `http://localhost:5000/server/image/${picture}`;
  }

  render() {
    let entries = null;
    if (Object.keys(this.state).length !== 0) {
      entries = Object.keys(this.state).map((key) => {
        return (
          <div className="col-4">
            <br/>
            <Card key={key}>
              <CardImg top height="300" src={Main.handleDisplayPicture(this.state[key].picture)} alt="Card image cap" />
              <CardBody>
              <CardTitle>{this.state[key].name}</CardTitle>
              <CardSubtitle>{this.state[key].category}</CardSubtitle>
              <CardText>{this.state[key].description}</CardText>
              <Button>Details</Button>
              </CardBody>
            </Card>
            <br/>
          </div>
        );
      });
    }

    return (
      <div>
        <h1>Main Page</h1>
        {entries}
        <div />
      </div>
    );
  }
}

export default Main;
