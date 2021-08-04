import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card} key={props.id}>
      <div className={styles.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.year}</p>
        <div>
          <img src="./icons/like.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
};
export default Card;
