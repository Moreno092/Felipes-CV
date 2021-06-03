import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Resume from './components/resume';
import Mynavbar from './components/mynavbar';





const App = () => (
  
     <div> 
       <Mynavbar />
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    </Switch>
    
    </div>
    
   )
    

    export default App;
