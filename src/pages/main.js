/* eslint-disable */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import Entry from "../components/form/entry-detail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    axios.get("/server/entries", null).then(res => {
      this.setState(res.data.data);
    });

    this.handleDisplayPicture = this.handleDisplayPicture.bind(this);
  }

  handleDisplayPicture(picture) {
    return `http://localhost:5000/server/image/${picture}`;
  }

  render() {
    let entries = null;
    if (Object.keys(this.state).length !== 0) {
      entries = Object.keys(this.state).map((key) => {
        const url = "/entry_detail";
        return (
            <Card key={key}>
              <CardImg top height="300" src={this.handleDisplayPicture(this.state[key].picture)} alt="Card image cap" />
              <CardBody>
              <CardTitle>{this.state[key].name}</CardTitle>
              <CardSubtitle>{this.state[key].category}</CardSubtitle>
              <CardText>{this.state[key].description}</CardText>
              <Button>
                <Link to={{ pathname: "/entry_detail", state: this.state[key] }} style={{ color: 'white' }}>Details</Link>
              </Button>
              </CardBody>
            </Card>
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
