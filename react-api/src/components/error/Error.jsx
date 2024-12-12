import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './Error.module.scss';

const Error = ({ searchValue, beforeSearch }) => {
  return (
    <div className={styles.error_wrapper}>
      {searchValue !== '' && !beforeSearch ? (
        <div className={styles.error_message}>
          <img src="./icons/404.svg" alt="" />
          <p>An error occurred, please try again later.</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
Error.propTypes = {
  searchValue: PropTypes.string,
  beforeSearch: PropTypes.bool,
};
export default Error;
