import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchResult.module.scss';
import { ONE_THOUSAND, TEN, ZERO } from '../../constants/constants';
import SearchOptions from './searchOptions/SearchOptions';

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
  return (
    <div>
      <SearchOptions
        searchValue={searchValue}
        setPhotoList={setPhotoList}
        pagesTotal={pagesTotal}
        setPagesTotal={setPagesTotal}
        sortBy={sortBy}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
      <div className={styles.search_result_wrapper}>
        {photoList?.map(({ title, ownername, dateupload, url_s, views, id }, index) => {
          return (
            <div key={index} className={styles.photoCard}>
              <Link
                to={{
                  pathname: `/details/${id}`,
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
            </div>
          );
        })}
      </div>
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
