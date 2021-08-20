import React from 'react';
import * as PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styles from './NotFound.module.scss';

const NotFound = ({ searchValue, beforeSearch }) => {
  const props = useSpring({
    to: { opacity: 1, scale: '1' },
    from: { opacity: 0, scale: '0' },
  });
  return (
    <animated.div style={props}>
      {searchValue !== '' && !beforeSearch ? (
        <div className={styles.error_wrapper}>
          <div className={styles.error_message}>
            <img src='/icons/404.svg' alt='' />
            <p>An error occurred, please try again later.</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </animated.div>
  );
};
NotFound.propTypes = {
  searchValue: PropTypes.string,
  beforeSearch: PropTypes.bool,
};
export default NotFound;
