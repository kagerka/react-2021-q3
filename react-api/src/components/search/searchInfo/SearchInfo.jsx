import React from 'react';
import styles from './SearchInfo.module.scss';

function SearchInfo() {
  return (
    <div>
      <div className={styles.search_info}>
        <img src='./icons/bot.svg' alt='' />
        <p>
          Type the text that you are looking for in the search field and click button &quot;Search&quot;. It will
          automatically show you results of the images.
        </p>
      </div>
    </div>
  );
}

export default SearchInfo;
