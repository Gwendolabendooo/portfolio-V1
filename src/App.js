import React from 'react';
import './App.css';
import './nav.css';
import './propos.css';
import './parcours.css';
import './experience.css';
import './competences.css';
import './projets.css';
import './rattrapage.css';
import './contact.css';
import './header.css';
import './footer.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from './views/index';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
