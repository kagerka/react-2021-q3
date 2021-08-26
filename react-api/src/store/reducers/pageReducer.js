const defaultState = {
  page: '1',
};

const PAGE_NUMBER = 'PAGE_NUMBER';

export const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PAGE_NUMBER:
      return { state, page: action.payload };
    default:
      return state;
  }
};

export const pageAction = (payload) => ({
  type: PAGE_NUMBER,
  payload,
});
