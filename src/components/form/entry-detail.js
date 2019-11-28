/* eslint-disable */
import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";
import EntryContact from "../form/entry-contact";

class Entry extends Component {

    handleDisplayPicture(picture) {
        return `http://localhost:5000/server/image/${picture}`;
    }
    
    handleSubmit = data => {
        axios.post("/server/entry/contact", data).then(res => {
            console.log(res);
        })
    }

    render() {
        const entry = this.props.location.state;
        return (
            <Row className="mt-5">
              <Col xxl="5" xl="4" lg="3" md="2" sm="2"></Col>
                <Col xxl="2" xl="4" lg="6" md="8" sm="8">
                    <Card id="entry-detail" key={entry.key}>
                    <CardImg top height="300" src={this.handleDisplayPicture(entry.picture)} alt="Card image cap" />
                    <CardBody>
                        <CardTitle id="post_name">{entry.name}</CardTitle>
                        <CardSubtitle id="post_cat">{entry.category}</CardSubtitle>
                        <CardText id="post_desc">{entry.description}</CardText>
                        <EntryContact submit={this.handleSubmit} filename={entry.picture}/>
                    </CardBody>      
                    </Card>
                </Col>
            </Row>
        );
    }
}

Entry.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,

}

export default Entry;
