import React, { useState, useEffect} from 'react';

//Presentational Components
import Card from "./components/Card/Card";

function App() {

  const [loggedIn, setLoggedIn] = useState("");

  return (
    <div >
      <Card>test</Card>
    </div>
  );
}

export default App;
