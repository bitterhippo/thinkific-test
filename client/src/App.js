import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Routes
import Home from './screens/Home';
import Documentation from './screens/Documentation';
import SignIn from './screens/SignIn';

//Always rendered
import NavBar from "./components/NavBar/NavBar";


function App() {

  const [loggedIn, setLoggedIn] = useState("");

  return (
    <Router>
      <div >
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/documentation">
          <Documentation />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
