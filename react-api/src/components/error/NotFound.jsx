import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

const NotFound = ({ searchValue, beforeSearch }) => {
  return (
    <div>
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
    </div>
  );
};
NotFound.propTypes = {
  searchValue: PropTypes.string,
  beforeSearch: PropTypes.bool,
};
export default NotFound;
