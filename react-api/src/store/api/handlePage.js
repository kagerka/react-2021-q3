import instance from '../../services/api';
import { getPhotosAction } from '../reducers/photosReducer';
import { pagesTotalAction } from '../reducers/pagesTotalReducer';
import { isLoadingAction } from '../reducers/isLoadingReducer';

export const handlePage = async ({ dispatch, searchValues, sortByValues, page, perPage }) => {
  dispatch(isLoadingAction(true));
  try {
    const response = await instance.get(
      `/rest/?method=flickr.photos.search&text=${searchValues}&sort=${sortByValues}&page=${page}&per_page=${perPage}`,
    );
    dispatch(getPhotosAction(response.data.photos?.photo));
    dispatch(pagesTotalAction(response.data.photos?.pages));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(isLoadingAction(false));
  }
};
