const defaultState = {
  imageSrc: undefined,
};

const IMAGE_SRC = 'IMAGE_SRC';

export const imageSrcReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGE_SRC:
      return { state, imageSrc: action.payload };
    default:
      return state;
  }
};

export const imageSrcAction = (payload) => ({
  type: IMAGE_SRC,
  payload,
});
