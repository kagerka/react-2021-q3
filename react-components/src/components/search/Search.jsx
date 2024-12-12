import React from 'react';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.header}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.search}
        style={{
          backgroundImage: 'url(./icons/loupe.svg)',
        }}
      />
      <div className={styles.title}>React components</div>
    </div>
  );
}

export default Search;
