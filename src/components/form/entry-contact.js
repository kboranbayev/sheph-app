/* disable-eslint */
import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PushSpinner } from "react-spinners-kit";
import Submit from "../../pages/submit";

class EntryContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        message: "",
        filename: this.props.filename
      },
      errors: "",
      loading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

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

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data);
    }
  };

  validate = state => {
    const errors = {};
    return errors;
  };

  render() {
    return (
      <Form className="mt-5" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="message"><b>Message</b></Label>
          <Input
            type="textarea"
            value={this.state.data.message}
            onChange={this.handleInputChange}
            name="message"
            id="message"
            placeholder="Type a message here"
          />
        </FormGroup>
        <FormGroup>
          <Label for="entryEmail"><b>Contact Email</b></Label>
          <Input
            type="email"
            value={this.state.data.email}
            onChange={this.handleInputChange}
            name="email"
            id="entryEmail"
            placeholder="ex. email@live.com"
            required
          />
        </FormGroup>
        <Button className="mt-4" color="primary">
          {this.state.loading ? (
            <PushSpinner
              size={30}
              color="#686769"
              loading={this.state.loading}
            />
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
