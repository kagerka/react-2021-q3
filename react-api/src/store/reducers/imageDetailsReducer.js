const defaultState = {
  imageDetails: undefined,
};

const IMAGE_DETAILS = 'IMAGE_DETAILS';

export const imageDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_DETAILS:
      return { state, imageDetails: action.payload };
    default:
      return state;
  }
};

export const imageDetailsAction = (payload) => ({
  type: IMAGE_DETAILS,
  payload,
});
