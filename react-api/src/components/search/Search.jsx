import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Search.module.scss';
import instance from '../../services/api';
import SearchResult from '../searchResult/SearchResult';
import { ZERO } from '../../constants/constants';
import Loading from '../loading/Loading';
import NotFound from '../error/NotFound';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photoList, setPhotoList] = useState([]);
  const [pagesTotal, setPagesTotal] = useState(ZERO);
  const [sortBy, setSortBy] = useState('date-posted-desc');
  const [page, setPage] = useState('0');
  const [perPage, setPerPage] = useState('10');
  const [beforeSearch, setBeforeSearch] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const handleSort = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage('1');
    setPerPage('10');
    setIsLoading(true);
    try {
      const response = await instance.get(
        `/rest/?method=flickr.photos.search&text=${searchValue}&sort=${sortBy}&page=1&per_page=10`,
      );
      setPhotoList(response.data.photos?.photo);
      setPagesTotal(response.data.photos?.pages);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setBeforeSearch(false);
    }
  };
  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  });
  return (
    <animated.div style={props} className={styles.header_wrapper}>
      <div className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.search_wrapper}>
          <input
            type='text'
            placeholder='Type text here...'
            className={styles.search}
            style={{
              backgroundImage: 'url(/icons/loupe.svg)',
            }}
            required={true}
            id='search'
            value={searchValue}
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
          <button type='submit' disabled={isLoading} className={styles.submit}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
      </div>
      {pagesTotal !== ZERO ? (
        <SearchResult
          photoList={photoList}
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
      ) : (
        <NotFound searchValue={searchValue} beforeSearch={beforeSearch} />
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.search_info}>
          <img src='./icons/bot.svg' alt='' />
          <p>
            Type the text that you are looking for in the search field and click button "Search". It will automatically
            show you results of the images.
          </p>
        </div>
      )}
    </animated.div>
  );
}

export default Search;
