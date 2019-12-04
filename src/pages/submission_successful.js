import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Jumbotron, Button } from 'reactstrap';
import PropTypes from "prop-types";

class SubmissionSuccessful extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div style={{height: '80vh'}}>
            <Container fluid>
                <h1 className="text-center mt-5">Submission Successful!</h1>
                    <Link className="mt-5" to="/" style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, -50%)'
    }}>Back To Main Page</Link>
            </Container>
        </div>
  
      );
    }
  }

  SubmissionSuccessful.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }
  
  export default SubmissionSuccessful;