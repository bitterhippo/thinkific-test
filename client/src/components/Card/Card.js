import React from 'react';
import Colors from '../Constants/Colors';

const Card = props => {
  return (
    <div style={styles.cardWrapper}>
      {props.children}
    </div>
  )
};

const styles = {
  cardWrapper: {
    backgroundColor: Colors.background,
    border: "1px solid black",
    width: "80%",
    boxShadow: '5px, 10px',
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: "10px 10px"
  }
}

export default Card;