import getImage from '../../services/getImage';
import { isLoadingAction } from '../reducers/isLoadingReducer';
import { imageDetailsAction } from '../reducers/imageDetailsReducer';
import { imageSrcAction } from '../reducers/imageSrcReducer';

export const handleDetails = async (dispatch, id) => {
  dispatch(isLoadingAction(true));
  try {
    const response = await getImage.get(`/rest/?method=flickr.photos.getInfo&photo_id=${id}`);
    const imgResponse = await getImage.get(`/rest/?method=flickr.photos.getSizes&photo_id=${id}`);
    dispatch(imageDetailsAction(response.data.photo));
    dispatch(imageSrcAction(imgResponse.data.sizes));
    if (!response.data.photo) {
      dispatch(isLoadingAction(true));
    } else {
      dispatch(isLoadingAction(false));
    }
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(isLoadingAction(false));
  }
};
