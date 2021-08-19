import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <img src='/images/about.svg' alt='' className={styles.main_image} />
    </div>
  );
};

export default About;
