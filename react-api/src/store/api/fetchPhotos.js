import { getPhotosAction } from '../reducers/photosReducer';
import instance from '../../services/api';
import { isLoadingAction } from '../reducers/isLoadingReducer';
import { beforeSearchAction } from '../reducers/beforeSearchReducer';
import { pagesTotalAction } from '../reducers/pagesTotalReducer';
import { pageAction } from '../reducers/pageReducer';
import { perPageAction } from '../reducers/perPageReducer';

export const fetchPhotos = ({ dispatch, searchValues, sortByValues }) => {
  dispatch(isLoadingAction(true));
  dispatch(pageAction('1'));
  dispatch(perPageAction('10'));
  return async () => {
    try {
      const response = await instance.get(
        `/rest/?method=flickr.photos.search&text=${searchValues}&page=1&per_page=10&sort=${sortByValues}`,
      );
      dispatch(getPhotosAction(response.data.photos?.photo));
      dispatch(pagesTotalAction(response.data.photos?.pages));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(isLoadingAction(false));
      dispatch(beforeSearchAction(false));
    }
  };
};
