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
      console.log(res.data.data[0].createdAt > res.data.data[1].createdAt);
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
            <Card key={key} id="post_card">
              <CardImg top id="post_img" src={this.handleDisplayPicture(this.state[key].picture)} alt="Card image cap" />
              <CardBody>
                <CardTitle id="post_name">{this.state[key].name}</CardTitle>
                <CardSubtitle id="post_cat">{this.state[key].category}</CardSubtitle>
                <CardText id="post_desc">{this.state[key].description}</CardText>
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
        <h1 className="page_title">Active Posts</h1>
        {entries}
        <div />
      </div>
    );
  }
}

export default Main;
