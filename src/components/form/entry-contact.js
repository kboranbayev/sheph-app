import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PushSpinner } from "react-spinners-kit";

class EntryContact extends React.Component {
  constructor(props) {
    super(props);
    const { filename } = this.props;
    this.state = {
      data: {
        email: "",
        message: "",
        filename
      },
      errors: "",
      loading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = e => {
    const { data } = this.state;
    const { props } = this;
    e.preventDefault();
    const errors = this.validate(this.state);
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      props.submit(data);
    }
  };

  validate = state => {
    const errors = {};
    return errors;
  };

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      data: {
        [name]: value
      }
    });
  }

  render() {
    const { data, loading } = this.state;
    return (
      <Form className="mt-5" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            value={data.message}
            onChange={this.handleInputChange}
            name="message"
            id="message"
            placeholder="Type a message here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="entryEmail">Contact Email</Label>
          <Input
            type="email"
            value={data.email}
            onChange={this.handleInputChange}
            name="email"
            id="entryEmail"
            placeholder="ex. email@live.com"
            required
          />
        </FormGroup>
        <Button className="mt-4" color="primary">
          {loading ? (
            <PushSpinner size={30} color="#686769" loading />
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </Form>
    );
  }
}

EntryContact.propTypes = {
  submit: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired
};

export default EntryContact;
