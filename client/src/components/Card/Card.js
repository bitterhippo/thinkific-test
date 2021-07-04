import React from 'react';

const Card = props => {
  return (
    <div style={styles.cardWrapper}>
      {props.childern}
    </div>
  )
};

const styles = {
  cardWrapper: {
    backgroundColor: 'green'
  }
}

export default Card;