const defaultState = {
  sortBy: 'date-posted-desc',
};

const SORT_BY = 'SORT_BY';

export const sortByReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SORT_BY:
      return { state, sortBy: action.payload };
    default:
      return state;
  }
};

export const sortByAction = (payload) => ({
  type: SORT_BY,
  payload,
});
