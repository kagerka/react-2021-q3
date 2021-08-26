import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import { handleDetails } from '../../store/api/handleDetails';
import DetailsInfo from './DetailsInfo';
import { imageDetailsAction } from '../../store/reducers/imageDetailsReducer';
import { imageSrcAction } from '../../store/reducers/imageSrcReducer';
import NotFound from '../error/NotFound';

const Details = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading.isLoading);
  const imageSrc = useSelector((state) => state.imageSrc.imageSrc);
  const { id } = useParams();

  useEffect(() => {
    dispatch(imageDetailsAction(undefined));
    dispatch(imageSrcAction(undefined));
    handleDetails(dispatch, id);
  }, [id]);

  return (
    <div>
      {isLoading ? <Loading /> : null}
      {imageSrc !== undefined ? <DetailsInfo /> : null}
      {imageSrc === undefined && !isLoading ? <NotFound /> : null}
    </div>
  );
};
export default Details;
