import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../Constants/Colors';

const UnknownUser = () => {
  return (
    <div style={styles.navBarWrapper}>
      <div style={styles.miniNavBarWrapper}>
        <div style={{ ...styles.textWrapper, marginLeft: '4vw' }}>
          <Link to="/" style={styles.text}>Welcome Page</Link>
        </div>
        <div style={{ ...styles.textWrapper, marginLeft: '4vw' }}>
          <Link to="/documentation" style={styles.text}>Documentation</Link>
        </div>
      </div>
      <div style={{ ...styles.textWrapper, marginRight: '4vw' }}>
        <Link to="/signin" style={styles.text}>Sign In</Link>
      </div>
    </div >
  )
};

const KnownUser = () => {
  return (
    <div style={styles.navBarWrapper}>
      <div style={{ ...styles.textWrapper, marginLeft: '4vw' }}>
        <span style={styles.text}>Documentation</span>
      </div>
      <div style={{ ...styles.textWrapper, marginLeft: '4vw' }}>
        <span style={styles.text}>Current Integer</span>
      </div>
      <div style={{ ...styles.textWrapper, marginRight: '4vw' }}>
        <span style={styles.text}>Sign Out</span>
      </div>
    </div >
  )
}

const NavBar = ({ isLoggedIn, userCredentials }) => {
  return (
    <>
      {isLoggedIn !== true && UnknownUser()}
      {isLoggedIn === true && KnownUser()}
    </>
  )
};

const styles = {
  navBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: '5vh',
    backgroundColor: Colors.backgroundOutline,
    color: 'white',
    borderBottom: `1vh solid ${Colors.detailing}`
  },
  textWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  text: {
    color: 'white',
    fontSize: '16',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  miniNavBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: '5vh',
    backgroundColor: Colors.backgroundOutline,
    color: 'white',
  }
}

export default NavBar;