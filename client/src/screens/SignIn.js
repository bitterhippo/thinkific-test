import React, { useState } from 'react';
import Card from "../components/Card/Card";

//API Module

import API from '../API/API';

const SignIn = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const emailHandleChange = event => {
    setEmail(event.target.value);
  }

  const passwordHandleChange = event => {
    setPassword(event.target.value);
  }

  const handleSubmit = event => {
    API.Login(email, password, setUserData);
    event.preventDefault();
  }

  console.log(userData);

  return (
    <div>
      <Card>
        <form
          style={styles.form}
          onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" onChange={emailHandleChange} />
          </label>
          <label>
            Password:
            <input type="text" onChange={passwordHandleChange} />
          </label>
          <input type="submit" value="Register"/>
        </form>
      </Card>
    </div>
  )
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }
}

export default SignIn;