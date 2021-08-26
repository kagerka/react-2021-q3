const defaultState = {
  beforeSearch: true,
};

const BEFORE_SEARCH = 'BEFORE_SEARCH';

export const beforeSearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BEFORE_SEARCH:
      return { state, beforeSearch: action.payload };
    default:
      return state;
  }
};

export const beforeSearchAction = (payload) => ({
  type: BEFORE_SEARCH,
  payload,
});
