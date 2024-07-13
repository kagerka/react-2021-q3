import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './NotFound.module.scss';

const NotFound = () => {
  const props = useSpring({
    to: { opacity: 1, scale: '1' },
    from: { opacity: 0, scale: '0' },
  });
  return (
    <animated.div style={props}>
      <div className={styles.error_wrapper}>
        <div className={styles.error_message}>
          <img src='/icons/404.svg' alt='' />
          <p>An error occurred, please try again later.</p>
        </div>
      </div>
    </animated.div>
  );
};

export default NotFound;
