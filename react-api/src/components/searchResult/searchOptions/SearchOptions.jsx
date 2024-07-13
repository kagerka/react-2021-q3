import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchOptions.module.scss';
import Loading from '../../loading/Loading';
import { pageAction } from '../../../store/reducers/pageReducer';
import { perPageAction } from '../../../store/reducers/perPageReducer';
import { nextPage, prevPage } from '../../../store/api/flipPages';
import { handlePage } from '../../../store/api/handlePage';

function SearchOptions() {
  const dispatch = useDispatch();

  const searchValues = useSelector((state) => state.searchValue.searchValue);
  const pagesTotal = useSelector((state) => state.pagesTotal.pagesTotal);
  const sortByValues = useSelector((state) => state.sortByValue.sortBy);
  const page = useSelector((state) => state.page.page);
  const perPage = useSelector((state) => state.perPage.perPage);
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(pageAction(value));
  };

  const validateInput = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className={styles.options_wrapper}>
        <form
          className={styles.pagination_wrapper}
          onSubmit={(e) => {
            e.preventDefault();
            handlePage({ dispatch, searchValues, sortByValues, page, perPage });
          }}
        >
          <div className={styles.pageNum_wrapper}>
            <div
              className={styles.pagination_arrow}
              onClick={() => prevPage({ dispatch, page, searchValues, sortByValues, perPage })}
            >
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
            <div
              className={styles.pagination_arrow}
              onClick={() => nextPage({ dispatch, page, searchValues, sortByValues, perPage, pagesTotal })}
            >
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
                dispatch(perPageAction(e.target.value));
              }}
            />
          </div>
          <button type='submit' disabled={isLoading} className={styles.submit}>
            {isLoading ? 'Loading...' : 'Apply'}
          </button>
        </form>
      </div>
      {isLoading ? <Loading /> : null}
    </div>
  );
}

export default SearchOptions;
