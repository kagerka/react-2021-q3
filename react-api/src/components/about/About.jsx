import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './About.module.scss';

const About = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  });
  return (
    <animated.div style={props} className={styles.about_wrapper}>
      <img data-testid='about' src='/images/about.svg' alt='' className={styles.main_image} />
    </animated.div>
  );
};

export default About;
