/* eslint-disable */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Button, Row, Col, Badge} from "reactstrap";
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import Entry from "../components/form/entry-detail";
import { cpus } from "os";

const expiry_date_in_ms = 518400000; // 6 Day expiry
const one_day_in_ms = 86400000;

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

  deleteEntries() {
    const data = new FormData();
    if (Object.keys(this.state).length !== 0) {
      let entries = Object.keys(this.state).map((key) => {
        // If today's date minus entry create date is equal or longer than 6 days
        if ((Date.now() - new Date(this.state[key].createdAt)) >= expiry_date_in_ms) {
          //data.append('entry', this.state[key]);
          console.log(this.state[key]);
          axios.post("/server/delete/entry", this.state[key]).then((res) => {
            console.log(res);
            console.log(res.data);
          });
        }
      });
    }
  }

  // orders list of posts by most recent to oldest
  orderEntries(list) {
    let tmp = null;
    for (let i = 0; i < list.length - 1; ++i) {
      for (let j = i + 1; j < list.length; ++j) {
        if (Date.parse(list[i].createdAt) < Date.parse(list[j].createdAt)) {
          tmp = list[j];
          list[j] = list[i];
          list[i] = tmp;
        }
      }
    }
    return list;
  }

  // Check if a post is a day old or not, if yes, display New badge
  checkNew(post) {
    if ((Date.now() - Date.parse(post.createdAt)) <= one_day_in_ms)
      return true;
    return false;
  }

  render() {
    let entries = null;
    let d = "";

    if (Object.keys(this.state).length !== 0) {
      this.deleteEntries();
      let entries_list = this.orderEntries(Object.values(this.state));

      entries = entries_list.map((key) => {
        const url = "/entry_detail";
        d = new Date(key.createdAt);

        if (this.checkNew(key)) {
          return (
            <Col key={key._id} lg="4" md="6" xs="12">
              <Card  xxl="5" xl="4" lg="3" md="2" sm="2">
                <CardImg top  height="300px" max-width="100%" src={Main.handleDisplayPicture(key.picture)} alt="Card image cap" />
                <CardBody>
                <CardTitle id="post_name">{key.name} <Badge color="secondary">New</Badge></CardTitle>
                <CardSubtitle id="post_cat">{key.category}</CardSubtitle>
                <CardText id="post_desc">
                  {key.description}<br/><br/><b>Created: </b>{d.toDateString() + ', ' + d.toLocaleTimeString()}
                </CardText>
                <Button>
                  <Link to={{ pathname: "/entry_detail", state: key }} style={{ color: 'white' }}>Details</Link>
                </Button>
                </CardBody>
              </Card>
              <br/>
            </Col>
          );
        } else {
          return (
            <Col key={key._id} lg="4" md="6" xs="12">
              <Card  xxl="5" xl="4" lg="3" md="2" sm="2">
                <CardImg top  height="300px" max-width="100%" src={Main.handleDisplayPicture(key.picture)} alt="Card image cap" />
                <CardBody>
                <CardTitle id="post_name">{key.name}</CardTitle>
                <CardSubtitle id="post_cat">{key.category}</CardSubtitle>
                <CardText id="post_desc">
                  {key.description}<br/><br/><b>Created: </b>{d.toDateString() + ', ' + d.toLocaleTimeString()}
                </CardText>
                <Button>
                  <Link to={{ pathname: "/entry_detail", state: key }} style={{ color: 'white' }}>Details</Link>
                </Button>
                </CardBody>
              </Card>
              <br/>
            </Col>
          );
        }
      });
    }

    return (
      <Container className="fluid">
        <div className="mb-5">
          <h1 className="page_title mt-5">Active Posts</h1>
          <h6>***Posts will be automatically removed after 6 days from date created***</h6>
          <Row>
            {entries}
          </Row>
          <div />
        </div>
      </Container>
    );
  }
}

export default Main;
