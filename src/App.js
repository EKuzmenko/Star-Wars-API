import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShipsPage from './Pages/ShipsPage'
import PersonsPage from './Pages/PersonsPage'
import PlanetsPage from './Pages/PlanetsPage'
import Menu from './Elements/Menu'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
          <ShipsPage />
        </Route>
        <Route path="/persons">
          <Menu />
          <PersonsPage />
        </Route>
        <Route path="/planets">
          <Menu />
          <PlanetsPage />
        </Route>
        <Route path="*">
          <Menu />
          <div>Path error: 404</div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
