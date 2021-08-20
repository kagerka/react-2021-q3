import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';
// import { ELEVEN, NINETEEN, ONE_THOUSAND, TEN, ZERO } from '../../constants/constants';
import Loading from '../loading/Loading';
import getImage from '../../services/getImage';
import { ELEVEN, NINETEEN, ONE_THOUSAND, TEN, ZERO } from '../../constants/constants';

const Details = () => {
  const [imageDetails, setImageDetails] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(true);

  const { id } = useParams();

  const handleDetails = async () => {
    try {
      const response = await getImage.get(`/rest/?method=flickr.photos.getInfo&photo_id=${id}`);
      const imgResponse = await getImage.get(`/rest/?method=flickr.photos.getSizes&photo_id=${id}`);
      setImageDetails(response.data.photo);
      setImageSrc(imgResponse.data.sizes);
      if (!response.data.photo) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleDetails();
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};
Details.propTypes = {
  url_o: PropTypes.string,
  location: PropTypes.object,
};
export default Details;
