const defaultState = {
  perPage: '10',
};

const PER_PAGE = 'PER_PAGE';

export const perPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PER_PAGE:
      return { state, perPage: action.payload };
    default:
      return state;
  }
};

export const perPageAction = (payload) => ({
  type: PER_PAGE,
  payload,
});
