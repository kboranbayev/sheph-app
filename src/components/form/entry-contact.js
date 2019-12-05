/* disable-eslint */
import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PushSpinner } from "react-spinners-kit";

class EntryContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      message: "",
      filename: "",
      errors: "",
      loading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    const { submit } = this.props;
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      submit(this.state);
    }
  };

  validate = state => {
    const errors = {};
    return errors;
  };

  updateLoading() {
    this.setState({ loading: false });
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, message } = this.state;
    const { loading } = this.state;

    return (
      <Form className="mt-5" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="message">
            <b>Message</b>
          </Label>
          <Input
            type="textarea"
            value={message}
            onChange={this.handleInputChange}
            name="message"
            id="message"
            placeholder="Type a message here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="entryEmail">
            <b>Contact Email</b>
          </Label>
          <Input
            type="email"
            value={email}
            onChange={this.handleInputChange}
            name="email"
            id="entryEmail"
            placeholder="ex. email@live.com"
            required
          />
        </FormGroup>
        <Button className="mt-4" color="primary">
          {loading ? (
            <PushSpinner size={30} color="#686769" loading={loading} />
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </Form>
    );
  }
}

EntryContact.propTypes = {
  submit: PropTypes.func.isRequired
};

export default EntryContact;
