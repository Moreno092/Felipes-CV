import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import '../App.css';
import'../App.js';



  class Mynavbar extends Component{
  render() {
    return (
  
            <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/Felipes-CV">MyPortfolio</Link>} scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/contact">Contact</Link>
      
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/Felipes-CV">MyPortfolio</Link>}>
                  <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>          
                    <Link to="/contact">Contact </Link>
      
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  
              </Content>
          </Layout>
      </div>
      
          );
        }
      }


    

export default Mynavbar;
