import React from 'react';
import Colors from '../Constants/Colors';

const UnknownUser = () => {
  return (
    <div style={styles.navBarWrapper}>
      <div style={{...styles.textWrapper, marginLeft: '4vw'}}>
        <span style={styles.text}>Welcome Page</span>
      </div>
      <div style={{...styles.textWrapper, marginLeft: '4vw'}}>
        <span style={styles.text}>Documentation</span>
      </div>
      <div style={{...styles.textWrapper, marginRight: '4vw'}}>
        <span style={styles.text}>Sign In</span>
      </div>
    </div >
  )
};

const KnownUser = () => {
  return (
    <div style={styles.navBarWrapper}>
      <div style={{...styles.textWrapper, marginLeft: '4vw'}}>
        <span style={styles.text}>Documentation</span>
      </div>
      <div style={{...styles.textWrapper, marginLeft: '4vw'}}>
        <span style={styles.text}>Current Integer</span>
      </div>
      <div style={{...styles.textWrapper, marginRight: '4vw'}}>
        <span style={styles.text}>Sign Out</span>
      </div>
    </div >
  )
}

const NavBar = ({ isLoggedIn, userCredentials }) => {
  return (
    <>
    { isLoggedIn !== true && UnknownUser() }
    { isLoggedIn === true && KnownUser() }
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
    fontSize: '16',
    fontWeight: 'bold',
  }
}

export default NavBar;