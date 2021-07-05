import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Routes
import LogIn from './screens/LogIn'
import Documentation from './screens/Documentation'

//Presentational Components
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar"


function App() {

  const [loggedIn, setLoggedIn] = useState("");

  return (
    <Router>
      <div >
        <NavBar />
        <Card>This is my submission for the Thinkific Fullstack Developer Challenge</Card>
      </div>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
