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
        <div className={styles.content_wrapper}>
          <p>
            {props.country} ({props.year})
          </p>
          <div className={styles.actions}>
            <div className={styles.action_wrapper}>
              <img src="./icons/like.svg" alt="" className={styles.like} />
              <div>{props.like}</div>
            </div>
            <div className={styles.action_wrapper}>
              <img src="./icons/view.svg" alt="" className={styles.view} />
              <div>{props.view}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  year: PropTypes.number,
  like: PropTypes.number,
  view: PropTypes.number,
};
export default Card;
