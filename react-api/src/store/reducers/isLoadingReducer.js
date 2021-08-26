const defaultState = {
  isLoading: false,
};

const IS_LOADING = 'IS_LOADING';

export const isLoadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { state, isLoading: action.payload };
    default:
      return state;
  }
};

export const isLoadingAction = (payload) => ({
  type: IS_LOADING,
  payload,
});
