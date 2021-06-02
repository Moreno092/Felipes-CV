import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';



class AboutMe extends Component {
  render()  {
    return(
      <Grid  className="aboutme-grid">
    
          <Cell className="aboutme-cell" col={12}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
                 <h2 className="aboutme-h2">Felipe Nyberg</h2>
                 <h4 style={{color: 'grey'}}>Programmer,Student, Developer &amp; Awesome</h4>
            

            
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>City</h5>
            <p>Gothenburg</p>
            <h5>Phone</h5>
            <p><a href="tel:0761740977">Call me</a></p>
            <h5>Email</h5>
            <p><a href = "mailto: felipe_moreno@live.se">Send Email</a></p>
            <h5>Web</h5>
            <p>addicteddesign.se</p>
           <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
           </div>
          </Cell>


     </Grid>
    )
  }
}

export default AboutMe;