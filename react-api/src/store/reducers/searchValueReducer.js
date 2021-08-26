const defaultState = {
  searchValue: '',
};

const SEARCH_VALUE = 'SEARCH_VALUE';

export const searchValueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return { state, searchValue: action.payload };
    default:
      return state;
  }
};

export const searchValueAction = (payload) => ({
  type: SEARCH_VALUE,
  payload,
});
