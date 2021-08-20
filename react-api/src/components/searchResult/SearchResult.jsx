import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './SearchResult.module.scss';
import { ONE, ONE_THOUSAND, TEN, ZERO } from '../../constants/constants';
import instance from '../../services/api';
import Loading from '../loading/Loading';

function SearchResult({
  photoList,
  searchValue,
  setPhotoList,
  pagesTotal,
  setPagesTotal,
  sortBy,
  page,
  setPage,
  perPage,
  setPerPage,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setPage(value);
  };
  const handlePage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await instance.get(
        `/rest/?method=flickr.photos.search&text=${searchValue}&sort=${sortBy}&page=${page}&per_page=${perPage}`,
      );
      setPhotoList(response.data.photos?.photo);
      setPagesTotal(response.data.photos?.pages);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const prevPage = async () => {
    if (+page > ONE) {
      setIsLoading(true);
      try {
        const response = await instance.get(
          `/rest/?method=flickr.photos.search&text=${searchValue}&sort=${sortBy}&page=${
            +page - ONE
          }&per_page=${perPage}`,
        );
        setPhotoList(response.data.photos?.photo);
        setPagesTotal(response.data.photos?.pages);
      } catch (err) {
        console.error(err);
      } finally {
        setPage((+page - ONE).toString());
        setIsLoading(false);
      }
    }
  };
  const nextPage = async () => {
    if (+page < pagesTotal) {
      setIsLoading(true);
      try {
        const response = await instance.get(
          `/rest/?method=flickr.photos.search&text=${searchValue}&sort=${sortBy}&page=${
            +page + ONE
          }&per_page=${perPage}`,
        );
        setPhotoList(response.data.photos?.photo);
        setPagesTotal(response.data.photos?.pages);
      } catch (err) {
        console.error(err);
      } finally {
        setPage((+page + ONE).toString());
        setIsLoading(false);
      }
    }
  };
  const validateInput = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <div>
      <div className={styles.options_wrapper}>
        <form className={styles.pagination_wrapper} onSubmit={handlePage}>
          <div className={styles.pageNum_wrapper}>
            <div className={styles.pagination_arrow} onClick={prevPage}>
              &#60;
            </div>
            <input
              type='text'
              onKeyPress={validateInput}
              className={`${styles.pagination_number} ${styles.pagination_number_input}`}
              value={page}
              onChange={handleChange}
            />
            of
            <div className={styles.pagination_number}>{pagesTotal}</div>
            <div className={styles.pagination_arrow} onClick={nextPage}>
              &#62;
            </div>
          </div>
          <div className={styles.perPageNum_wrapper}>
            Per page:
            <input
              type='text'
              onKeyPress={validateInput}
              className={`${styles.pagination_number} ${styles.pagination_number_input}`}
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
              }}
            />
          </div>
          <button type='submit' disabled={isLoading} className={styles.submit}>
            {isLoading ? 'Loading...' : 'Apply'}
          </button>
        </form>
      </div>
      <div className={styles.search_result_wrapper}>
        {photoList?.map(({ title, ownername, dateupload, url_s, url_o, views, id }, index) => {
          const props = useSpring({
            to: { opacity: 1, scale: '1' },
            from: { opacity: 0, scale: '0' },
          });
          return (
            <animated.div style={props} key={index} className={styles.photoCard}>
              <Link
                to={{
                  pathname: `/details/${id}`,
                  state: { url_o },
                }}
                className={styles.photoCard_link}
              >
                <div className={styles.image}>
                  <img src={url_s} alt={title} />
                </div>
                <div className={styles.content}>
                  <div className={styles.title} title={title}>
                    <b>Title: </b> {title}
                  </div>
                  <div className={styles.title} title={ownername}>
                    <b>Author: </b> {ownername.toLowerCase()}
                  </div>
                  <div>
                    <b>Date: </b>
                    {new Date(dateupload * ONE_THOUSAND).toISOString().slice(ZERO, TEN)}
                  </div>
                  <div className={styles.views_wrapper}>
                    <img src='/icons/view.svg' alt='' className={styles.views} />
                    {views}
                  </div>
                </div>
              </Link>
            </animated.div>
          );
        })}
      </div>
      {isLoading ? <Loading /> : <div></div>}
    </div>
  );
}

SearchResult.propTypes = {
  photoList: PropTypes.array,
  searchValue: PropTypes.string,
  setPhotoList: PropTypes.func,
  pagesTotal: PropTypes.number,
  setPagesTotal: PropTypes.func,
  sortBy: PropTypes.string,
  setPage: PropTypes.func,
  page: PropTypes.string,
  perPage: PropTypes.string,
  setPerPage: PropTypes.func,
};
export default SearchResult;
