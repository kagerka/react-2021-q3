import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loadingIcon}></div>
    </div>
  );
};

export default Loading;
