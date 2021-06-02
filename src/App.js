import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Resume from './components/resume';





const App = () => (
  
      
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    </Switch>
    
    
    )
    
    export default App;



