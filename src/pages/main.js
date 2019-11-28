/* eslint-disable */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from "reactstrap";
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import Entry from "../components/form/entry-detail";
import { cpus } from "os";

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
        const url = "/entry_detail";
        return (
            <Row className="mt-5">
              <Col xxl="5" xl="4" lg="3" md="2" sm="2"></Col>
              <Col xxl="2" xl="4" lg="6" md="8" sm="8">
                <Card key={key}>
                  <CardImg top height="300" src={Main.handleDisplayPicture(this.state[key].picture)} alt="Card image cap" />
                  <CardBody>
                  <CardTitle>{this.state[key].name}</CardTitle>
                  <CardSubtitle>{this.state[key].category}</CardSubtitle>
                  <CardText>{this.state[key].description}</CardText>
                  <Button>
                    <Link to={{ pathname: "/entry_detail", state: this.state[key] }} style={{ color: 'white' }}>Details</Link>
                  </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xxl="5" xl="4" lg="3" md="2" sm="2"></Col>
           </Row>
        );
      });
    }

    return (
      <div>
        <h1 className="page_title mt-5">Active Posts</h1>
        {entries}
        <div />
      </div>
    );
  }
}

export default Main;
