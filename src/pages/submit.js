/* eslint-disable */
import React, { Component } from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Submit extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        email: '',
        name: '',
        category: 'Missing Reports',
        description: '',
        lastSeenDateTime: '',
        lastSeenLocation: '',
        incidentDate: '',
        incidentTime: '',
        incidentLocation: '',
        file: null,
        filename: ''
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleUploadFile = this.handleUploadFile.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleUploadFile(event) {
      let file = event.target.files[0];
      if (file) this.setState({ file: event.target.files[0]});
    }
  
    handleSubmit(event)
    {
      event.preventDefault();
      const errors = this.validate(this.state);
      const data = new FormData();
      data.append('file', this.state.file);
      data.append('filename', this.state.file.name);
      data.append('name', this.state.name);
      data.append('email', this.state.email);
      data.append('description', this.state.description);
      data.append('category', this.state.category);
      data.append('lastSeenDateTime', this.state.lastSeenDateTime);
      data.append('lastSeenLocation', this.state.lastSeenLocation);
      data.append('incidentTime', this.state.incidentTime);
      data.append('incidentDate', this.state.incidentDate);
      data.append('incidentLocation', this.state.incidentLocation);
      
      axios.post(`/server/add`, data).then((res) => {
        // res need to handle for errors
        this.props.history.push("/");
      });
      
      
    }

    validate(state) {}
  
    render() {

      let lastSeenDateTime;
      let lastSeenLocation;
      let incidentDate;
      let incidentTime;
      let photoFile;
      let incidentLocation;
      if(this.state.category == "Missing Reports")
      {
        lastSeenDateTime = <FormGroup>
          <Label for="lastSeenDateTime"> Last Seen Date/Time</Label>
          <Input type="datetime" value={this.state.lastSeenDateTime} onChange={this.handleInputChange} name="lastSeenDateTime" id="lastSeenDateTime" placeholder="ex. on October 5th at around 5pm" required />
        </FormGroup>

        lastSeenLocation = <FormGroup>
          <Label for="lastSeenLocation">Last Seen Location</Label>
          <Input type="text" value={this.state.lastSeenLocation} onChange={this.handleInputChange} name="lastSeenLocation" id="lastSeenLocation" placeholder="ex. near Mundy Park in Burnaby" required />
        </FormGroup>;

        photoFile = <Label for="photo">Photo of the missing person/pet</Label>
      }
      else if(this.state.category == "Vehicle Crash" || this.state.category == "Other Incidents")
      {
        photoFile = <Label for="photo">Photo of the incident</Label>
          

        incidentDate = <FormGroup>
          <Label for="incidentDate">Incident Date</Label>
          <Input
            value={this.state.incidentDate}
            onChange={this.handleInputChange}
            type="date"
            name="incidentDate"
            id="incidentDate"
            placeholder="date placeholder"
            required
          />
        </FormGroup>

        incidentTime = <FormGroup>
          <Label for="incidentTime">Incident Time</Label>
          <Input
            type="text"
            name="incidentTime"
            value={this.state.incidentTime}
            onChange={this.handleInputChange}
            id="incidentTime"
            placeholder="ex. at around 5 PM"
            required />
        </FormGroup>

        incidentLocation = <FormGroup>
          <Label for="lastSeenLocation">Incident Location</Label>
          <Input type="text" value={this.state.incidentLocation} onChange={this.handleInputChange}  name="incidentLocation" id="incidentLocation" placeholder="ex. near Mundy Park in Burnaby" required />
        </FormGroup>;
      }

      return (
        <Form className="mt-5" onSubmit={this.handleSubmit}>
          <h1 className="mb-4">Submit an Incident</h1>
          <FormGroup>
            <Label for="reporterName">Name</Label>
            <Input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" id="reporterName" placeholder="" required />
          </FormGroup>
          <FormGroup>
            <Label for="reporterEmail">Contact Email</Label>
            <Input type="email" value={this.state.email} onChange={this.handleInputChange} name="email" id="reporterEmail" placeholder="ex. email@live.com" required />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input type="select" value={this.state.category} onChange={this.handleInputChange} name="category" id="category" >
              <option>Missing Reports</option>
              <option>Vehicle Crash</option>
              <option>Other Incidents</option>
            </Input>
          </FormGroup>
          {lastSeenDateTime}
          {lastSeenLocation}
          {incidentDate}
          {incidentTime}
          {incidentLocation}
          <FormGroup className="mt-4 mb-4">
            {photoFile}
            <Input type="file" onChange={this.handleUploadFile} name="file" id="photo" required />
            <FormText color="muted">
              Try to use the latest photo.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="description">Incident Description (optional)</Label>
            <Input type="textarea" value={this.state.description} onChange={this.handleInputChange} name="description" id="description" placeholder="Describe the Incident" />
          </FormGroup>
          <Button className="mt-4" color="primary">Submit</Button>
        </Form>
      );
    }
  }
  
Submit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default Submit;