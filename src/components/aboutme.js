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
                 <h4 style={{color: 'grey'}}>Fullstack Developer, Wordpressdesigner &amp; Awesome</h4>
            
                 <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            
            <h4 style={{color: 'grey'}}>Welcome to my resume</h4>
            
            <p>

A social and driven guy who is passionate about fixing problem solutions

I am very easy to learn new things and adapted well. Works well in a group but can also take responsibility.

I think my previous experiences can be helpful in my job as a system developer! Because I have worked in web design, I am passionate about fixing problem solutions.

But of course I am also nice and helpful. From my latest job in wordpress design, I have learned to work fast and efficiently, under stress and pressure.

I hope you find what you read interesting! If you want to contact me regarding jobs etc, you can just click on the "Contact me" link below
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