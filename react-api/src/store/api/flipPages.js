import { ONE } from '../../constants/constants';
import instance from '../../services/api';
import { getPhotosAction } from '../reducers/photosReducer';
import { pagesTotalAction } from '../reducers/pagesTotalReducer';
import { pageAction } from '../reducers/pageReducer';
import { isLoadingAction } from '../reducers/isLoadingReducer';

export const prevPage = async ({ dispatch, page, searchValues, sortByValues, perPage }) => {
  if (+page > ONE) {
    dispatch(isLoadingAction(true));
    try {
      const response = await instance.get(
        `/rest/?method=flickr.photos.search&text=${searchValues}&sort=${sortByValues}&page=${
          +page - ONE
        }&per_page=${perPage}`,
      );
      dispatch(getPhotosAction(response.data.photos?.photo));
      dispatch(pagesTotalAction(response.data.photos?.pages));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(pageAction((+page - ONE).toString()));
      dispatch(isLoadingAction(false));
    }
  }
};

export const nextPage = async ({ dispatch, page, searchValues, sortByValues, perPage, pagesTotal }) => {
  if (+page < pagesTotal) {
    dispatch(isLoadingAction(true));
    try {
      const response = await instance.get(
        `/rest/?method=flickr.photos.search&text=${searchValues}&sort=${sortByValues}&page=${
          +page + ONE
        }&per_page=${perPage}`,
      );
      dispatch(getPhotosAction(response.data.photos?.photo));
      dispatch(pagesTotalAction(response.data.photos?.pages));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(pageAction((+page + ONE).toString()));
      dispatch(isLoadingAction(false));
    }
  }
};
