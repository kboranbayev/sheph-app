/* eslint-disable */
import React, {Component} from 'react';
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
        picture: '',
        lastSeenDateTime: '',
        lastSeenLocation: '',
        incidentDate: '',
        incidentTime: '',
        incidentLocation: ''
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);
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

    handleSubmit(event)
    {
      fetch('http://localhost:3000/blahblah', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          category: this.state.category,
          description: this.state.description,
          lastSeenDateTime: this.state.lastSeenDateTime,
          lastSeenLocation: this.state.lastSeenLocation,
          incidentDate: this.state.incidentDate,
          incidentTime: this.state.incidentTime,
          incidentLocation: this.state.incidentLocation,
        }),
      });
      
      event.preventDefault();
    }

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

        photoFile = <FormGroup className="mt-4 mb-4">
          <Label for="photo">Photo of the missing person/pet</Label>
          <Input type="file" name="file" id="photo" />
          <FormText color="muted">
            Try to use the latest photo.
          </FormText>
        </FormGroup>
      }
      else if(this.state.category == "Vehicle Crash" || this.state.category == "Other Incidents")
      {
        photoFile = <FormGroup className="mt-4 mb-4">
          <Label for="photo">Photo of the incident</Label>
          <Input type="file" name="file" id="photo" />
          <FormText color="muted">
            Try to use the latest photo.
          </FormText>
        </FormGroup>

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
          {photoFile}
          <FormGroup>
            <Label for="description">Incident Description (optional)</Label>
            <Input type="textarea" value={this.state.description} onChange={this.handleInputChange} name="description" id="description" placeholder="Describe the Incident" />
          </FormGroup>
          <Button className="mt-4" color="primary">Submit</Button>
        </Form>
      );
    }
  }
  
  export default Submit;