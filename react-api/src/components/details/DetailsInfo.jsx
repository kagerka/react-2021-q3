import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Details.module.scss';
import { ELEVEN, NINETEEN, ONE_THOUSAND, TEN, ZERO } from '../../constants/constants';

const DetailsInfo = () => {
  const imageDetails = useSelector((state) => state.imageDetails.imageDetails);
  const imageSrc = useSelector((state) => state.imageSrc.imageSrc);

  return (
    <div className={styles.card_wrapper}>
      <a href={imageDetails.urls.url[0]._content} target='_blank' rel='noreferrer'>
        <img src={imageSrc.size[6].source} alt='' className={styles.details_img} />
      </a>
      <div className={styles.content_wrapper}>
        <div>
          <span className={styles.titles}>Image ID:</span> {imageDetails.id}
        </div>

        {imageDetails.title._content ? (
          <div>
            <span className={styles.titles}>Title:</span> {imageDetails.title._content}
          </div>
        ) : (
          ''
        )}

        {imageDetails.owner.realname ? (
          <div>
            <span className={styles.titles}>Author:</span> {imageDetails.owner.realname}
          </div>
        ) : (
          ''
        )}

        <div>
          <span className={styles.titles}>Nickname:</span> {imageDetails.owner.username}
        </div>

        <div>
          <span className={styles.titles}>Date upload:</span>{' '}
          {new Date(imageDetails.dateuploaded * ONE_THOUSAND).toISOString().slice(ZERO, TEN)}
          <span className={`${styles.titles} ${styles.at}`}> at </span>
          {new Date(imageDetails.dateuploaded * ONE_THOUSAND).toISOString().slice(ELEVEN, NINETEEN)}
        </div>

        {imageDetails.description._content ? (
          <div>
            <span className={styles.titles}>Description:</span> {imageDetails.description._content}
          </div>
        ) : (
          ''
        )}
        <div>
          <span className={styles.titles}>Views:</span> {imageDetails.views}
        </div>
      </div>
    </div>
  );
};
export default DetailsInfo;
