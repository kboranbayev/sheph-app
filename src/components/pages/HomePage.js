import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    submit = data =>
        console.log(data).preventDefault();

    render() {
        return (
            <div>HomePage<Link to="/new_entry">Report a Case</Link></div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

export default HomePage;
