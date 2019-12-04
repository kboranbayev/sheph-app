/* eslint-disable */
import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Button, Row, Col, Badge} from "reactstrap";
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import Entry from "../components/form/entry-detail";
import { cpus } from "os";

const one_day_in_ms = 86400000;
let search_word = '';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.parameterToAccess;
    this.state = {}
    axios.get("/server/entries", null).then(res => {
      this.setState(res.data.data);
    });

    SearchResults.handleDisplayPicture = SearchResults.handleDisplayPicture.bind(this);
  }

  handleSearch = (formModel) => {
    this.setState({...formModel});
  }

  static handleDisplayPicture(picture) {
    return `http://35.166.123.68/server/image/${picture}`;
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

  // Find entries with keyword
  findEntries(list) {
    let new_list = [];

    for (let i = 0; i < list.length; ++i) {
      if (list[i].name.toLocaleLowerCase().search(search_word) != -1) {
        new_list.push(list[i]);
      }
    }
    return Object.values(new_list);
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
    let url_str = window.location.href;
    let url = new URL(url_str);

    search_word = url.searchParams.get("search").toLocaleLowerCase();

    if (Object.keys(this.state).length !== 0) {
      let entries_list = this.orderEntries(this.findEntries(Object.values(this.state)));
      entries = entries_list.map((key) => {
        const url = "/entry_detail";
        d = new Date(key.createdAt);

        if (this.checkNew(key)) {
          return (
            <Col lg="4" md="6" xs="12">
              <Card  xxl="5" xl="4" lg="3" md="2" sm="2">
                <CardImg top height="300px" max-width="100%" src={SearchResults.handleDisplayPicture(key.picture)} alt="Card image cap" />
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
            </Col>
          );
        } else {
          return (
            <Col lg="4" md="6" xs="12">
              <Card  xxl="5" xl="4" lg="3" md="2" sm="2">
                <CardImg top height="300px" max-width="100%" src={SearchResults.handleDisplayPicture(key.picture)} alt="Card image cap" />
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
            </Col>
          );
        }
      });
    }

    return (
      <Container className="fluid">
        <div className="mb-5">
          <h1 className="page_title mt-5">Search Results</h1>
          <Row>
            {entries}
          </Row>
          <div />
        </div>
      </Container>
    );
  }
}

export default SearchResults;
