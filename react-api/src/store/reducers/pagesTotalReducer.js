const defaultState = {
  pagesTotal: 0,
};

const PAGES_TOTAL = 'PAGES_TOTAL';

export const pagesTotalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PAGES_TOTAL:
      return { state, pagesTotal: action.payload };
    default:
      return state;
  }
};

export const pagesTotalAction = (payload) => ({
  type: PAGES_TOTAL,
  payload,
});
