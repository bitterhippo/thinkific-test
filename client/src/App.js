import React, { useState, useEffect} from 'react';

//Presentational Components
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar"


function App() {

  const [loggedIn, setLoggedIn] = useState("");

  return (
    <div >
      <NavBar />
      <Card>Welcome</Card>
    </div>
  );
}

export default App;
