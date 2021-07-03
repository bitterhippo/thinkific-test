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

  }
}

export default Card;