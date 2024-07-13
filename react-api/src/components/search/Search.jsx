import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Search.module.scss';
import SearchResult from '../searchResult/SearchResult';
import { ZERO } from '../../constants/constants';
import { searchValueAction } from '../../store/reducers/searchValueReducer';
import { sortByAction } from '../../store/reducers/sortByReducer';
import Loading from '../loading/Loading';
import SearchInfo from './searchInfo/SearchInfo';
import NotFound from '../error/NotFound';
import { fetchPhotos } from '../../store/api/fetchPhotos';

function Search() {
  const dispatch = useDispatch();

  const sortByValues = useSelector((state) => state.sortByValue.sortBy);
  const searchValues = useSelector((state) => state.searchValue.searchValue);
  const pagesTotal = useSelector((state) => state.pagesTotal.pagesTotal);
  const beforeSearch = useSelector((state) => state.beforeSearch.beforeSearch);
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(searchValueAction(value));
  };
  const handleSort = (e) => {
    const { value } = e.target;
    dispatch(sortByAction(value));
  };

  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  });

  return (
    <animated.div style={props} className={styles.header_wrapper}>
      <div className={styles.header}>
        <form
          className={styles.search_wrapper}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchPhotos({ dispatch, searchValues, sortByValues }));
          }}
        >
          <input
            type='text'
            placeholder='Type text here...'
            className={styles.search}
            style={{
              backgroundImage: 'url(/icons/loupe.svg)',
            }}
            required={true}
            id='search'
            value={searchValues}
            onChange={handleChange}
            disabled={isLoading}
          />
          <div className={styles.filters_wrapper}>
            <div className={styles.filter_wrapper}>
              <select onChange={handleSort} className={styles.filter} defaultValue='date-posted-desc'>
                <option value='date-posted-desc'>Date Descending</option>
                <option value='date-posted-asc'>Date Ascending</option>
                <option value='relevance'>Relevance</option>
                <option value='interestingness-asc'>Interestingness Ascending</option>
                <option value='interestingness-desc'>Interestingness Descending</option>
              </select>
            </div>
          </div>
          <button type='submit' className={styles.submit}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
      </div>
      {pagesTotal !== ZERO && <SearchResult />}
      {pagesTotal === ZERO && beforeSearch && <SearchInfo />}
      {pagesTotal === ZERO && searchValues !== '' && !beforeSearch && <NotFound />}
      {isLoading ? <Loading /> : null}
    </animated.div>
  );
}

export default Search;
