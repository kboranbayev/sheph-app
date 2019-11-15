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
        category: '',
        description: '',
        picture: ''
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,

        }),
      });
      event.preventDefault();
    }

    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="reporterName">Name</Label>
            <Input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" id="reporterName" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="reporterEmail">Email</Label>
            <Input type="email" value={this.state.email} onChange={this.handleInputChange} name="email" id="reporterEmail" placeholder="ex. billgates@microsoft.com" />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input type="select" value={this.state.category} onChange={this.handleInputChange} name="category" id="category" placeholder="" />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>

        
        // <div>
        //   <h1> Submit Report </h1><br /><br />
        //   <form onSubmit={this.handleSubmit}>

        //     <label>Name:
        //       <input type="text" value={this.state.email} onChange={this.handleChange} />
        //     </label><br /><br />
        //     <label>Email:
        //       <input type="email" value={this.state.email} onChange={this.handleChange} />
        //     </label><br />
        //     <input type="submit" value="Submit" />
        //   </form>
        // </div>
      );
    }
  }
  
  export default Submit;