/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewEntryForm from "../forms/NewEntryForm";
import { addEntry } from "../../actions/auth";

class NewEntryPage extends React.Component {
    submit = data => {
        this.props.addEntry(data).then(() => this.props.history.push("/"));
    }

    render() {
        
        return (
        <div>
            <h1>New Entry Page</h1>
            <NewEntryForm submit={this.submit} />
        </div>
        );
    }
}

NewEntryPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    addEntry: PropTypes.func.isRequired
};

export default connect(null, { addEntry })(NewEntryPage);