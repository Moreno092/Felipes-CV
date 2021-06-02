import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import '../App.css';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
     
          <Cell className="cell-resume-left" col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />

            </div>
       

            {/* <h2 style={{paddingTop: '2em'}}>Felipe Nyberg</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>City</h5>
            <p>Gothenburg</p>
            <h5>Phone</h5>
            <p><a href="tel:0761740977">Call me</a></p>
            <h5>Email</h5>
            <p><a href = "mailto: felipe_moreno@live.se">Send Email</a></p>
            <h5>Web</h5>
            <p>addicteddesign.se</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
                              <div className="animated-text">
         
         <div className="line">Student</div>
         <div className="line">Developer</div>
         <div className="line"> &amp; </div>
         <div className="line">Awesome</div>
        </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Art Collage"
              schoolDescription="A diploma course where I got to study html5, Wordpress, SEO and how to structure your own website."
               />

               <Education
                 startYear={2020}
                 endYear={2022}
                 schoolName="Handelsakademin"
                 schoolDescription="At Handelsakademin I studied Object Oriented Programming (OOP) where I learned to be a complete programmer during my two years where I learned to handle c #, javascript, html, css, and also work in the same way as you do in working life with scrum ."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="self-employed"
              jobDescription="I had my own company in wordpress web design where I designed and made websites for customers around Gothenburg"
              />

              <Experience
                startYear={2020}
                endYear={'now'}
                jobName="freelancer"
                jobDescription="right now I freelance most at a large web development company in sthlm called EmpireWebbByrå where I help design and code websites"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                      skill="C#"
                      progress={100}
                      />            
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                   <Skills
                skill="javascript"
                progress={50}
                />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Resume;