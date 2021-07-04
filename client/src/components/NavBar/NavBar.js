import React from 'react';
import Colors from '../Constants/Colors';

const NavBar = props => {
  return (
    <div style={styles.navBarWrapper}>
      TEST
    </div>
  )
};

const styles = {
  navBarWrapper: {
    height: '5vh',
    backgroundColor: Colors.backgroundOutline,
    color: 'white',
    borderBottom: `1vh solid ${Colors.detailing}`
  }
}

export default NavBar;