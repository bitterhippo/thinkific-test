import React from 'react';
import Colors from '../Constants/Colors';

const NavBar = ({ isLoggedIn, userCredentials }) => {
  return (
    <div style={styles.navBarWrapper}>
      <div style={{...styles.textWrapper, marginLeft: '4vw'}}>
        <span style={styles.text}>Documentation</span>
      </div>
      <div style={{...styles.textWrapper, marginRight: '4vw'}}>
        <span style={styles.text}>Log In</span>
      </div>
    </div >
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