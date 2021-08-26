const defaultState = {
  photos: [],
};

const GET_PHOTOS = 'GET_PHOTOS';

export const photosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: [...action.payload] };
    default:
      return state;
  }
};

export const getPhotosAction = (payload) => ({
  type: GET_PHOTOS,
  payload,
});
