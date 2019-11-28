import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className="container container-fluid text-center">
        <br/>
        <h3 className="text-danger">
          It started with a question... <br/>
          are your concerns being heard?
        </h3>
        <br/>
        <p className="text-secondary text-monospace">
          Imagine you’re walking down the traffic lights and you see a notice, <br/>
          a notice looking for a witness, but you aren’t one of them, what would you do? <br/>
          From our research, majority of people wouldn't care less and would simply walk-by. <br/>
          However, as of now, we live in a world where everyone can be of some help for <br/>
          those in need. And for that reason...
        </p>
        <br/>
        <h3 style={{color: 'black'}}>
          we brought Sheph!
        </h3>
        <br/>
        <p className="text-monospace">
          Whether you are looking for a witness, tracking your loved ones, or want to report an incident. <br/>
          With <a href="main.js">Sheph</a> you can now streamline the process of spreading more awareness <br/>
          to your concerns, based on your needs. <br/>
        </p>
        <br/>
        <hr  style={{borderColor : 'rgba(0,0,0,0.31)'}}/>
        <br/>
        <h3>
          Our Team
        </h3>
        <br/>
        <div className="card-columns">
          <div style={{backgroundColor:'rgba(0,0,0,0.10)'}}>
            <br/>
            <h4 style={{color: 'grey'}}>Alex Song</h4>
            <br/>
            <p style={{fontStyle: 'italic'}}>"Network guy!"</p>
            <br/>
          </div>
          <div style={{backgroundColor:'rgba(0,0,0,0.10)'}}>
            <br/>
            <h4 style={{color: 'grey'}}>Konstantin Boyarinov</h4>
            <br/>
            <p style={{fontStyle: 'italic'}}>"Testing guy!"</p>
            <br/>
          </div>
          <div style={{backgroundColor:'rgba(0,0,0,0.10)'}}>
            <br/>
            <h4 style={{color: 'grey'}}>Kuanysh Boranbayev</h4>
            <br/>
            <p style={{fontStyle: 'italic'}}>"Database guy!"</p>
            <br/>
          </div>
        </div>
        <br/>
        <br/>
        <div className="flex-column">
          <div style={{backgroundColor:'rgba(0,0,0,0.10)'}}>
            <br/>
            <h4 style={{color: 'grey'}}>Parm Dhaliwal</h4>
            <br/>
            <p style={{fontStyle: 'italic'}}>"Some guy!"</p>
            <br/>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default About;