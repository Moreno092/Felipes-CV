import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,  } from 'react-mdl';
import '../App.css';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Felipe Nyberg</h2>
            <img
            type="image"
              src= "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hope you liked what you saw and that we will hear from you in the near future!</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <a href="tel:0761740977">Call me</a>
                  </ListItemContent>
                </ListItem>                

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a href = "mailto: felipe_moreno@live.se">Send Email</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true"/>
                    <a href="https://github.com/Moreno092" rel="noopener noreferrer" target="_blank">Github</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/felipe-nyberg/">LinkedIn</a >
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;