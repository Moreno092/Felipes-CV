import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import '../App.js';
import '../App.css';



class Landing extends Component {

  
  constructor(){
    super();
    this.state = {
      numberOfRepos: 0

    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/Moreno092/repos')
    .then(response => response.json())
    .then(json => { console.log(json.length)
       this.setState({
         numberOfRepos: json.length
       })
    });
  }
  render() {
    return(
        
      <div style={{width: '100%', margin: 'auto', padding: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= ""
              alt="avatar"
              className="avatar-img-landing"
              />

            <div className="banner-text">
              <h1>Felipe Nyberg </h1>
              <h2 className="landing-h2">This is my online resume</h2>
              <h3 className="landing-h3">Made with</h3>
              
            <hr/>
            

          <p>HTML/CSS | Fontawesome | JavaScript | React | React Native | NodeJS | React-MDL </p>
          
          {/* <p><Button raised accent  href="/aboutme" ref="noopener noreferrer"><u>Click here to read more about me</u></Button></p> */}
          <hr />
          <div>
              <p>Number of repos right now: {this.state.numberOfRepos}</p>
            </div>

        <div className="social-links">

          {/* LinkedIn */}
          <a data-cy="LinkedInTest"  href="https://www.linkedin.com/in/felipe-nyberg/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Moreno092" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
      
    )
  }
}


export default Landing;