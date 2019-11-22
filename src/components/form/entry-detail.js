/* eslint-disable */
import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
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
            <Card id="entry-detail" key={entry.key}>
              <CardImg top width="100%" src={this.handleDisplayPicture(entry.picture)} alt="Card image cap" />
              <CardBody>
              <CardTitle>{entry.name}</CardTitle>
              <CardSubtitle>{entry.category}</CardSubtitle>
              <CardText>{entry.description}</CardText>
                </CardBody>
                <EntryContact submit={this.handleSubmit} filename={entry.picture}/>
            </Card>
        );
    }
}

Entry.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,

}

export default Entry;
