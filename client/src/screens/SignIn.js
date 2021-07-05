import React, { useState } from 'react';
import Card from "../components/Card/Card";

const SignIn = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandleChange = event => {
    setEmail(event.target.value);
  }

  const passwordHandleChange = event => {
    setPassword(event.target.value);
  }

  console.log(email);
  console.log(password);

  return (
    <div>
      <Card>
        <form
          style={styles.form}
          onSubmit={() => console.log('lol')}>
          <label>
            Email:
            <input type="text" onChange={emailHandleChange} />
          </label>
          <label>
            Password:
            <input type="text" onChange={passwordHandleChange} />
          </label>
          <input type="submit" value="Register" />
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